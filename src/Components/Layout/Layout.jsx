import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    const titles = {
      "/": "Home",
      "/about": "About",
      "/portfolio": "Portfolio",
      "/contact": "Contact"
    };

    document.title = titles[location.pathname] || "Error";
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="mt-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
