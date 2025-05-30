import { useState } from "react";

export default function UserInfoPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      // Save to session storage
      sessionStorage.setItem("userInfo", JSON.stringify(formData));

      // Small delay to ensure storage is updated
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Close popup
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        background: "transparent",
        width: "100%",
        maxWidth: "500px",
        padding: "24px",
        borderRadius: "12px",
        position: "relative",
      }}
    >
      {/* Header */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#B62025",
          marginBottom: "8px",
        }}
      >
        Get More Details
      </h2>
      <p style={{ color: "#374151", marginBottom: "20px" }}>
        Enter your name and WhatsApp number to get product updates and offers.
      </p>

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

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "16px",
              opacity: isSubmitting ? 0.7 : 1,
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="tel"
            name="phone"
            placeholder="Enter WhatsApp number"
            required
            maxLength={13}
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "16px",
              opacity: isSubmitting ? 0.7 : 1,
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            backgroundColor: "#B62025",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "600",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            border: "none",
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          style={{
            marginTop: "12px",
            width: "100%",
            background: "none",
            border: "none",
            color: "gray",
            fontSize: "14px",
            textDecoration: "underline",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
