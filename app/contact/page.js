"use client";
import PageBanner from "@/components/PageBanner";
import UserInfoPopup from "@/components/userDetailPopup";
import Layout from "@/layouts/Layout";
import { useEffect, useState } from "react";

const Contact = () => {
  const [showBar, setShowBar] = useState(false);
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
    window.location.href = "tel:+919726594265"; // Replace with your number
  };

  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/K2WbFgvgbXR13jTj7", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919726594265", "_blank"); // Replace with your number
  };

  const handleMail = () => {
    window.location.href = "mailto:somixafoodsllp@gmail.com"; // Replace with your email
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/decorafurnitureofficial/?_rdr", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/decorafurniture_official/", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/in/yourprofile", "_blank");
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const userInfo =
        typeof window !== "undefined" && sessionStorage.getItem("userInfo");

      if (isMobile) {
        const form = e.target;
        const firstName = form.elements["name"][0].value;
        const lastName = form.elements["name"][1].value;
        const phone = form.elements["phone"].value;
        const email = form.elements["email"].value;
        const subject = form.elements["subject"].value;
        const message = form.elements["message"].value;

        // Construct the mailto link
        const body = `First Name: ${firstName}%0D%0ALast Name: ${lastName}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        const mailtoLink = `mailto:decorafurniture@gmail.com?subject=${encodeURIComponent(
          subject
        )}&body=${body}`;

        // Open default email client
        window.location.href = mailtoLink;
      } else {
        if (!userInfo) {
          setIsPopupOpen(true);
          return;
        }
      }

      const form = e.target;
      const firstName = form.elements["name"][0].value;
      const lastName = form.elements["name"][1].value;
      const phone = form.elements["phone"].value;
      const email = form.elements["email"].value;
      const subject = form.elements["subject"].value;
      const message = form.elements["message"].value;

      // Construct the mailto link
      const body = `First Name: ${firstName}%0D%0ALast Name: ${lastName}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      const mailtoLink = `mailto:decorafurniture@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;

      // Open default email client
      window.location.href = mailtoLink;
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
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

      <PageBanner title={"Contact us"} />

      {/*====== Start Contact Section ======*/}
      <section className="contact-section pt-115 pb-100">
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
                      src="/assets/images/black-icons/phone_black.png"
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
                      src="/assets/images/black-icons/location_black.png"
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
                      src="/assets/images/black-icons/whatsapp_black.png"
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
                      src="/assets/images/black-icons/gmail_black.png"
                      alt="Call"
                      style={{ height: "20px", width: "20px" }}
                    />
                  </div>
                  Mail Us
                </button>
              </div>

              {/* Right Section: Rounded Social Buttons */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  className="social-rounded-btn"
                  onClick={handleFacebook}
                  style={{ padding: "8px", backgroundColor: "#3A559F" }}
                >
                  <img src="/assets/images/icons/facebook.png" alt="Facebook" />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleInstagram}
                  style={{ padding: "8px", backgroundColor: "#D03B98" }}
                >
                  <img
                    src="/assets/images/icons/instagram.png"
                    alt="Instagram"
                  />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleLinkedIn}
                  style={{ padding: "8px", backgroundColor: "#0B63BD" }}
                >
                  <img src="/assets/images/icons/linkedin.png" alt="LinkedIn" />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleShare}
                  style={{ padding: "8px", backgroundColor: "#00ADFF" }}
                >
                  <img src="/assets/images/icons/share.png" alt="Share" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="section-title section-title-left mb-50">
                <span className="sub-title">Contact Us</span>
                <h2>How Can We Help You</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-information-list">
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-location-pin" />
                  </div>
                  <div className="info">
                    <h5>Address</h5>
                    <p>
                    Maruti Ind. Area, Shed No1, 30 Ft. Road, Near Pgvcl Office,
                    Vavdi, Rajkot, Gujarat - 360004
                    </p>
                  </div>
                </div>
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-mobile" />
                  </div>
                  <div className="info">
                    <h5>Phone</h5>
                    <p>
                      <a href="tel:+91 9726594265">+91 9726594265</a>
                    </p>
                  </div>
                </div>
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-email" />
                  </div>
                  <div className="info">
                    <h5>Email</h5>
                    <p>
                      <a href="mailto:somixafoodsllp@gmail.com">somixafoodsllp@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-wrapper-one mb-30 wow fadeInRight">
                <div className="contact-form">
                  <form onSubmit={handleFormSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="First Name"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Last Name"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Phone"
                            name="phone"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Subject"
                            name="subject"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Your Message"
                            name="message"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button
                            type="submit"
                            className="main-btn"
                            disabled={isSubmitting}
                            style={{ opacity: isSubmitting ? 0.7 : 1 }}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Map section ======*/}
      <div className="contact-page-map">
        <div className="map-box">
          <iframe src="https://maps.google.com/maps?q=Maruti+Industrial+Area,+Vavdi,+Rajkot,+Gujarat+360004&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
      </div>
      {/*====== End Map section ======*/}
    </Layout>
  );
};
export default Contact;
