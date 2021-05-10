import React from "react";

const SidebarOptions = ({ Icon, Title }) => {
  return (
    <div className="sidebar-options">
      <img src={Icon} alt="OptionIcon" />
      <p>{Title}</p>
    </div>
  );
};

export default SidebarOptions;
