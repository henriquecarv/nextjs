import { NowRequest, NowResponse } from "@vercel/node";
import greeting from "./../_files/json/greeting.json";

export const sayHello = async (_: NowRequest, res: NowResponse) => {
  res.json(greeting);
};
