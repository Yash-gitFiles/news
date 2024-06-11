import React from "react";
import NavbarComponents from "./NavbarComponents";
import FooterComponents from "./FooterComponents";
import { Outlet } from "react-router-dom";
import UpArrow from "../components/common/UpArrow";

function Layout({ query, setQuery, setNews }) {
  return (
    <div>
      <UpArrow />
      <NavbarComponents setQuery={setQuery} query={query} setNews={setNews} />
      <Outlet />
      <FooterComponents />
    </div>
  );
}

export default Layout;
