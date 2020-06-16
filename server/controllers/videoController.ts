import { createReadStream } from "fs";
import { NowRequest, NowResponse } from "@vercel/node";
import getFile from "../../utils/getFile";
import { join } from "path";

export const streamVideo = async (_: NowRequest, res: NowResponse) => {
  const fileName = "frag_bunny.mp4";
  const fileDirectoryPath = join(process.cwd(), "/_files/videos");

  const videoFile = await getFile(fileDirectoryPath, fileName);

  const { length } = videoFile;

  res.writeHead(200, { "Content-Length": length, "Content-Type": "video/mp4" });

  const filePath = join(fileDirectoryPath, fileName);
  createReadStream(filePath).pipe(res);
};
