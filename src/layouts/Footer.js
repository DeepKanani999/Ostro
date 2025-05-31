import UserInfoPopup from "@/components/userDetailPopup";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [writtenMessage, setWrittenMessage] = useState("");
  const handleFacebook = () => {
    window.open(
      "https://www.facebook.com/",
      "_blank"
    );
  };

  const handleInstagram = () => {
    window.open(
      "https://www.instagram.com/",
      "_blank"
    );
  };

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/", "_blank");
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check this out!",
          text: "Have a look at this amazing website.",
          url: window.location.href,
        });
      } else {
        alert("Sharing is not supported on this browser.");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  const [isMobile, setIsMobile] = useState(false);

  const isMobileDevice = () => {
    // Check user agent
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileUserAgent =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    // Check screen width
    const isMobileScreen = window.innerWidth <= 768;

    // Check if device has touch capability
    const hasTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    return isMobileUserAgent || (isMobileScreen && hasTouchScreen);
  };

  useEffect(() => {
    // Initial check
    setIsMobile(isMobileDevice());

    // Add resize listener
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="footer-area">
      {mounted && isPopupOpen && !sessionStorage.getItem("userInfo") && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "20px",
            width: "90%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <UserInfoPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
      )}
      <div className="footer-wrapper-one dark-black pt-40 pb-80">
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="widget about-widget mb-40 wow fadeInUp"
                  data-wow-delay="10ms"
                >
                  {/* <h4 className="widget-title">Mobile Experience</h4>
                  <ul className="button">
                    <li>
                      <a href="#" className="app-btn android-btn">
                        <div className="icon">
                          <i className="ti-android"></i>
                        </div>
                        <div className="info">
                          <span>get it on</span>
                          <h6>Goole Play</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="app-btn apple-btn">
                        <div className="icon">
                          <i className="ti-apple"></i>
                        </div>
                        <div className="info">
                          <span>get it on</span>
                          <h6>App Store</h6>
                        </div>
                      </a>
                    </li>
                  </ul> */}
                  <div className="footer-social">
                    <h4>Follow Us</h4>
                    <ul className="social-link">
                      <li>
                        <a onClick={handleFacebook}>
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a onClick={handleLinkedIn}>
                          <i className="ti-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a onClick={handleShare}>
                          <i className="ti-sharethis"></i>
                        </a>
                      </li>
                      <li>
                        <a onClick={handleInstagram}>
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget recent-post-widget mb-40 wow fadeInUp"
                  data-wow-delay="20ms"
                >
                  <h4 className="widget-title">About Us</h4>
                  <ul className="post-widget-list">
                    <li className="post-content-item">
                      <div className="post-title-date">
                        <span className="posted-on">
                          {/* <a href="#">22 May - 2025</a> */}
                        </span>
                        <h6 className="title">
                          <Link href="#" style={{ color: "#fff" }}>
                            "Discover powerful Ostro tile adhesive that
                            strengthens every bond, ensures lasting durability,
                            and delivers unmatched performance for every tile
                            installation."
                          </Link>
                        </h6>
                      </div>
                    </li>
                    {/* <li className="post-content-item">
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#">22 August - 2021</a>
                        </span>
                        <h6 className="title">
                          <Link href="#">
                            Facilisis a ultricies quis dictumst fredom...
                          </Link>
                        </h6>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div
                  className="widget categories-widget mb-40 wow fadeInUp"
                  data-wow-delay="30ms"
                >
                  <h4 className="widget-title">Categories</h4>
                  <ul className="categories-link">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/products">Products</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget newsletter-widget mb-40 wow fadeInUp"
                  data-wow-delay="40ms"
                >
                  <h4 className="widget-title">Get in Touch</h4>
                  {/* <p>
                    Caoreet massa torto pon interdum sestibulum suscipit duis.
                  </p> */}
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Write your message here..."
                        name="email"
                        required
                        onChange={(e) => setWrittenMessage(e.target.value)}
                        value={writtenMessage}
                      />
                    </div>
                    <div className="form_group">
                      <button
                        className="main-btn"
                        onClick={() => {
                          const userInfo = sessionStorage.getItem("userInfo");
                          if (isMobile) {
                            const phoneNumber = "919375719988"; // Replace with your retailer's WhatsApp number
                            const message = writtenMessage;
                            const encodedMessage = encodeURIComponent(message);
                            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                            window.open(whatsappURL, "_blank");
                          } else {
                            if (!userInfo) {
                              setIsPopupOpen(true); // Open the popup if session data is not available
                            } else {
                              const phoneNumber = "919375719988"; // Replace with your retailer's WhatsApp number
                              const message = writtenMessage;
                              const encodedMessage =
                                encodeURIComponent(message);
                              const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                              window.open(whatsappURL, "_blank");
                            }
                          }
                        }}
                        style={{ backgroundColor: "#fff" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2025. All rights reserved to{" "}
                    <span>GreyPix Studio</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copyright-link">
                  <ul>
                    <li>
                      <Link href="/Terms-Condition">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="/Privacy-Policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
