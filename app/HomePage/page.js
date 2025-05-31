"use client";
import ListingDetailsRight from "@/components/ListingDetailsRight";
import VideoPopup from "@/components/VideoPopup";
import Layout from "@/layouts/Layout";
import { GallerySlider2, reletedListingSlider2 } from "@/sliderProps";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from "../../styles/style.css";
import { products } from "@/products";
import BottomTab from "@/components/BottomBar";
import UserInfoPopup from "@/components/userDetailPopup";

const heroImages = [
  "/assets/images/Hero-Banner/ostro_hero_banner-1.jpg",
  "/assets/images/Hero-Banner/ostro_hero_banner-2.jpg",
  "/assets/images/Hero-Banner/ostro_hero_banner-3.jpg",
];

const populerSearches = [
  "Best tile adhesive",
  "Ostro adhesive reviews",
  "Strongest tile glue",
  "Waterproof tile adhesive",
  "Wall vs floor adhesive",
  "Ostro ceramic adhesive",
  "Apply tile adhesive",
  "Top adhesive brands",
  "Heatproof tile glue",
  "Fast-dry adhesive",
  "Ostro vs competitors",
  "Outdoor tile adhesive",
  "Adhesive for marble/granite",
  "Crackproof tile glue",
  "Ostro adhesive price",
  "Tile adhesive guide",
  "Long-lasting adhesive",
  "Cement vs ready-mix adhesive",
  "Eco-friendly tile glue",
  "Vertical tile bonding",
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500, // 3.5 seconds
  fade: false,
  responsive: [
    {
      breakpoint: 768, // mobile and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const storyItems = [
  { id: 1, type: "video", src: "/assets/images/Story/story3.mp4" },
  { id: 2, type: "image", src: "/assets/images/Story/story1.jpg" },
  { id: 3, type: "video", src: "/assets/images/Story/story4.mp4" },
  { id: 4, type: "image", src: "/assets/images/Story/story2.jpg" },
  { id: 5, type: "video", src: "/assets/images/Story/story3.mp4" },
  { id: 6, type: "image", src: "/assets/images/Story/story2.jpg" },
];

export function SocialStoriesSection() {
  return (
    <div>
      <h4
        className="title"
        style={{ marginBottom: "20px", marginLeft: "10px" }}
      >
        Reels
      </h4>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          padding: "10px",
          scrollbarWidth: "none",
          width: "100%",
          height: "300px", // Adjust as needed
        }}
      >
        {storyItems.map((item) => (
          <div
            key={item.id}
            style={{
              flex: "0 0 auto",
              width: "175px",
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#f0f0f0",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Story ${item.id}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <video
                src={item.src}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                controls
                autoPlay
                loop
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What makes Ostro Tile Adhesive different from other brands?",
    answer:
      "Ostro Tile Adhesive is engineered for superior bonding strength, long-lasting durability, and excellent workability—perfect for all types of tile installations.",
  },
  {
    question: "Where can Ostro Tile Adhesive be used?",
    answer:
      "Ostro is ideal for fixing ceramic, vitrified, porcelain, glass mosaic, natural stone, and large-format tiles on floors and walls—indoors and outdoors.",
  },
  {
    question:
      "Is Ostro adhesive suitable for wet areas like bathrooms and kitchens?",
    answer:
      "Yes, Ostro offers water-resistant adhesives specifically designed for wet and high-moisture areas such as bathrooms, kitchens, and swimming pools.",
  },
  {
    question: "How long does it take for Ostro Tile Adhesive to set?",
    answer:
      "Typically, it takes 24 hours for full curing, but initial setting begins within 4–6 hours depending on environmental conditions.",
  },
  {
    question: "Can Ostro adhesive be used on existing tiles?",
    answer:
      "Yes, with the right surface preparation and a suitable Ostro product, you can tile over existing tiles securely.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  return (
    <div className="mb-20 px-6 md:px-16 py-10">
      <h4
        className="title"
        style={{ marginBottom: "30px", marginTop: "30px", marginLeft: "10px" }}
      >
        Frequently Asked Questions
      </h4>
      <div className="space-y-6" style={{ marginLeft: "10px" }}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{ borderRadius: 20 }}
            className="border my-2 border-gray-300 rounded-lg bg-white transition duration-300"
          >
            <button
              className="w-full flex items-center justify-between text-left pl-4 py-3 md:p-6 text-lg md:text-xl font-bold bg-white rounded-2xl"
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <span className="flex-1">{faq.question}</span>
              <span className="text-3xl ml-4" style={{ color: "#B62025" }}>
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>

            {openIndex === idx && faq.answer && (
              <div className="px-4 md:px-6 py-2 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const HomeScreen = () => {
  const [showBar, setShowBar] = useState(false);
  const [requirementInput, setRequirementInput] = useState("");
  const [video, setVideo] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    setMounted(true);
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
    window.open("https://www.facebook.com/", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/", "_blank");
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

  const getPrice = (product) => {
    const userInfo = sessionStorage.getItem("userInfo");
    if (isMobile) {
      const phoneNumber = "919942500600";
      const imageUrl = `https://www.ostrocemex.com/${product?.image}`;

      // Create a message with product details and image URL
      const message = `*Product Inquiry*

  ${imageUrl}
  
  *Product Details:*
  • Name: ${product?.name}
  • Description: ${product?.detail}

  *Usability:*
  ${product?.usability?.map((use) => `• ${use}`).join("\n")}
  
  *Specifications:*
  ${product?.specification?.map((spec) => `• ${spec}`).join("\n")}
  
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
        setIsPopupOpen(true); // Open the popup if session data is not available
      } else {
        const phoneNumber = "919942500600";
        const imageUrl = `https://www.ostrocemex.com/${product?.image}`;

        // Create a message with product details and image URL
        const message = `*Product Inquiry*

  ${imageUrl}
  
  *Product Details:*
  • Name: ${product?.name}
  • Description: ${product?.detail}

  *Usability:*
  ${product?.usability?.map((use) => `• ${use}`).join("\n")}
  
  *Specifications:*
  ${product?.specification?.map((spec) => `• ${spec}`).join("\n")}
  
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

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  const closeTab = () => {
    setVisible(false);
  };

  const buttonStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    background: "#4D4E4E",
    border: "2px solid #4D4E4E",
    borderRadius: "10px",
    padding: "0 12px",
    width: "70%",
    height: "48px", // Fixed height for all buttons
    cursor: "pointer",
    color: "#FFF",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  };

  const iconWrapperStyle = {
    height: "32px",
    width: "32px",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
    borderRadius: "50%",
    zIndex: 2,
  };

  const labelStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#FFF",
    fontSize: "14px",
    zIndex: 1,
  };

  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}

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

      {/*====== Start Hero Banner Carousel ======*/}
      <div className="hero-banner-carousel">
        <Slider {...carouselSettings}>
          {heroImages.map((img, idx) => (
            <div key={idx} className="hero-slide">
              <img
                src={img}
                alt={`Hero Banner ${idx + 1}`}
                className="hero-banner-img"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/*====== End Hero Banner Carousel ======*/}

      {/*====== Contact Info Buttons Starts here ======*/}
      <div
        className="d-md-none"
        style={{
          marginBottom: "-30px",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            padding: "10px 0",
            backgroundColor: "transparent",
            overflow: "hidden",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* CALL */}
          <button onClick={handleCall} style={buttonStyle}>
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/Call Us.svg"
                alt="Call"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>CALL US</span>
          </button>

          {/* WHATSAPP */}
          <button
            onClick={() => {
              const userInfo = sessionStorage.getItem("userInfo");
              if (isMobile) {
                handleWhatsApp();
              } else {
                !userInfo ? setIsPopupOpen(true) : handleWhatsApp();
              }
            }}
            style={buttonStyle}
          >
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/whatsapp.svg"
                alt="WhatsApp"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>WHATSAPP</span>
          </button>

          {/* LOCATION */}
          <button onClick={handleLocation} style={buttonStyle}>
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/Location.svg"
                alt="Location"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>LOCATION</span>
          </button>

          {/* MAIL */}
          <button onClick={handleMail} style={buttonStyle}>
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/email.svg"
                alt="Mail"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>MAIL US</span>
          </button>

          {/* DOWNLOAD BROCHURE */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/assets/images/Plixon-Catalogue-Digital.pdf";
              link.download = "Plixon-Catalogue-Digital.pdf";
              link.click();
            }}
            style={buttonStyle}
          >
            <div style={iconWrapperStyle}>
              <i
                className="ti-download"
                style={{ color: "#000", fontSize: "18px" }}
              />
            </div>
            <span style={labelStyle}>DOWNLOAD BROCHURE</span>
          </button>
        </div>

        {/* Social Media Buttons - More minimal */}
        <div style={{ display: "flex", gap: "15px", paddingTop: "10px" }}>
          <button className="social-rounded-btn" onClick={handleFacebook}>
            <img
              src="/assets/images/social-media-icons/Facebook.svg"
              alt="Facebook"
            />
          </button>
          <button className="social-rounded-btn" onClick={handleInstagram}>
            <img
              src="/assets/images/social-media-icons/Instagram.svg"
              alt="Instagram"
            />
          </button>
          <button className="social-rounded-btn" onClick={handleLinkedIn}>
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

        {/* Google Review Button - Simplified */}
        <div
          className="col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
            marginBottom: "-20px",
          }}
        >
          <button
            onClick={() =>
              // window.open("https://g.page/r/CTjtIU0PHHR6EBM/review", "_blank")
              window.open("https://maps.app.goo.gl/EZFSQGfVzj9pBQ5e9", "_blank")
            }
            style={{
              padding: "8px 95px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "#333",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/assets/images/icons/google.png"
              alt="Google Reviews"
              style={{
                height: "30px",
                width: "30px",
                marginRight: "12px",
              }}
            />
            Rate Us
          </button>
        </div>
      </div>
      {/*====== Contact Info Buttons Ends here ======*/}

      {/*====== Start Listing Details Section ======*/}
      <section className="listing-details-section pt-100 pb-90">
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
              <div style={{ display: "flex", gap: "10px", marginLeft: "20px" }}>
                <button className="social-rounded-btn" onClick={handleFacebook}>
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
                <button className="social-rounded-btn" onClick={handleLinkedIn}>
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
        <div>
          {/* Desktop View - Hidden on Mobile */}
          <div
            className="row"
            style={{
              marginBottom: "20px",
              marginTop: "-30px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap", // Ensures responsiveness
            }}
          >
            {/* Buttons Section */}
            <div className="row">
              {/* Desktop View */}
              <div
                className="d-none d-md-flex row"
                style={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "20px",
                  }}
                >
                  <button
                    onClick={() =>
                      // window.open(
                      //   "https://g.page/r/CTjtIU0PHHR6EBM/review",
                      //   "_blank"
                      // )
                      window.open(
                        "https://maps.app.goo.gl/EZFSQGfVzj9pBQ5e9",
                        "_blank"
                      )
                    }
                    style={{
                      padding: "9px 40px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "8px",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#333",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    }}
                  >
                    <img
                      src="/assets/images/icons/google.png"
                      alt="Google Reviews"
                      style={{
                        height: "30px",
                        width: "30px",
                        marginRight: "12px",
                      }}
                    />
                    Rate Us
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Bottom Tab - Hidden on Desktop */}
            <div
              className="d-md-none bg-white fixed-bottom shadow-lg"
              style={{
                padding: "10px 0", // Adjusted padding to avoid extra space
                paddingTop: "0px",
                borderTop: "1px solid #eee",
                zIndex: 1000,
                overflow: "hidden", // Prevents content overflow
              }}
            >
              <BottomTab visible={visible} closeTab={closeTab} />
              <div
                className="d-flex justify-content-evenly align-items-center"
                style={{
                  gap: "5px", // Ensures proper spacing between buttons
                  width: "100%",
                  padding: "0 10px", // Full width for buttons
                }}
              >
                {/* Call */}
                <button
                  onClick={handleCall}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#4D4E4E",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
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
                      style={{
                        height: "17px",
                        width: "17px",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>Call</span>
                </button>

                {/* WhatsApp */}
                <button
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
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#4D4E4E",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 7,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/whatsapp.svg"
                      alt="WhatsApp"
                      style={{
                        height: "15px",
                        width: "15px",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>
                    WhatsApp
                  </span>
                </button>

                {/* Location */}
                <button
                  onClick={handleLocation}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#4D4E4E",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
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
                      alt="Location"
                      style={{
                        height: "18px",
                        width: "18px",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>
                    Location
                  </span>
                </button>

                {/* Share */}
                <button
                  onClick={handleShare}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#4D4E4E",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <i className="ti-bookmark" style={{ color: "#000" }}></i>
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="listing-details-wrapper listing-details-wrapper-two"
                style={{}}
              >
                <div className="listing-thumbnail mb-30 wow fadeInUp">
                  <img
                    src="/assets/images/Hero-Banner/home_about_us.jpg"
                    alt="listing image"
                  />
                </div>
                <div className="listing-content mb-30 wow fadeInUp">
                  <div className="listing-info-area mb-0 wow fadeInUp">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <div className="listing-info-content">
                          <h3 className="title">About Us</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="title">{`At OSTRO, we’re building the future—one tile at a time.`}</h3>
                  <p>
                    Founded with a vision to revolutionize the surface finishing
                    and bonding industry, OSTRO stands at the forefront of tile
                    chemical innovation. From tile adhesives and grouts to
                    waterproofing compounds and surface cleaners, we provide
                    high-performance solutions that bring unmatched durability,
                    resilience, and beauty to every surface.
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#B62025" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>🌿</span>
                        </div>
                        <div className="info">
                          <h6>New Bonding Formula</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-volume"
                            style={{ color: "#B62025" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>🌿</span>
                        </div>
                        <div className="info">
                          <h6>Crystal Finish Compatibility</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#B62025" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>🌿</span>
                        </div>
                        <div className="info">
                          <h6>Strong on Every Surface</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#B62025" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>🌿</span>
                        </div>
                        <div className="info">
                          <h6>Dual Compatibility – Floor & Wall</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-volume"
                            style={{ color: "#B62025" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>🌿</span>
                        </div>
                        <div className="info">
                          <h6>Smart Application Technology</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#B62025" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>🌿</span>
                        </div>
                        <div className="info">
                          <h6>New Strength, Every Tile.</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    With a strong commitment to quality and reliability, OSTRO
                    is trusted by architects, contractors, retailers, and
                    homeowners across the country. Our products are engineered
                    to withstand the test of time, weather, and wear—so your
                    spaces stay stunning and structurally sound.
                    <a
                      href="/about"
                      style={{
                        color: "#B62025",
                        cursor: "pointer",
                        fontSize: "15px",
                        whiteSpace: "nowrap",
                        display: "inline",
                        marginLeft: "4px",
                      }}
                    >
                      Read More
                    </a>
                  </p>
                </div>

                <div className="releted-listing-area wow fadeInUp mb-10">
                  <h3 className="title mb-40">Related Products</h3>
                  <Slider
                    {...reletedListingSlider2}
                    className="releted-listing-slider-one"
                  >
                    {products.map((product, index) => (
                      <div className="listing-item listing-grid-item-two">
                        <div
                          className="listing-thumbnail"
                          style={{
                            backgroundColor: `${product.backgroundColor}`,
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            height: "400px",
                          }}
                        >
                          <Link href={`/product-details/${product.slug}`}>
                            <img src={product.image} alt="TV Product Image" />
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
                            <Link href={`/product-details/${product.slug}`}>
                              {product.name}
                            </Link>
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
                            {product.detail}
                          </p>
                          {/* <div className="features-list">
                            <ul>
                              <li>AI Upscaling</li>
                              <li>8K Ultra HD</li>
                            </ul>
                          </div> */}
                          <span className="phone-meta"></span>
                          <div
                            className="listing-meta"
                            style={{ width: "100%" }}
                          >
                            <ul style={{ width: "100%" }}>
                              <li style={{ width: "100%" }}>
                                <button
                                  onClick={() => {
                                    const userInfo =
                                      sessionStorage.getItem("userInfo");
                                    if (isMobile) {
                                      getPrice(product);
                                    } else {
                                      if (!userInfo) {
                                        setIsPopupOpen(true); // Open the popup if session data is not available
                                      } else {
                                        getPrice(product);
                                      }
                                    }
                                  }}
                                  className="flex items-center gap-2 px-3 py-1 mt-1 mb-3 border border-gray-300 rounded-lg transition"
                                  style={{
                                    backgroundColor: "#24D07A",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // paddingBottom: "20px",
                                    width: "100%",
                                  }}
                                >
                                  <img
                                    src="/assets/images/WhatsApp_Image.png"
                                    alt="WhatsApp Icon"
                                    style={{
                                      height: "15px",
                                      width: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    className="underline"
                                    style={{ color: "#FFFFFF" }}
                                  >
                                    Get Price
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                {/* <div className="listing-gallery-box mb-30 wow fadeInUp">
                  <h4 className="title" style={{ marginBottom: "40px" }}>
                    Features Gallery
                  </h4>
                  <Slider {...GallerySlider2} className="gallery-slider-one">
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 1.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 2.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 3.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 4.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 5.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 6.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 7.jpg"
                        alt="gallery image"
                      />
                    </div>
                  </Slider>
                </div>
                <SocialStoriesSection /> */}
                <FAQSection />
                <div
                  className="d-flex align-items-center justify-content-between p-3 rounded"
                  style={{
                    backgroundColor: "#E5F8F7",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    className="mb-2 mb-md-0 me-md-3"
                    style={{ minWidth: "250px", paddingLeft: "20px" }}
                  >
                    <span style={{ fontSize: "16px", marginBottom: "5px" }}>
                      Send your requirement
                    </span>
                    <br />
                    <strong
                      style={{
                        fontSize: "25px",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      WhatsApp now
                    </strong>
                  </div>

                  <div
                    className="input-group mb-2 mb-md-0"
                    style={{
                      maxWidth: "400px",
                      flexGrow: 1,
                      paddingRight: "20px",
                    }}
                  >
                    <span
                      className="input-group-text bg-white border-end-0"
                      style={{ marginRight: "5px" }}
                    >
                      <img
                        src="/assets/images/whatsapp-image-green.png"
                        alt="WhatsApp Icon"
                        style={{
                          height: "25px",
                          width: "25px",
                        }}
                      />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 rounded"
                      placeholder="Hi, I found your business..."
                      aria-label="WhatsApp Message"
                      style={{ marginRight: "5px" }}
                      onChange={(e) => {
                        setRequirementInput(e.target.value);
                      }}
                      value={requirementInput}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="button-send"
                      onClick={() => {
                        const userInfo = sessionStorage.getItem("userInfo");
                        if (isMobile) {
                          handleWhatsApp(); // Directly open WhatsApp on mobile
                        } else {
                          if (!userInfo) {
                            setIsPopupOpen(true); // Open the popup if session data is not available
                          } else {
                            const phoneNumber = "919942500600"; // Replace with your retailer's WhatsApp number
                            const message = `${requirementInput}`;
                            const encodedMessage = encodeURIComponent(message);
                            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                            window.open(whatsappURL, "_blank");
                          }
                        }
                      }}
                    >
                      Send
                    </button>
                    <div
                      className="ms-md-3 text-nowrap"
                      style={{ marginTop: "5px" }}
                    >
                      Or connect with seller instantly
                      <a
                        href="tel: 9942500600"
                        className="text-decoration-none ms-1"
                      >
                        <strong
                          style={{
                            color: "#007BFF",
                            textDecoration: "underline",
                            marginLeft: "5px",
                          }}
                        >
                          99425 00600
                        </strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="listing-tag-box mb-30 wow fadeInUp mt-15 mb-2">
                  <h4 className="title">Related Searches</h4>
                  {populerSearches.map((val) => {
                    return (
                      <span
                        key={val}
                        className="px-3 my-2 mr-3 py-2 rounded-full border border-gray-300 bg-white text-sm"
                      >
                        {val}
                      </span>
                    );
                  })}
                </div>

                <div className="listing-review-box mb-50 wow fadeInUp">
                  <h4 className="title">Customer Review</h4>
                  <ul className="review-list">
                    <li className="review">
                      <div
                        className="thumb border"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          borderRadius: "10px",
                          backgroundColor: "#F7F7F7",
                          fontSize: "40px",
                        }}
                      >
                        M
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2021</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-six">
                            <li>
                              <span className="av-rate">4</span>
                            </li>
                            {[1, 2, 3, 4].map((val, _ind) => (
                              <li className="px-1" key={_ind}>
                                <img
                                  src="/assets/images/contact-info/rating-star-fill.svg"
                                  alt="star-fill"
                                  style={{ height: "20px", width: "20px" }}
                                />
                              </li>
                            ))}
                            <img
                              src="/assets/images/contact-info/rating-star.svg"
                              alt="Call"
                              style={{
                                height: "20px",
                                width: "20px",
                                marginTop: "1px",
                                marginLeft: "2px",
                              }}
                            />
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="review">
                      <div
                        className="thumb border"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          borderRadius: "10px",
                          backgroundColor: "#F7F7F7",
                          fontSize: "40px",
                        }}
                      >
                        M
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2025</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-six">
                            <li>
                              <span className="av-rate">4</span>
                            </li>
                            {[1, 2, 3, 4].map((val, _ind) => (
                              <li className="px-1" key={_ind}>
                                <img
                                  src="/assets/images/contact-info/rating-star-fill.svg"
                                  alt="star-fill"
                                  style={{ height: "20px", width: "20px" }}
                                />
                              </li>
                            ))}
                            <img
                              src="/assets/images/contact-info/rating-star.svg"
                              alt="Call"
                              style={{
                                height: "20px",
                                width: "20px",
                                marginTop: "1px",
                                marginLeft: "2px",
                              }}
                            />
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="review">
                      <div
                        className="thumb border"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          borderRadius: "10px",
                          backgroundColor: "#F7F7F7",
                          fontSize: "40px",
                        }}
                      >
                        M
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2025</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-six">
                            <li>
                              <span className="av-rate">4</span>
                            </li>
                            {[1, 2, 3, 4].map((val, _ind) => (
                              <li className="px-1" key={_ind}>
                                <img
                                  src="/assets/images/contact-info/rating-star-fill.svg"
                                  alt="star-fill"
                                  style={{ height: "20px", width: "20px" }}
                                />
                              </li>
                            ))}
                            <img
                              src="/assets/images/contact-info/rating-star.svg"
                              alt="Call"
                              style={{
                                height: "20px",
                                width: "20px",
                                marginTop: "1px",
                                marginLeft: "2px",
                              }}
                            />
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    marginBottom: "50px",
                  }}
                >
                  <button
                    className="main-btn"
                    onClick={() =>
                      // window.open("https://g.page/r/CTjtIU0PHHR6EBM/review", "_blank")
                      window.open(
                        "https://maps.app.goo.gl/EZFSQGfVzj9pBQ5e9",
                        "_blank"
                      )
                    }
                  >
                    Give Us a Review
                  </button>
                </div>
                {/* <div className="listing-review-form mb-30 wow fadeInUp">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="title">Write a Review</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-rating">
                        <ul className="ratings">
                          <li>
                            <span>Rate Here:</span>
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
                        <span>(02 Reviews)</span>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Write Message"
                            name="message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Your name"
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
                            placeholder="Email here"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <div className="single-checkbox d-flex">
                            <input
                              type="checkbox"
                              id="check4"
                              name="checkbox"
                            />
                            <label htmlFor="check4">
                              <span>
                                Save my name, email, and website in this browser
                                for the next time i comment.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn">Submit Review</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>

            <ListingDetailsRight />
          </div>
        </div>
      </section>
      {/*====== End Listing Details Section ======*/}
    </Layout>
  );
};

export default HomeScreen;

<style jsx global>{`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 767.98px) {
    body {
      position: relative;
      overflow-x: hidden;
      padding-bottom: 70px; /* Reserve space for fixed bottom bar */
    }
  }
`}</style>;
