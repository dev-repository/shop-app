import { NextApiRequest, NextApiResponse } from 'next';
import { RESULT_CODE } from '~/server/errors/code';
import {
  BadRequest,
  Forbidden,
  HttpException,
  InternalServerError,
  Unauthorized,
} from '~/server/errors/exceptions';
import referrerMiddleware from '~/server/middleware/referrerMiddleware';
import { UsersService } from '~/server/services/users/users';
import { createSchema } from '~/server/services/users/users.schema';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const result = referrerMiddleware(req);
    if (!result) {
      return new Forbidden('CSRF token is not valid', {
        resultCode: RESULT_CODE.CSRF_TOKEN_NOT_VALID,
        resultMessage: 'CSRF token is not valid',
      });
    }

    let body;
    try {
      body = JSON.parse(req.body);
    } catch (error) {
      body = req.body;
    }

    const requestBody = createSchema.safeParse(body);
    if (!requestBody.success) {
      throw new BadRequest(requestBody.error.message, {
        resultCode: RESULT_CODE.BODY_DATA_INVALID,
        resultMessage: requestBody.error.message,
      });
    }

    const { email, password } = requestBody.data;

    const { ok, error } = await UsersService.authorize(email, password);
    if (!ok) {
      if (error === RESULT_CODE.USER_NOT_FOUND) {
        throw new Unauthorized({
          resultCode: error,
          resultMessage: 'User not found',
        });
      } else if (error === RESULT_CODE.INVALID_PASSWORD) {
        throw new Unauthorized({
          resultCode: error,
          resultMessage: 'Invalid password',
        });
      }
      throw new InternalServerError();
    }

    return res.status(200).json({ message: 'Good!' });
  } catch (error) {
    if (error instanceof HttpException) {
      const result = error.toJson();
      return res
        .status(result.status)
        .json({ data: null, message: error.message, result: result.metadata });
    }
    return res.status(500).json({ data: null, message: null, result: null });
  }
}
