"use client";

import Layout from "@/layouts/Layout";
import { useEffect, useState } from "react";
import PageBanner from "@/components/PageBanner";
import UserInfoPopup from "@/components/userDetailPopup";

const PrivacyPolicy = () => {
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
    window.location.href = "mailto:info@plixon.in"; // Replace with your email
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
      <PageBanner title={"Privacy Policy"} />
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
          </div>
        </div>
      </div>
      <div
        className="privacy-container"
        style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          className="privacy-header"
          style={{ marginBottom: "40px", textAlign: "center" }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "#666" }}>Last updated: May 30, 2025</p>
        </div>

        <div className="privacy-content" style={{ lineHeight: "1.6" }}>
          <section style={{ marginBottom: "30px" }}>
            <p>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy has been created with the help of the{" "}
              <a
                href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
                style={{ color: "#007bff" }}
              >
                Free Privacy Policy Generator
              </a>
              .
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Interpretation and Definitions
            </h2>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
              Interpretation
            </h3>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>

            <h3
              style={{
                fontSize: "1.4rem",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Definitions
            </h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>
                <strong>Account</strong> means a unique account created for You
                to access our Service or parts of our Service.
              </li>
              <li>
                <strong>Affiliate</strong> means an entity that controls, is
                controlled by or is under common control with a party, where
                "control" means ownership of 50% or more of the shares, equity
                interest or other securities entitled to vote for election of
                directors or other managing authority.
              </li>
              <li>
                <strong>Company</strong> (referred to as either "the Company",
                "We", "Us" or "Our" in this Agreement) refers to Ostro, FP No -
                274, TP No - 229, Nr. Shilpgram I, Gate No - 2, Jaspur, Kalol,
                Gandhinagar, 382721. Gujarat.
              </li>
              <li>
                <strong>Cookies</strong> are small files that are placed on Your
                computer, mobile device or any other device by a website,
                containing the details of Your browsing history on that website
                among its many uses.
              </li>
              <li>
                <strong>Country</strong> refers to: Gujarat, India
              </li>
              <li>
                <strong>Device</strong> means any device that can access the
                Service such as a computer, a cellphone or a digital tablet.
              </li>
              <li>
                <strong>Personal Data</strong> is any information that relates
                to an identified or identifiable individual.
              </li>
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>Service Provider</strong> means any natural or legal
                person who processes the data on behalf of the Company. It
                refers to third-party companies or individuals employed by the
                Company to facilitate the Service, to provide the Service on
                behalf of the Company, to perform services related to the
                Service or to assist the Company in analyzing how the Service is
                used.
              </li>
              <li>
                <strong>Usage Data</strong> refers to data collected
                automatically, either generated by the use of the Service or
                from the Service infrastructure itself (for example, the
                duration of a page visit).
              </li>
              <li>
                <strong>Website</strong> refers to Ostro, accessible from{" "}
                <a href="www.ostrocemex.com" style={{ color: "#007bff" }}>
                  www.ostrocemex.com
                </a>
              </li>
              <li>
                <strong>You</strong> means the individual accessing or using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Collecting and Using Your Personal Data
            </h2>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
              Types of Data Collected
            </h3>

            <h4 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
              Personal Data
            </h4>
            <p>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Usage Data</li>
            </ul>

            <h4
              style={{
                fontSize: "1.2rem",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Usage Data
            </h4>
            <p>Usage Data is collected automatically when using the Service.</p>
            <p>
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </p>
            <p>
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </p>
            <p>
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </p>

            <h4
              style={{
                fontSize: "1.2rem",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Tracking Technologies and Cookies
            </h4>
            <p>
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service. The
              technologies We use may include:
            </p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>
                <strong>Cookies or Browser Cookies.</strong> A cookie is a small
                file placed on Your Device. You can instruct Your browser to
                refuse all Cookies or to indicate when a Cookie is being sent.
                However, if You do not accept Cookies, You may not be able to
                use some parts of our Service. Unless you have adjusted Your
                browser setting so that it will refuse Cookies, our Service may
                use Cookies.
              </li>
              <li>
                <strong>Web Beacons.</strong> Certain sections of our Service
                and our emails may contain small electronic files known as web
                beacons (also referred to as clear gifs, pixel tags, and
                single-pixel gifs) that permit the Company, for example, to
                count users who have visited those pages or opened an email and
                for other related website statistics (for example, recording the
                popularity of a certain section and verifying system and server
                integrity).
              </li>
            </ul>
            <p>
              Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on Your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              Your web browser. Learn more about cookies on the{" "}
              <a
                href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking"
                style={{ color: "#007bff" }}
              >
                Free Privacy Policy website
              </a>{" "}
              article.
            </p>
            <p>
              We use both Session and Persistent Cookies for the purposes set
              out below:
            </p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>
                <strong>Necessary / Essential Cookies</strong>
                <br />
                Type: Session Cookies
                <br />
                Administered by: Us
                <br />
                Purpose: These Cookies are essential to provide You with
                services available through the Website and to enable You to use
                some of its features. They help to authenticate users and
                prevent fraudulent use of user accounts. Without these Cookies,
                the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
              </li>
              <li>
                <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                <br />
                Type: Persistent Cookies
                <br />
                Administered by: Us
                <br />
                Purpose: These Cookies identify if users have accepted the use
                of cookies on the Website.
              </li>
              <li>
                <strong>Functionality Cookies</strong>
                <br />
                Type: Persistent Cookies
                <br />
                Administered by: Us
                <br />
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
              </li>
            </ul>
            <p>
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy or the Cookies
              section of our Privacy Policy.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Use of Your Personal Data
            </h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>
                To provide and maintain our Service, including to monitor the
                usage of our Service.
              </li>
              <li>
                To manage Your Account: to manage Your registration as a user of
                the Service. The Personal Data You provide can give You access
                to different functionalities of the Service that are available
                to You as a registered user.
              </li>
              <li>
                For the performance of a contract: the development, compliance
                and undertaking of the purchase contract for the products, items
                or services You have purchased or of any other contract with Us
                through the Service.
              </li>
              <li>
                To contact You: To contact You by email, telephone calls, SMS,
                or other equivalent forms of electronic communication, such as a
                mobile application's push notifications regarding updates or
                informative communications related to the functionalities,
                products or contracted services, including the security updates,
                when necessary or reasonable for their implementation.
              </li>
              <li>
                To provide You with news, special offers and general information
                about other goods, services and events which we offer that are
                similar to those that you have already purchased or enquired
                about unless You have opted not to receive such information.
              </li>
              <li>
                To manage Your requests: To attend and manage Your requests to
                Us.
              </li>
              <li>
                For business transfers: We may use Your information to evaluate
                or conduct a merger, divestiture, restructuring, reorganization,
                dissolution, or other sale or transfer of some or all of Our
                assets, whether as a going concern or as part of bankruptcy,
                liquidation, or similar proceeding, in which Personal Data held
                by Us about our Service users is among the assets transferred.
              </li>
              <li>
                For other purposes: We may use Your information for other
                purposes, such as data analysis, identifying usage trends,
                determining the effectiveness of our promotional campaigns and
                to evaluate and improve our Service, products, services,
                marketing and your experience.
              </li>
            </ul>

            <p>
              We may share Your personal information in the following
              situations:
            </p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>
                With Service Providers: We may share Your personal information
                with Service Providers to monitor and analyze the use of our
                Service, to contact You.
              </li>
              <li>
                For business transfers: We may share or transfer Your personal
                information in connection with, or during negotiations of, any
                merger, sale of Company assets, financing, or acquisition of all
                or a portion of Our business to another company.
              </li>
              <li>
                With Affiliates: We may share Your information with Our
                affiliates, in which case we will require those affiliates to
                honor this Privacy Policy. Affiliates include Our parent company
                and any other subsidiaries, joint venture partners or other
                companies that We control or that are under common control with
                Us.
              </li>
              <li>
                With business partners: We may share Your information with Our
                business partners to offer You certain products, services or
                promotions.
              </li>
              <li>
                With other users: when You share personal information or
                otherwise interact in the public areas with other users, such
                information may be viewed by all users and may be publicly
                distributed outside.
              </li>
              <li>
                With Your consent: We may disclose Your personal information for
                any other purpose with Your consent.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Retention of Your Personal Data
            </h2>
            <p>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>
            <p>
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Transfer of Your Personal Data
            </h2>
            <p>
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </p>
            <p>
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </p>
            <p>
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Delete Your Personal Data
            </h2>
            <p>
              You have the right to delete or request that We assist in deleting
              the Personal Data that We have collected about You.
            </p>
            <p>
              Our Service may give You the ability to delete certain information
              about You from within the Service.
            </p>
            <p>
              You may update, amend, or delete Your information at any time by
              signing in to Your Account, if you have one, and visiting the
              account settings section that allows you to manage Your personal
              information. You may also contact Us to request access to,
              correct, or delete any personal information that You have provided
              to Us.
            </p>
            <p>
              Please note, however, that We may need to retain certain
              information when we have a legal obligation or lawful basis to do
              so.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Disclosure of Your Personal Data
            </h2>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
              Business Transactions
            </h3>
            <p>
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </p>

            <h3
              style={{
                fontSize: "1.4rem",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Law enforcement
            </h3>
            <p>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>

            <h3
              style={{
                fontSize: "1.4rem",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Other legal requirements
            </h3>
            <p>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li>Protect against legal liability</li>
            </ul>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Security of Your Personal Data
            </h2>
            <p>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Children's Privacy
            </h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </p>
            <p>
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent's consent before We collect and use that
              information.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Links to Other Websites
            </h2>
            <p>
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>
                By email:{" "}
                <a
                  href="mailto:ostrocemex@gmail.com"
                  style={{ color: "#007bff" }}
                >
                  ostrocemex@gmail.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
