import Head from "next/head";

interface IProps {
  pageTitle: string;
  favIcon?: string;
}

export default function ({ pageTitle, favIcon = "/favicon.ico" }: IProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href={favIcon} />
    </Head>
  );
}
