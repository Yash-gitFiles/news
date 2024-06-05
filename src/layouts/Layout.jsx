import React from "react";
import NavbarComponents from "./NavbarComponents";
import FooterComponents from "./FooterComponents";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <NavbarComponents />
      <Outlet />
      <FooterComponents />
    </div>
  );
}

export default Layout;
