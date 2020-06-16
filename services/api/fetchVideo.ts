export default async (mediaSource: MediaSource, mimeCodec: string) => {
  const videoSourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  videoSourceBuffer.addEventListener("updateend", () => {
    mediaSource.endOfStream();
  });

  const response = await fetch("http://localhost:3000/api/video");

  const videoData = await response.arrayBuffer();

  videoSourceBuffer.appendBuffer(videoData);
};
