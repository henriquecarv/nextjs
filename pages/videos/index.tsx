import Video from "../../components/Video";

export default function () {
  return (
    <>
      {Array(100)
        .fill("")
        .map((_, index) => (
          <Video key={index} />
        ))}
    </>
  );
}
