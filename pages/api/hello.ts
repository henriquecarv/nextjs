import { NowRequest, NowResponse } from "@vercel/node";
import { join } from "path";
const greeting: Object = require(join(
  __dirname,
  "_files/json",
  "greeting.json"
));

export default (_: NowRequest, res: NowResponse) => {
  res.json(greeting);
};
