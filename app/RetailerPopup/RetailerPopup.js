"use client";
import { useState } from "react";

export default function RetailerPopup({ visible, onClose }) {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    village: "",
    taluka: "",
    pincode: "",
  });
  const [errors, setErrors] = useState({});

  if (!visible) return null;

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.whatsapp || !/^\d{10}$/.test(form.whatsapp))
      errs.whatsapp = "Valid 10-digit WhatsApp number required";
    if (!form.village) errs.village = "Village name is required";
    if (!form.taluka) errs.taluka = "Taluka is required";
    if (!form.pincode || !/^\d{6}$/.test(form.pincode))
      errs.pincode = "Valid 6-digit pincode required";
    return errs;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const message = `Find Retailer Request:
Name: ${form.name}
WhatsApp: ${form.whatsapp}
Village: ${form.village}
Taluka: ${form.taluka}
Pincode: ${form.pincode}`;

    const whatsappNumber = "919942500600";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
    onClose();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
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
        zIndex: 1000,
        padding: "1rem",
      }}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "20px 20px",
        }}
      >
        <h4 className="text-lg font-bold text-center mb-2">Find Retailers</h4>
        <p style={{fontSize:"20px", marginBottom:"20px"}} className="text-gray-500 text-center mb-6 px-4">
          Enter your details to find the best retailer
        </p>

        <div className="space-y-3">
          {[
            { name: "name", placeholder: "Enter your name" },
            { name: "whatsapp", placeholder: "Enter Whatsapp Number" },
            { name: "village", placeholder: "Enter your Village name" },
            { name: "taluka", placeholder: "Enter your taluka" },
            { name: "pincode", placeholder: "Enter your pincode" },
          ].map((field) => (
            <div
              key={field.name}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginBottom: "10px"
              }}
            >
              <input
                name={field.name}
                type="text"
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                style={{ width: "100%", borderColor:errors[field.name] ? "red" : "gray" }}
                className={`w-full border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 text-sm focus:outline-none`}
              />
              {errors[field.name] && (
                <p className="mt-1" style={{color:"red", fontSize:"12px"}}>{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            display: "flex",
            marginTop: "20px",
            marginBottom: "10px",
            width: "100%",
            gap: "10px",
          }}
        >
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#FFF",
              textDecoration: "underline",
              width: "50%",
              borderRadius: "10px",
              border: "1px solid gray",
            }}
            className="w-full bg-black text-black px-4 py-2 mt-6 rounded hover:bg-gray-800"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            style={{ backgroundColor: "#B62025", width: "50%" }}
            className="w-full bg-black text-white px-4 py-2 mt-6 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
