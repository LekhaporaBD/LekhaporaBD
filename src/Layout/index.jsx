import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main className="layout-main">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
