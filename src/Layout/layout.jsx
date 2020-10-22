import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{backgroundColor: '#f1f1f1', width: '100% !important'}}>{props.children}</main>
    </div>
  );
};

export default Layout;
