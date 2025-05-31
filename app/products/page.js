"use client";
import PageBanner from "@/components/PageBanner";
import Layout from "@/layouts/Layout";
import Link from "next/link";
import { products } from "../products";
import { useEffect, useState } from "react";
import UserInfoPopup from "@/components/userDetailPopup";

const Products = () => {
  const [showBar, setShowBar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const isScrollingDown = st > lastScrollTop;
      lastScrollTop = st <= 0 ? 0 : st;

      if (isScrollingDown && window.innerWidth >= 768) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+919942500600"; // Replace with your number
  };

  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/EZFSQGfVzj9pBQ5e9", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919942500600", "_blank"); // Replace with your number
  };

  const handleMail = () => {
    window.location.href = "mailto:ostrocemex@gmail.com"; // Replace with your email
  };

  const handleFacebook = () => {
    window.open("https://facebook.com/yourprofile", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/yourprofile", "_blank");
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

  useEffect(() => {

    let lastScrollTop = 0;
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const isScrollingDown = st > lastScrollTop;
      lastScrollTop = st <= 0 ? 0 : st;

      if (isScrollingDown && window.innerWidth >= 768) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <Layout>
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
      <PageBanner title={"Products"} />
      <section className="products-area pt-120 pb-120">
        <div
          className={`floating-social-bar ${showBar ? "visible" : ""}`}
          style={{
            position: "fixed",
            bottom: 10,
            left: "50%",
            transform: `translate(-50%, ${showBar ? "0%" : "100%"})`,
            width: "80%",
            backgroundColor: "#fff",
            zIndex: 9999,
            justifyContent: "",
            alignItems: "center",
            transition: "transform 0.3s ease-in-out",
            borderRadius: "10px 10px 10px 10px",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            className="d-none d-md-flex row"
            style={{
              marginBottom: "10px",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap", // Optional: Makes it responsive
                width: "95%",
              }}
            >
              {/* Left Section: Main Social Buttons */}
              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  className="social-main-btn"
                  onClick={handleCall}
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      height: "32px",
                      width: "32px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/Call Us.svg"
                      alt="Call"
                      style={{ height: "20px", width: "20px" }}
                    />
                  </div>
                  Call Us
                </button>
                <button
                  className="social-main-btn"
                  onClick={handleLocation}
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      height: "32px",
                      width: "32px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/Location.svg"
                      alt="Call"
                      style={{ height: "20px", width: "20px" }}
                    />
                  </div>
                  Location
                </button>
                <button
                  className="social-main-btn"
                  onClick={() => {
                    const userInfo = sessionStorage.getItem("userInfo");
                    if (isMobile) {
                      handleWhatsApp(); // Directly open WhatsApp on mobile
                    } else {
                      if (!userInfo) {
                        setIsPopupOpen(true); // Open the popup if session data is not available
                      } else {
                        handleWhatsApp();
                      }
                    }
                  }}
                  style={{
                    width: "160px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      height: "32px",
                      width: "32px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/whatsapp.svg"
                      alt="Call"
                      style={{ height: "20px", width: "20px" }}
                    />
                  </div>
                  WhatsApp
                </button>
                <button
                  className="social-main-btn"
                  onClick={handleMail}
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      height: "32px",
                      width: "32px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/email.svg"
                      alt="Call"
                      style={{ height: "20px", width: "20px" }}
                    />
                  </div>
                  Mail Us
                </button>
              </div>

              {/* Right Section: Rounded Social Buttons */}
              <div
                  style={{ display: "flex", gap: "10px", marginLeft: "20px" }}
                >
                  <button
                    className="social-rounded-btn"
                    onClick={handleFacebook}
                  >
                    <img
                      src="/assets/images/social-media-icons/Facebook.svg"
                      alt="Facebook"
                    />
                  </button>
                  <button
                    className="social-rounded-btn"
                    onClick={handleInstagram}
                  >
                    <img
                      src="/assets/images/social-media-icons/Instagram.svg"
                      alt="Instagram"
                    />
                  </button>
                  <button
                    className="social-rounded-btn"
                    onClick={handleLinkedIn}
                  >
                    <img
                      src="/assets/images/social-media-icons/Linkedin.svg"
                      alt="LinkedIn"
                    />
                  </button>
                  <button className="social-rounded-btn" onClick={handleShare}>
                    <img
                      src="/assets/images/social-media-icons/Share.svg"
                      alt="Share"
                    />
                  </button>
                </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="products-item-wrapper">
            <div className="row">
              {products.map((val) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products-item products-item-one mb-25 wow fadeInUp">
                      <div className="product-img">
                        <Link href={`/product-details/${val.slug}`}>
                          <img
                            src={val?.image}
                            alt="products Image"
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a href={val?.image} className="icon img-popup">
                              <i className="ti-zoom-in" />
                            </a>
                          </div>
                        </div>
                        </Link>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <Link href={`/product-details/${val.slug}`}>
                            {val.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-2.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-2.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Green Plastic Light</Link>
                    </h3>
                    <span className="price">$120.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-3.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-3.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Leaser Photography</Link>
                    </h3>
                    <span className="price">$320.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-4.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-4.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Nike Sports Shoe</Link>
                    </h3>
                    <span className="price">$232.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-5.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-5.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Room Decorator</Link>
                    </h3>
                    <span className="price">$320.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-6.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-6.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Card Showcase</Link>
                    </h3>
                    <span className="price">$852.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-7.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-7.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Hand Watch</Link>
                    </h3>
                    <span className="price">$25.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-8.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-8.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Realstic Dumbell</Link>
                    </h3>
                    <span className="price">$50.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-9.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-9.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Hand Speaker</Link>
                    </h3>
                    <span className="price">$250.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="button text-center mt-50 wow fadeInUp">
                  <a href="#" className="main-btn">
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="products-item-wrapper">
            <div
              className="row"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              {products.map((val) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={val.slug}>
                    <div className="listing-item listing-grid-item-two">
                      <div
                        className="listing-thumbnail"
                        style={{
                          backgroundColor: `${val.backgroundColor}`,
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          height: "400px",
                        }}
                      >
                        <Link href={`/product-details/${val.slug}`}>
                          <img
                            src={val.image} // <-- Update TV image here
                            alt="TV Product Image"
                          />
                        </Link>
                        <span
                          className="featured-btn"
                          style={{ borderRadius: "5px", fontSize:"10px", padding:"3px 10px" }}
                        >
                          Featured
                        </span>
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href={`/product-details/${val.slug}`}>
                            {val.name}
                          </Link>{" "}
                        </h3>
                        <p
                          style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 5,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "300px",
                            lineHeight: "1.5",
                            marginBottom: "15px",
                          }}
                        >
                          {val.detail}
                        </p>{" "}
                        {/* <div className="features-list">
                          <ul>
                            {" "}
                            <li
                              style={{
                                color: "#000",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            >
                              {"Smart TV"}
                            </li>
                          </ul>
                        </div> */}
                        <span className="phone-meta"></span>
                        <div className="listing-meta">
                          <ul
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              width: "100%",
                            }}
                          >
                            <li style={{ width: "100%" }}>
                              <Link
                                href={`/product-details/${val.slug}`}
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  width: "100%",
                                }}
                              >
                                <div
                                  className="flex items-center gap-2 px-3 py-1 mt-1 mb-3 rounded-lg transition"
                                  style={{
                                    backgroundColor: "#FFF",
                                    border: "1px solid #B62025",
                                    borderColor: "#B62025",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                  }}
                                >
                                  <span
                                    className="underline"
                                    style={{ fontSize: "18px", color:"#B62025" }}
                                  >
                                    View Details
                                  </span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Products;
