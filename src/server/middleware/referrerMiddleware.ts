import { NextApiRequest, NextApiResponse } from 'next';

export default function referrerMiddleware(req: NextApiRequest) {
  const referrer = req.headers.referer;
  if (!referrer) return false;

  const referrerUrl = new URL(referrer);
  const host = req.headers.host;
  if (!host) return false;

  const hostUrl = new URL(`http://${host}`);
  if (referrerUrl.origin !== hostUrl.origin) return false;
  return true;
}
