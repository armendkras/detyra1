import React from "react";
import BellIcon from "../../../assets/icons/bell.svg";
import Dashboard from "../../../assets/icons/dashboard.svg";
import Imports from "../../../assets/icons/imports.svg";
import Report from "../../../assets/icons/report.svg";
import Invoice from "../../../assets/icons/invoice.svg";
import Users from "../../../assets/icons/users.svg";
import Settings from "../../../assets/icons/settings.svg";
import SidebarOption from "./SidebarOptions/SidebarOptions";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__profile--avatar"></div>
        <div className="sidebar__profile--names">
          <span className="sidebar__profile--names-name">Lorem Ipsum</span>
          <span className="sidebar__profile--names-company">Filan Fisteku</span>
        </div>
      </div>
      <div className="sidebar__notification">
        <div className="sidebar__notification-first">
          <img src={BellIcon} alt="bell-icon" />
          <span>Notifications</span>
        </div>
        <span className="sidebar__notification-second">13</span>
      </div>

      <span className="sidebar__menu">Menu</span>
      <div className="sidebar__oi">
        <div className="sidebar__oi--options">
          <SidebarOption Icon={Dashboard} Title="Dashboard" />
          <SidebarOption Icon={Imports} Title="Imports" />
          <SidebarOption Icon={Report} Title="Report" />
          <SidebarOption Icon={Invoice} Title="Invoice" />
          <SidebarOption Icon={Users} Title="Users" />
          <SidebarOption Icon={Settings} Title="Settings" />
        </div>
        <div className="sidebar__oi--invite">
          <div className="sidebar__oi--invite-line"></div>
          <span className="sidebar__oi--invite-text">
            Invite your team and start collaborating!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
