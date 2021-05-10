import React from "react";
import Sidebar from "../components/Users/Sidebar/Sidebar";

const MainLayout = (props) => {
  return (
    <div className="layoutAdmin">
      <>
        <div className="sidebarLayout">
          <Sidebar />
        </div>
        <div className="mainLayout">{props.children}</div>
      </>
    </div>
  );
};

export default MainLayout;
