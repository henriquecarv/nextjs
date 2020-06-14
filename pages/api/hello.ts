import { NowRequest, NowResponse } from "@vercel/node";

export default (_: NowRequest, res: NowResponse) => {
  const greetings = "Hello Vercel!";

  res.json({ greetings });
};
