import React from "react";

const Menus = ({ Icon, Title }) => {
  return (
    <div className="menus">
      <img src={Icon} />
      <p>{Title}</p>
    </div>
  );
};

export default Menus;
