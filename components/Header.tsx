import { FC } from "react";
import Head from "next/head";

type Props = {
  title: string;
  keywords?: Array<string>;
};

const Header: FC<Props> = ({ title, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
    </Head>
  );
};

export default Header;
