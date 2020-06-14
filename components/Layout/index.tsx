import Head from "./../Head";
import { globalStyles } from "../../styles/globalStyles";
import { ReactNode } from "react";

interface IProps {
  pageTitle: string;
  children: ReactNode;
}

export default function ({ pageTitle, children }: IProps) {
  return (
    <div className="Layout Layout__container">
      <Head pageTitle={pageTitle} />
      {children}
      <style jsx>{globalStyles}</style>
    </div>
  );
}
