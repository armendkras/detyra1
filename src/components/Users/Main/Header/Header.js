import React from "react";
import Users from "../../../../assets/icons/users.svg";
import Menus from "./Menus/Menus";
import Fingerprint from "../../../../assets/icons/fingerprint.svg";
import Calendar from "../../../../assets/icons/calendar.svg";
import Book from "../../../../assets/icons/book.svg";
import Search from "../../../../assets/icons/search.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Users} alt="useIcon" />
        <h1>Users</h1>
      </div>
      <div className="header__right">
        <Menus Icon={Fingerprint} Title="ID" />
        <Menus Icon={Calendar} Title="Country" />
        <Menus Icon={Book} Title="Company" />
        <div className="header__right--search">
          <img src={Search} />
          <input className="header__right--search-input" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
