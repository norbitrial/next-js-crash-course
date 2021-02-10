import { ReactChild } from "react";
import { FC } from "react";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

type Props = {
  children: ReactChild;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
