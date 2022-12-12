import React from "react";

const Header = ({ data }) => {
  return (
    <div className="page-heading-wrapper">
      <h1 className="page-heading">{`${data.toUpperCase()} .`}</h1>
    </div>
  );
};

export default Header;
