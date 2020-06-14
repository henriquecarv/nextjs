import { NowRequest, NowResponse } from "@vercel/node";

type Next = (param: any) => void;

export default function errorHandler(
  err: Error,
  _: NowRequest,
  res: NowResponse,
  next: Next
) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.json({ error: err });
}
