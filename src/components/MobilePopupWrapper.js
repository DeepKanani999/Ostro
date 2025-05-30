"use client";
import { useEffect, useState } from "react";

const MobilePopupWrapper = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const isInStandaloneMode = () =>
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("seenMobilePopup");

    // Check if the popup has already been shown
    if (hasSeenPopup) {
      return;
    }

    // Listen for the beforeinstallprompt event
    const beforeInstallPromptHandler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", beforeInstallPromptHandler);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        beforeInstallPromptHandler
      );
    };
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("seenMobilePopup");

    // Check if the popup has already been shown
    if (hasSeenPopup) {
      return;
    }

    // Check if the conditions are met to show the popup
    if (isMobile && !isInStandaloneMode() && deferredPrompt) {
      setIsPopupOpen(true);
      sessionStorage.setItem("seenMobilePopup", "true");
    }
  }, [deferredPrompt, isMobile]); // Dependency array includes deferredPrompt and isMobile

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      }
      setDeferredPrompt(null);
    }
    handleClosePopup();
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    sessionStorage.setItem("seenMobilePopup", "true"); // Set flag to prevent re-showing
  };

  return (
    <>
      {isPopupOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            padding: "20px",
          }}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
            style={{
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "10px 10px",
            }}
          >
            <h4 className="text-lg font-bold text-center mb-2">
              Install Our App
            </h4>
            <p className="text-sm text-gray-500 text-center mb-6 px-4">
              Install our app for a better experience! Get quick access to all
              features and stay updated.
            </p>

            <div
              className="flex gap-3 mt-6 justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px 10px",
                gap: "20px",
              }}
            >
              <button
                onClick={handleClosePopup}
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  textDecoration: "underline",
                }}
                className="flex-1 px-4 py-2 rounded hover:bg-opacity-90"
              >
                Maybe Later
              </button>
              <button
                onClick={handleInstall}
                style={{ backgroundColor: "#B62025" }}
                className="flex-1 text-white px-4 py-2 rounded hover:bg-opacity-90"
              >
                Install Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobilePopupWrapper;
