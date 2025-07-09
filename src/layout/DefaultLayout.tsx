import React, {  ReactNode,  } from "react";
import Sidebar from "../components/Sidebar";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <main>
        <Sidebar/>
        <div className="ms-[275px]">{children}</div>
      </main>
    </div>
  );
};

export default DefaultLayout;
