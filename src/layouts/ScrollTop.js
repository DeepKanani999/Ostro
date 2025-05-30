"use client";
import { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    const scrollUp = document.getElementById("scroll-top");
    if (!scrollUp) return;

    const handleScroll = () => {
      scrollUp.style.display = window.scrollY > 110 ? "flex" : "none";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <a
        href="#"
        className="back-to-top"
        id="scroll-top"
        onClick={onClick}
        style={{ display: "none" }}
      >
        <i className="ti-angle-up"></i>
      </a>

      <style jsx>{`
        .back-to-top {
          position: fixed;
          right: 30px;
          background: #B62025;
          color: white;
          border-radius: 50%;
          z-index: 999;
          bottom: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          outline: none;
          cursor: pointer;
        }

        .back-to-top i {
          font-size: 18px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        /* Mobile view */
        @media (max-width: 767px) {
          .back-to-top {
            bottom: 100px;
          }
        }

        /* Hover effects */
        .back-to-top:hover {
          background: #B62025;
          transform: translateY(-2px);
        }

        /* Active/pressed state */
        .back-to-top:active {
          transform: translateY(1px);
        }
      `}</style>
    </>
  );
};

export default ScrollTop;