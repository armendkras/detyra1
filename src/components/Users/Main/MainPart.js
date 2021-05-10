import React, { useState } from "react";
import Header from "./Header/Header";
import Export from "../../../assets/icons/export.svg";
import Plus from "../../../assets/icons/plus.svg";
import SideDrawer from "../../../components/Users/Main/SideDrawer/Sidedrawer";
import DataGrdi from "../../Users/Main/DataGrid/DataGrid";

const MainPart = () => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerCloseHandler = () => {
    setSideDrawerIsVisible(false);
  };
  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };
  return (
    <div className="main">
      <Header />
      <div className="main__buttons">
        <div className="main__buttons--export">
          <span>Export</span>
          <img src={Export} />
        </div>
        <button onClick={sideDrawerToggleHandler}>
          <img src={Plus} /> Add New
        </button>
      </div>

      <div className="main__drawer">
        <SideDrawer
          open={sideDrawerIsVisible}
          closed={sideDrawerCloseHandler}
        />
      </div>
      <DataGrdi />
    </div>
  );
};

export default MainPart;
