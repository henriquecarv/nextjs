import { promises } from "fs";
import { resolve as resolvePath } from "path";

export default (filePath: string, fileName: string) => {
  return promises.readFile(resolvePath(filePath, fileName));
};
