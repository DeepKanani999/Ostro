import RetailerPopup from "@/../app/RetailerPopup/RetailerPopup";
import Link from "next/link";
import React, { useState } from "react";

const Header2 = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <header className="header-area header-area-two d-none d-xl-block">
      <div className="header-navigation">
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="row align-items-center">
              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <Link className="brand-logo" href="/">
                    <img
                      src="/assets/images/logo/logo-2.png"
                      alt="Brand Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-2">
                <div className="nav-menu">
                  <div className="navbar-close">
                    <i className="ti-close"></i>
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/about">About</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/products">Products</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4 col-5">
                <div className="header-right-nav">
                  <ul className="d-flex align-items-center">
                    <li className="nav-btn">
                      <button
                        className="main-btn"
                        onClick={() => setShowPopup(true)}
                      >
                        Find Retailers
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <RetailerPopup
                visible={showPopup}
                onClose={() => setShowPopup(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
