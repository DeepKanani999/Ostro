import { useEffect, useState } from "react";
import UserInfoPopup from "./userDetailPopup";

const ListingDetailsRight = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/K2WbFgvgbXR13jTj7", "_blank");
  };

  const handleMail = () => {
    const subject = encodeURIComponent("Product Inquiry");
    const body = encodeURIComponent(
      "Hello, I am interested in your products. Please share more details."
    );
    window.location.href = `mailto:somixafoodsllp@gmail.com?subject=${subject}&body=${body}`;
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

  return (
    <div className="col-lg-4">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: isPopupOpen ? 1000 : 0,
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: isPopupOpen ? "0 4px 15px rgba(0, 0, 0, 0.2)" : "none",
          borderRadius: "15px",
          padding: "20px",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
          display: isPopupOpen ? "block" : "none",
        }}
      >
        <UserInfoPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
      </div>
      <div className="sidebar-widget-area">
        <div
          className="widget newsletter-widget mb-30 wow fadeInUp"
          style={{ marginTop: "0px" }}
        >
          <div
            className="newsletter-widget-wrap bg_cover"
            style={{
              backgroundImage: "url(/assets/images/newsletter-widget-1.jpg)",
            }}
          >
            <i className="ti-book" />
            <h3>Explore Our Buttermilk Masala Flavors</h3>
            <a
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/assets/images/HR_Consultancy.pptx";
                link.target = "_blank"; // Open in a new tab
                link.rel = "noopener noreferrer"; // Security best practice
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="main-btn"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#39B54A",
                color: "#FFF",
                textDecoration: "none",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              View Flavors List
            </a>
          </div>
        </div>

        <div className="widget reservation-form-widget mb-30 wow fadeInUp">
          <h5 className="widget-title">
            Check Out All Our Buttermilk Masala Range
          </h5>
          <span style={{ marginBottom: "10px", marginTop: "10px" }}>
            Explore authentic flavors and pricing tailored to your taste —
            absolutely free
          </span>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form_group">
              <input
                type="name"
                className="form_control"
                placeholder="Name"
                name="name"
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="number"
                className="form_control"
                placeholder="Mobile Number"
                name="numbber"
                required=""
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form_group">
              <button
                className="main-btn"
                onClick={() => {
                  const userInfo = sessionStorage.getItem("userInfo"); // Retrieve userInfo here
                  if (isMobile) {
                    const phoneNumber = "919726594265"; // Replace with your WhatsApp number (in international format without '+')
                    const message = `Hello, I'm ${name} and my contact number is ${number}. I'm interested in learning more about your Somixa Buttermilk Masala products and would appreciate a consultation on how your blends can add flavor and health benefits to our daily offerings.`;
                    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      message
                    )}`;
                    setName("");
                    setNumber("");
                    window.open(url, "_blank");
                  } else {
                    if (!userInfo) {
                      setIsPopupOpen(true); // Open the popup if session data is not available
                    } else {
                      const phoneNumber = "919726594265"; // Replace with your WhatsApp number (in international format without '+')
                      const message = `Hello, I'm ${name} and my contact number is ${number}. I'm interested in learning more about your Buttermilk Masala products and would appreciate a consultation on how your blends can add flavor and health benefits to our daily offerings.`;
                      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        message
                      )}`;
                      setName("");
                      setNumber("");
                      window.open(url, "_blank");
                    }
                  }
                }}
              >
                Flavor Guide
              </button>
            </div>
          </form>
        </div>
        <div className="widget contact-info-widget mb-30 wow fadeInUp">
          <div className="contact-info-widget-wrap">
            <div className="contact-map">
              <iframe src="https://maps.google.com/maps?q=Maruti+Industrial+Area,+Vavdi,+Rajkot,+Gujarat+360004&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              <a
                href="https://maps.app.goo.gl/K2WbFgvgbXR13jTj7"
                className="support-icon"
              >
                <i className="ti-location-pin" />
              </a>
            </div>
            <div className="contact-info-content">
              <div className="info-list my-2">
                <h5 className="widget-title my-2">Contact Info</h5>
                <p>
                  <i className="ti-mobile" />
                  <a href="tel:+919726594265">+91 9726594265</a>
                </p>
                <hr className="my-2 opacity-25" />
              </div>
              <div className="info-list my-3">
                <p>
                  <i className="ti-email" />
                  <a
                    style={{ fontSize: "16px" }}
                    href="mailto:somixafoodsllp@gmail.com"
                  >
                    somixafoodsllp@gmail.com
                  </a>
                </p>
                <hr className="my-2 opacity-25" />
              </div>
              <div className="info-list my-3">
                <h5 className="widget-title my-2">Address</h5>
                <p>
                  <a>
                    Maruti Ind. Area, Shed No1, 30 Ft. Road, Near Pgvcl Office,
                    Vavdi, Rajkot, Gujarat - 360004
                  </a>
                  <button
                    className="btn p-0 text-decoration-none d-flex align-items-center"
                    onClick={handleLocation}
                  >
                    <div className="flex items-center px-3 py-1 mt-2 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                      <i className="ti-location-pin me-2" />
                      <span className="underline">Get Direction</span>
                    </div>
                  </button>
                </p>
              </div>
              <hr className="mt-4 opacity-25" />
              <div className="my-3">
                <button
                  className="btn p-0 text-decoration-none d-flex align-items-center"
                  onClick={() => {
                    const userInfo = sessionStorage.getItem("userInfo"); // Retrieve userInfo here
                    if (isMobile) {
                      const whatsappNumber = "919726594265"; // WhatsApp number in international format (without '+')
                      const enquiryMessage = `Hello, I'm ${name} and my contact number is ${number}. I'm interested in learning more about your Somixa Buttermilk Masala products and would appreciate a consultation on how your blends can add flavor and health benefits to our daily offerings.`;

                      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        enquiryMessage
                      )}`;

                      // Clear form fields after sending
                      setName("");
                      setNumber("");

                      // Open WhatsApp chat in a new tab
                      window.open(whatsappURL, "_blank");
                    } else {
                      if (!userInfo) {
                        setIsPopupOpen(true); // Open the popup if session data is not available
                      } else {
                        const whatsappNumber = "919726594265"; // WhatsApp number in international format (without '+')
                        const enquiryMessage = `Hello, I'm ${name} and my contact number is ${number}. I'm interested in learning more about your Buttermilk Masala products and would appreciate a consultation on how your blends can add flavor and health benefits to our daily offerings.`;

                        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          enquiryMessage
                        )}`;

                        // Clear form fields after sending
                        setName("");
                        setNumber("");

                        // Open WhatsApp chat in a new tab
                        window.open(whatsappURL, "_blank");
                      }
                    }
                  }}
                >
                  <div className="flex items-center bg-transparent rounded-lg hover:bg-gray-100 transition">
                    <img
                      src="/assets/images/icons/whatsapp_black.png"
                      className="me-2 mx-2"
                      alt="WhatsApp"
                      style={{ width: "17px", height: "17px" }}
                    />
                    <span className="underline">Send Enquiry on WhatsApp</span>
                  </div>
                </button>
              </div>
              <hr className="mt-3 opacity-25" />
              <div className="my-3">
                <button
                  className="btn p-0 text-decoration-none d-flex align-items-center"
                  onClick={handleMail}
                >
                  <div className="flex items-center bg-transparent rounded-lg hover:bg-gray-100 transition">
                    <i className="ti-email me-2 mx-2" />
                    <span className="underline">Get information by Email</span>
                  </div>
                </button>
              </div>
              <hr className="mt-3 opacity-25" />
              <div className="my-3">
                <button
                  className="btn p-0 text-decoration-none d-flex align-items-center"
                  onClick={handleShare}
                >
                  <div className="flex items-center bg-transparent rounded-lg hover:bg-gray-100 transition">
                    <i className="ti-share me-2 mx-2" />
                    <span className="underline">Share</span>
                  </div>
                </button>
              </div>
              <hr className="mt-3 opacity-25" />
              <div className="my-3">
                <button
                  className="btn p-0 text-decoration-none d-flex align-items-center"
                  onClick={() => {
                    window.open(
                      "https://g.page/r/CTjtIU0PHHR6EBM/review",
                      "_blank"
                    );
                  }}
                >
                  <div className="flex items-center bg-transparent rounded-lg hover:bg-gray-100 transition">
                    <i className="ti-star me-2 mx-2" />
                    <span className="underline">Tap to rate</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="widget business-hour-widget mb-30 wow fadeInUp">
          <h4 className="widget-title">Business Hour</h4>
          <ul className="time-info">
            <li>
              <span className="day">Monday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Tuesday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Wednesday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Thursday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Friday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Saturday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Sunday</span>
              <span className="time st-close">Close</span>
            </li>
          </ul>
        </div>

        <div className="widget reservation-form-widget mb-30 wow fadeInUp">
          <h5 className="widget-title" style={{ marginBottom: "10px" }}>
            Key Buttermilk Masala Blends for Your Taste
          </h5>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            Authentic Buttermilk Masala Blends
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            Refreshing Pudina Masala Variants
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            Traditional Spice Mixes
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            Healthy Digestive Formulas
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            Natural Ingredients & Flavors
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            Tips & Recipes for Perfect Chaas
          </span>
        </div>
      </div>
    </div>
  );
};
export default ListingDetailsRight;
