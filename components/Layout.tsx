import { ReactChild, useState } from "react";
import { FC } from "react";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

type Props = {
  children: ReactChild;
};

const Layout: FC<Props> = ({ children }) => {
  const [currentMenu, setCurrentMenu] = useState<"Home" | "About">("Home");

  return (
    <>
      <Nav currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {currentMenu}
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <div className={styles.container}>
                <main className={styles.main}>{children}</main>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
