import React from "react";

import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
