import { NowRequest, NowResponse } from "@vercel/node";
import { streamVideo } from "./../../server/controllers/videoController";

export default (req: NowRequest, res: NowResponse) => {
  streamVideo(req, res);
};
