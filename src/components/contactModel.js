"use client";
import { useState, useEffect } from "react";

export default function ContactModal({ onClose }) {
  const [isMobile, setIsMobile] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const iOSCheck =
      /iPad|iPhone|iPod/.test(userAgent) ||
      (userAgent.includes("Macintosh") && navigator.maxTouchPoints > 1);

    setIsIOS(iOSCheck);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      // Only proceed if not iOS
      if (!isIOS) {
        e.preventDefault();
        setDeferredPrompt(e);
        console.log("✅ beforeinstallprompt event captured");
      }
    };

    // Check if beforeinstallprompt is supported
    if ("onbeforeinstallprompt" in window) {
      window.addEventListener("beforeinstallprompt", handler);
    }

    return () => {
      if ("onbeforeinstallprompt" in window) {
        window.removeEventListener("beforeinstallprompt", handler);
      }
    };
  }, [isIOS]); // Add isIOS as dependency

  const handleAddToHomeScreen = async () => {
    if (isIOS) {
      setShowIOSInstructions(true);
      return;
    }
    if (!deferredPrompt) {
      console.log("⚠️ Install prompt not available");
      return;
    }
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    console.log("👉 User response:", result.outcome);
    setDeferredPrompt(null);
    onClose();
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

  if (!isMobile) return null;

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

  const buttonStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    background: "#FFFFFF",
    borderRadius: "10px",
    padding: "0 12px",
    width: "100%",
    height: "48px", // Fixed height for all buttons
    cursor: "pointer",
    color: "#FFF",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    marginTop: "15px",
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
    color: "#000000",
    fontSize: "14px",
    zIndex: 1,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {showIOSInstructions && (
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
            // padding: "20px",
            width: "90%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <div className="ios-instructions">
            <p>For iOS:</p>
            <ol>
              <li>Tap the Share icon</li>
              <li>Select "Add to Home Screen"</li>
              <li>Confirm installation</li>
            </ol>
            <button onClick={() => { setShowIOSInstructions(false); onClose(); }}>Close</button>
          </div>
        </div>
      )}
      <div
        style={{
          width: "100%",
          //   maxWidth: "500px",
          padding: "24px",
          borderRadius: "12px",
          position: "relative",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            fontSize: "24px",
            background: "none",
            border: "none",
            color: "#6b7280",
            cursor: "pointer",
          }}
        >
          &times;
        </button>

        {/* Heading */}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#B62025",
            marginBottom: "12px",
          }}
        >
          Connect With Us
        </h2>

        {/* Message */}
        <p style={{ color: "#374151", fontSize: "16px" }}>
          Reach out to us for inquiries, pricing, or product support.
        </p>

        {/* MAIL */}
        <button
          onClick={() => {
            handleMail();
            onClose();
          }}
          style={buttonStyle}
        >
          <div style={iconWrapperStyle}>
            <img
              src="/assets/images/black-icons/email.svg"
              alt="Mail"
              style={{ height: "20px", width: "20px" }}
            />
          </div>
          <span style={labelStyle}>MAIL US</span>
        </button>

        {/* Save On Device */}
        <button
          onClick={handleAddToHomeScreen}
          style={buttonStyle}
        >
          <div style={iconWrapperStyle}>
            <i
              className="ti-bookmark"
              style={{ color: "#000", fontSize: "18px" }}
            ></i>
          </div>
          <span style={labelStyle}>SAVE ON DEVICE</span>
        </button>

        {/* DOWNLOAD BROCHURE */}
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/assets/images/Ostro-Company-Profile.pdf";
            link.download = "Ostro-Company-Catalogue.pdf";
            link.click();
            onClose();
          }}
          style={buttonStyle}
        >
          <div style={iconWrapperStyle}>
            <i
              className="ti-download"
              style={{ color: "#000", fontSize: "18px" }}
            />
          </div>
          <span style={labelStyle}>BROCHURE</span>
        </button>

        <div
          style={{
            display: "flex",
            gap: "15px",
            paddingTop: "10px",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <button
            className="social-rounded-btn"
            onClick={() => {
              handleFacebook();
              onClose();
            }}
          >
            <img
              src="/assets/images/social-media-icons/Facebook.svg"
              alt="Facebook"
            />
          </button>
          <button
            className="social-rounded-btn"
            onClick={() => {
              handleInstagram();
              onClose();
            }}
          >
            <img
              src="/assets/images/social-media-icons/Instagram.svg"
              alt="Instagram"
            />
          </button>
          <button
            className="social-rounded-btn"
            onClick={() => {
              handleLinkedIn();
              onClose();
            }}
          >
            <img
              src="/assets/images/social-media-icons/Linkedin.svg"
              alt="LinkedIn"
            />
          </button>
          <button
            className="social-rounded-btn"
            onClick={() => {
              handleShare();
              onClose();
            }}
          >
            <img
              src="/assets/images/social-media-icons/Share.svg"
              alt="Share"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
