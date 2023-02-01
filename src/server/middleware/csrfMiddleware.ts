import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { verifyCSRFToken } from '~/utils/csrf';

const schema = z.object({
  csrfToken: z.string().min(1),
});

export default function csrfMiddleware(req: NextApiRequest) {
  try {
    const { csrfToken } = schema.parse(req.body);
    if (verifyCSRFToken(csrfToken)) return true;
    else return false;
  } catch (error) {
    return false;
  }
}
