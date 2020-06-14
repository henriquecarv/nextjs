import { NowRequest, NowResponse } from "@vercel/node";
import greeting from "./../../json/greeting.json";

export default (_: NowRequest, res: NowResponse) => {
  res.json(greeting);
};
