import { useRef, useEffect } from "react";
import fetchVideo from "../../services/api/fetchVideo";

export default function () {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

    if (videoRef.current && MediaSource.isTypeSupported(mimeCodec)) {
      const mediaSource = new MediaSource();
      const url = URL.createObjectURL(mediaSource);

      videoRef.current.src = url;
      mediaSource.addEventListener("sourceopen", () => {
        fetchVideo(mediaSource, mimeCodec);
      });
    }
  }, []);

  return (
    <>
      <video ref={videoRef} width="400" autoPlay controls />
    </>
  );
}
