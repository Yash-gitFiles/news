import React from "react";
import NavbarComponents from "./NavbarComponents";
import FooterComponents from "./FooterComponents";
import { Outlet } from "react-router-dom";

function Layout({ query, setQuery, news, setNews }) {
  return (
    <div>
      <NavbarComponents
        setQuery={setQuery}
        query={query}
        news={news}
        setNews={setNews}
      />
      <Outlet />
      <FooterComponents />
    </div>
  );
}

export default Layout;
