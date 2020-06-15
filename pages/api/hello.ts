import { NowRequest, NowResponse } from "@vercel/node";
import { sayHello } from "../../server/controllers/helloController";

export default (req: NowRequest, res: NowResponse) => {
  sayHello(req, res);
};
