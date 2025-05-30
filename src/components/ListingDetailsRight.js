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
    window.open("https://maps.app.goo.gl/EZFSQGfVzj9pBQ5e9", "_blank");
  };

  const handleMail = () => {
    const subject = encodeURIComponent("Product Inquiry");
    const body = encodeURIComponent(
      "Hello, I am interested in your products. Please share more details."
    );
    window.location.href = `mailto:ostrocemex@gmail.com?subject=${subject}&body=${body}`;
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
            <h3>Discover Our Premium Tile Adhesive Variants</h3>
            <a
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/assets/images/Ostro-Company Profile.pdf";
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
                backgroundColor: "#B62025",
                color: "#FFF",
                textDecoration: "none",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              View Catalogue
            </a>
          </div>
        </div>

        <div className="widget reservation-form-widget mb-30 wow fadeInUp">
          <h5 className="widget-title">
            Explore Our Complete Range of Ostro Tile Adhesives
          </h5>
          <span style={{ marginBottom: "10px", marginTop: "10px" }}>
            Discover premium tile bonding strength and pricing crafted for your
            needs — absolutely free.
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
                    const phoneNumber = "919942500600"; // Replace with your WhatsApp number (in international format without '+')
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
                      const phoneNumber = "919942500600"; // Replace with your WhatsApp number (in international format without '+')
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
                Adhesive Selector Guide
              </button>
            </div>
          </form>
        </div>
        <div className="widget contact-info-widget mb-30 wow fadeInUp">
          <div className="contact-info-widget-wrap">
            <div className="contact-map">
              <iframe src="https://maps.google.com/maps?q=Jaspur,+Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              <a
                href="https://maps.app.goo.gl/EZFSQGfVzj9pBQ5e9"
                className="support-icon"
              >
                {/* <i className="ti-location-pin" /> */}
                <img
                  src="/assets/images/contact-info/Location.svg"
                  className="me-2 mx-2"
                  alt="WhatsApp"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
            </div>
            <div className="contact-info-content">
              <div className="info-list my-2">
                <h5 className="widget-title my-2">Contact Info</h5>
                <p>
                  {/* <i className="ti-mobile" /> */}
                  <img
                    src="/assets/images/contact-info/Phone.svg"
                    className="me-2 mx-2"
                    alt="WhatsApp"
                    style={{ width: "17px", height: "17px" }}
                  />
                  <a href="tel:+919942500600">+91 9942500600</a>
                </p>
                <hr className="my-2 opacity-25" />
              </div>
              <div className="info-list my-3">
                <p>
                  {/* <i className="ti-email" /> */}
                  <img
                    src="/assets/images/contact-info/email.svg"
                    className="me-2 mx-2"
                    alt="WhatsApp"
                    style={{ width: "17px", height: "17px" }}
                  />
                  <a
                    style={{ fontSize: "16px" }}
                    href="mailto:ostrocemex@gmail.com"
                  >
                    ostrocemex@gmail.com
                  </a>
                </p>
                <hr className="my-2 opacity-25" />
              </div>
              <div className="info-list my-3">
                <h5 className="widget-title my-2">Address</h5>
                <p className="mx-2">
                  <a>
                    FP No - 274, TP No - 229, Nr. Shilpgram I, Gate No - 2,
                    Jaspur, Kalol, Gandhinagar, 382721. Gujarat
                  </a>
                  <button
                    className="btn p-0 text-decoration-none d-flex align-items-center"
                    onClick={handleLocation}
                  >
                    <div className="flex items-center px-3 py-1 mt-2 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                      {/* <i className="ti-location-pin me-2" /> */}
                      <img
                        src="/assets/images/contact-info/Get-Direction.svg"
                        className="me-2 mx-2"
                        alt="WhatsApp"
                        style={{ width: "17px", height: "17px" }}
                      />
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
                      const whatsappNumber = "919942500600"; // WhatsApp number in international format (without '+')
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
                        const whatsappNumber = "919942500600"; // WhatsApp number in international format (without '+')
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
                      src="/assets/images/contact-info/whatsapp.svg"
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
                    {/* <i className="ti-email me-2 mx-2" /> */}
                    <img
                      src="/assets/images/contact-info/email.svg"
                      className="me-2 mx-2"
                      alt="WhatsApp"
                      style={{ width: "17px", height: "17px" }}
                    />
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
                    {/* <i className="ti-share me-2 mx-2" /> */}
                    <img
                      src="/assets/images/contact-info/share.svg"
                      className="me-2 mx-2"
                      alt="WhatsApp"
                      style={{ width: "17px", height: "17px" }}
                    />
                    <span className="underline">Share</span>
                  </div>
                </button>
              </div>
              <hr className="mt-3 opacity-25" />
              <div className="my-3">
                <button
                  className="btn p-0 text-decoration-none d-flex align-items-center"
                  onClick={() => {
                    // window.open(
                    //   "https://g.page/r/CTjtIU0PHHR6EBM/review",
                    //   "_blank"
                    // );
                    window.open(
                      "https://maps.app.goo.gl/EZFSQGfVzj9pBQ5e9",
                      "_blank"
                    )
                  }}
                >
                  <div className="flex items-center bg-transparent rounded-lg hover:bg-gray-100 transition">
                    {/* <i className="ti-star me-2 mx-2" /> */}
                    <img
                      src="/assets/images/contact-info/star.svg"
                      className="me-2 mx-2"
                      alt="WhatsApp"
                      style={{ width: "17px", height: "17px" }}
                    />
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
            Get the List of Features we provide
          </h5>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            TileGrip Pro
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            Adhezo
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            Fixora
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            TileLock
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            GripStone
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            StrongHold
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            TileFixx
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            StickTuff
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            Adhero
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            MegaBond
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            GripXpert
          </span>
        </div>
      </div>
    </div>
  );
};
export default ListingDetailsRight;
