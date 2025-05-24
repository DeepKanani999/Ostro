"use client";

import Link from "next/link";
import { useState } from "react";
import { About, Contact } from "./Menu";
import RetailerPopup from "@/RetailerPopup/RetailerPopup";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [showRetailerPopup, setShowRetailerPopup] = useState(false);
  
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <header
      className="header-area header-area-one d-xl-none"
      style={{
        width: "100%", // Ensure the header spans the full width
        position: "fixed", // Fix the header at the top
        top: 0,
        left: 0,
        zIndex: 9999, // Ensure it stays on top of other elements
        backgroundColor: "#fff", // Add a background color
      }}
    >
      {showRetailerPopup && (
        <RetailerPopup 
          visible={showRetailerPopup} 
          onClose={() => setShowRetailerPopup(false)} 
        />
      )}
      
      <div
        className="header-navigation sticky breakpoint-on"
        style={{
          width: "100%", // Ensure the navigation spans the full width
          padding: "0", // Remove any padding
          margin: "0", // Remove any margin
        }}
      >
        <div className="container-fluid" style={{ padding: "0" }}>
          <div className="primary-menu">
            <div className="row" style={{ margin: "0" }}>
              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <Link className="brand-logo" href="/">
                    <img
                      src="/assets/images/logo/logo-2.png"
                      alt="Brand Logo"
                      style={{ maxWidth: "100%" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-2">
                <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
                  <div
                    className="navbar-close"
                    onClick={() => setToggle(false)}
                  >
                    <i className="ti-close"></i>
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item">
                        <Link href="/">Home</Link>
                      </li>
                      <About />
                      <li className="menu-item">
                        <a href="/products">Products</a>
                      </li>
                      <Contact />
                      <li className="nav-btn">
                        <button 
                          className="main-btn" 
                          onClick={() => setShowRetailerPopup(true)}
                        >
                          Find Retailers
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4 col-5">
                <div className="header-right-nav">
                  <ul className="d-flex align-items-center">
                    <li className="user-btn">
                      <Link className="icon" href="/">
                        <i className="flaticon-avatar"></i>
                      </Link>
                    </li>
                    <li className="hero-nav-btn">
                      <button
                        className="main-btn"
                        onClick={() => setShowRetailerPopup(true)}
                      >
                        Find Retailers
                      </button>
                    </li>
                    <li className="nav-toggle-btn">
                      <div
                        className={`navbar-toggler ${toggle ? "active" : ""}`}
                        onClick={() => setToggle(!toggle)}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;
