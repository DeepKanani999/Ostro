"use client";

import { useEffect, useState } from "react";
import PageBanner from "./PageBanner";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import { reletedProductSlider } from "@/sliderProps";
import Link from "next/link";
import { products } from "@/products";
import UserInfoPopup from "./userDetailPopup";

const ProductDetailsClient = ({ item }) => {
  const [showBar, setShowBar] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

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
    const phoneNumber = "919942500600"; // Replace with your number
    const defaultMessage = `Hi, I'm interested in your products. Could you please provide more details?`;

    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleMail = () => {
    window.location.href = "mailto:ostrocemex@gmail.com"; // Replace with your email
  };

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

  const handleButtonClick = () => {
    if (!mounted) return;

    const userInfo = sessionStorage.getItem("userInfo");
    if (!userInfo) {
      setIsPopupOpen(true);
    } else {
      handleWhatsApp();
    }
  };

  const getPriceButton = (item) => {
    if (!mounted) return;

    const userInfo = sessionStorage.getItem("userInfo");
    if (isMobile) {
      const phoneNumber = "919942500600";
      const imageUrl = `https://www.ostrocemex.com/${item?.image}`;

      // Create a message with product details and image URL
      const message = `*Product Inquiry*

  ${imageUrl}
  
  *Product Details:*
  • Name: ${item?.name}
  • Description: ${item?.detail}

  *Usability:*
  ${item?.usability?.map((use) => `• ${use}`).join("\n")}
  
  *Specifications:*
  ${item?.specification?.map((spec) => `• ${spec}`).join("\n")}
  
  Please provide information about:
  • Current price
  • Availability
  • Delivery options
  • Warranty details
  
  Thank you!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");
    } else {
      if (!userInfo) {
        setIsPopupOpen(true);
      } else {
        const phoneNumber = "919942500600";
        const imageUrl = `https://www.ostrocemex.com/${item?.image}`;

        // Create a message with product details and image URL
        const message = `*Product Inquiry*

  ${imageUrl}
  
  *Product Details:*
  • Name: ${item?.name}
  • Description: ${item?.detail}

  *Usability:*
  ${item?.usability?.map((use) => `• ${use}`).join("\n")}
  
  *Specifications:*
  ${item?.specification?.map((spec) => `• ${spec}`).join("\n")}
  
  Please provide information about:
  • Current price
  • Availability
  • Delivery options
  • Warranty details
  
  Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
      }
    }
  };

  return (
    <div>
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
      <PageBanner title="Product Detail" />
      <section className="product-details-section pt-120 pb-115">
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
        <div className="container">
          <div
            className="product-details-wrapper mb-30 w-full"
            style={{ width: "100%" }}
          >
            <div
              className={`${isMobile ? "flex flex-col" : ""}`}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                width: "100%",
                gap: "20px",
              }}
            >
              <div
                style={{
                  // width: isMobile ? "100%" : "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: item?.backgroundColor || "#fff",
                  borderRadius: "10px",
                  // padding: "20px",
                }}
              >
                <img
                  src={item?.image}
                  alt={item?.name || "Product Image"}
                  style={{
                    width: "350px",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  width: isMobile ? "100%" : "50%",
                  padding: isMobile ? "0px" : "0 20px",
                }}
              >
                <div className="product-info mt-30">
                  <h3
                    className="title"
                    style={{
                      fontSize: isMobile ? "20px" : "24px",
                      marginBottom: "15px",
                    }}
                  >
                    {item?.name}
                  </h3>
                  <span
                    style={{
                      fontSize: isMobile ? "14px" : "16px",
                      color: "#666",
                      marginBottom: "20px",
                      display: "block",
                    }}
                  >
                    {item?.detail}
                  </span>
                  <button
                    onClick={() => {
                      getPriceButton(item);
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-1 mt-3 mb-3 border border-gray-300 rounded-lg transition"
                    style={{
                      backgroundColor: "#24D07A",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width: isMobile ? "100%" : "fit-content",
                    }}
                  >
                    <img
                      src="/assets/images/WhatsApp_Image.png"
                      alt="WhatsApp Icon"
                      style={{
                        height: "17px",
                        width: "17px",
                        marginRight: "8px",
                      }}
                    />
                    <span
                      className="underline text-white"
                      style={{
                        fontSize: isMobile ? "16px" : "18px",
                      }}
                    >
                      Get Price
                    </span>
                  </button>
                  <div className="product-meta mt-4">
                    <div className="category" style={{ marginBottom: "20px" }}>
                      <span
                        className="title text-sm"
                        style={{
                          display: "block",
                          marginBottom: "10px",
                          fontWeight: "bold",
                          fontSize: isMobile ? "14px" : "16px",
                        }}
                      >
                        Usability:
                      </span>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        {item?.usability?.map((val) => (
                          <span
                            key={val}
                            style={{
                              borderRadius: "20px",
                              fontSize: isMobile ? "12px" : "14px",
                            }}
                            className="px-3 py-2 rounded-full border border-gray-300 bg-white"
                          >
                            {val}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="category">
                      <span
                        className="title text-sm"
                        style={{
                          display: "block",
                          marginBottom: "10px",
                          fontWeight: "bold",
                          fontSize: isMobile ? "14px" : "16px",
                        }}
                      >
                        Specifications:
                      </span>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        {item?.specification?.map((val) => (
                          <span
                            key={val}
                            style={{
                              borderRadius: "20px",
                              fontSize: isMobile ? "12px" : "14px",
                            }}
                            className="px-3 py-2 rounded-full border border-gray-300 bg-white"
                          >
                            {val}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description-wrapper mb-45">
            <div className="row">
              <div className="col-lg-12">
                <div className="description-tabs">
                  <Nav as="ul" className="nav nav-tabs">
                    <Nav.Item as="li">
                      <Nav.Link
                        as="a"
                        href="#description"
                        eventKey="description"
                        active={activeTab === "description"}
                        onClick={() => setActiveTab("description")}
                      >
                        Description
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        as="a"
                        href="#reviews"
                        eventKey="reviews"
                        active={activeTab === "reviews"}
                        onClick={() => setActiveTab("reviews")}
                      >
                        Reviews
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="tab-content mt-30">
                  {activeTab === "description" && (
                    <div className="description-content-box">
                      {item.discription.map((paragraph, index) => (
                        <p key={index} style={{ marginBottom: "20px" }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                  {activeTab === "reviews" && (
                    <div className="products-review-wrapper mb-25">
                      <div className="products-review-area mb-45">
                        <h4 className="title">People Reviews</h4>
                        <ul className="review-list">
                          <li className="review">
                            <div className="review-thumb">
                              <img
                                src="/assets/images/products/review-thumb-1.jpg"
                                alt="review thumb"
                              />
                            </div>
                            <div className="review-content">
                              <h4>John F. Medina</h4>
                              <span className="date">25 May 2021</span>
                              <ul className="ratings ratings-four">
                                <li className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                                <li className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                                <li className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                                <li className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                                <li className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                              </ul>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                              </p>
                              <a href="#" className="reply">
                                Reply
                              </a>
                            </div>
                          </li>
                          <li className="review">
                            <div className="review-thumb">
                              <img
                                src="/assets/images/products/review-thumb-2.jpg"
                                alt="review thumb"
                              />
                            </div>
                            <div className="review-content">
                              <h4>John F. Medina</h4>
                              <span className="date">25 May 2025</span>
                              <ul className="ratings ratings-five">
                                <li className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                                <li className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                                <li className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                                <li className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                                <li className="star">
                                  <i className="flaticon-star-1" />
                                </li>
                              </ul>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                              </p>
                              <a href="#" className="reply">
                                Reply
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="products-review-form">
                        <h4 className="title">Leave Your Reviews</h4>
                        <form onSubmit={(e) => e.preventDefault()}>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form_group">
                                <ul className="ratings mb-20">
                                  <li>
                                    <span>Your Rating</span>
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form_group">
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Full Name"
                                  name="name"
                                  required=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form_group">
                                <input
                                  type="email"
                                  className="form_control"
                                  placeholder="Email Address"
                                  name="email"
                                  required=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form_group">
                                <textarea
                                  className="form_control"
                                  placeholder="Write Message"
                                  name="comment"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form_group">
                                <button className="main-btn">Submit</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="releted-product-area">
            <h3
              className="releted-title"
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              Related Product
            </h3>
            <Slider
              {...reletedProductSlider}
              className="releted-products-slider-one"
            >
              {products.map((item) => (
                <div className="listing-item listing-grid-item-two">
                  <div
                    className="listing-thumbnail"
                    style={{
                      backgroundColor: `${item.backgroundColor}`,
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      height: "400px",
                    }}
                  >
                    <Link href={`/product-details/${item.slug}`}>
                      <img
                        src={item.image} // <-- Update TV image here
                        alt="TV Product Image"
                      />
                    </Link>
                    <span
                      className="featured-btn"
                      style={{
                        borderRadius: "5px",
                        fontSize: "10px",
                        padding: "3px 10px",
                      }}
                    >
                      Featured
                    </span>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <Link href={`/product-details/${item.slug}`}>
                        {item.name}
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
                      {item.detail}
                    </p>{" "}
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
                            href={`/product-details/${item.slug}`}
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
                                style={{ fontSize: "18px", color: "#B62025" }}
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
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsClient;
