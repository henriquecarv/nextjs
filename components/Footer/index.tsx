import { styles } from "./../../styles/footerStyles";

export default function () {
  return (
    <>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
      <style jsx>{styles}</style>
    </>
  );
}
