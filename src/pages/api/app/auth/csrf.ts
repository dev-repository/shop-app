import { NextApiRequest, NextApiResponse } from 'next';
import { RESULT_CODE } from '~/server/errors/code';
import { Forbidden, HttpException } from '~/server/errors/exceptions';
import referrerMiddleware from '~/server/middleware/referrerMiddleware';
import { createCSRFToken } from '~/utils/csrf';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
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
    const csrfToken = createCSRFToken();
    return res
      .status(200)
      .json({ data: csrfToken, message: null, result: null });
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
