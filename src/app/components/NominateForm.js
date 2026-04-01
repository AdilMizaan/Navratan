// src/app/components/NominateForm.js
"use client";

import { useState } from "react";

export default function NominateForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setSuccess(false);

  // FormData directly bhejna hai — JSON nahi
  const formData = new FormData(e.currentTarget);

  try {
    const response = await fetch('https://navratanfoundations.com/nominate.php', {
      method: 'POST',
      // Content-Type header mat lagao — browser khud multipart/form-data set karega
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setSuccess(true);
      e.target.reset();
    } else {
      setError(result.error || 'Kuch galat hua, please dubara try karen');
    }
  } catch (err) {
    setError('Network error, please check your connection');
  }

  setLoading(false);
};



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");
  //   setSuccess(false);

  //   const formData = new FormData(e.currentTarget);

  //   // File names collect karo (attach nahi hongi, sirf names email mein jayenge)
  //   const files = formData.getAll("attachments");
  //   const fileNames = files
  //     .filter((f) => f instanceof File && f.size > 0)
  //     .map((f) => f.name)
  //     .join(", ") || "No files selected";

  //   const data = {
  //     name: formData.get("name"),
  //     age: formData.get("age") || "N/A",
  //     experience: formData.get("experience") || "N/A",
  //     email: formData.get("email"),
  //     contact: formData.get("contact"),
  //     organization: formData.get("organization") || "N/A",
  //     field: formData.get("field") || "N/A",
  //     brief: formData.get("brief") || "N/A",
  //     fileNames,
  //   };

  //   try {
  //     const response = await fetch("https://api.resend.com/emails", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_RESEND_API_KEY}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         from: "Navratan Foundation <onboarding@resend.dev>",
  //         to: ["akif77761@gmail.com"],
  //         subject: `New Nomination - ${data.name}`,
  //         html: `
  //           <h1>New Nomination Received</h1>
  //           <p><strong>Name:</strong> ${data.name}</p>
  //           <p><strong>Age:</strong> ${data.age}</p>
  //           <p><strong>Experience:</strong> ${data.experience} years</p>
  //           <p><strong>Email:</strong> ${data.email}</p>
  //           <p><strong>Contact Number:</strong> ${data.contact}</p>
  //           <p><strong>Organization:</strong> ${data.organization}</p>
  //           <p><strong>Field:</strong> ${data.field}</p>
  //           <p><strong>Brief:</strong><br>${data.brief.replace(/\n/g, "<br>")}</p>
  //           <p><strong>Attached Files (manually request if needed):</strong> ${data.fileNames}</p>
  //         `,
  //       }),
  //     });

  //     if (response.ok) {
  //       setSuccess(true);
  //       e.target.reset();
  //     } else {
  //       const result = await response.json();
  //       setError(result.message || "Kuch galat hua, please dubara try karen");
  //     }
  //   } catch (err) {
  //     setError("Network error, please check your connection");
  //     console.error(err);
  //   }

  //   setLoading(false);
  // };

  return (
    <>
      <style jsx global>{`
        @media (max-width: 768px) {
          .form-grid-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          section#nominate-form {
            padding: 60px 5% !important;
          }
          div[style*="maxWidth: 700px"] {
            padding: 30px !important;
          }
        }
      `}</style>

      <section id="nominate-form" style={{ padding: "80px 10%", background: "#f8f9fa" }}>
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "white",
            padding: "50px",
            borderRadius: "16px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#2c3e50",
              marginBottom: "40px",
              fontSize: "2.2rem",
            }}
          >
            Nomination Form
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* Name - REQUIRED */}
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", textAlign: "left" }}>
                Name *
              </label>
              <input
                name="name"
                required
                type="text"
                style={{ width: "100%", padding: "14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "1rem" }}
              />
            </div>

            {/* Age + Experience */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", textAlign: "left" }}>
                  Age
                </label>
                <input
                  name="age"
                  type="number"
                  style={{ width: "100%", padding: "14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "1rem" }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", textAlign: "left" }}>
                  Year of Experience as Social Activist
                </label>
                <input
                  name="experience"
                  type="number"
                  style={{ width: "100%", padding: "14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "1rem" }}
                />
              </div>
            </div>

            {/* Email + Contact - REQUIRED */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div>
                <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: "600", textAlign: "left" }}>
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="yourname@example.com"
                  autoComplete="email"
                  style={{ width: "100%", padding: "14px 16px", border: "1px solid #d1d5db", borderRadius: "8px", fontSize: "1rem" }}
                />
              </div>
              <div>
                <label htmlFor="contact" style={{ display: "block", marginBottom: "8px", fontWeight: "600", textAlign: "left" }}>
                  Contact Number *
                </label>
                <input
                  id="contact"
                  name="contact"
                  required
                  type="tel"
                  placeholder="9876543210"
                  pattern="[6-9][0-9]{9}"
                  title="10-digit Indian mobile number"
                  autoComplete="tel-national"
                  maxLength={10}
                  minLength={10}
                  inputMode="numeric"
                  style={{ width: "100%", padding: "14px 16px", border: "1px solid #d1d5db", borderRadius: "8px", fontSize: "1rem" }}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                  }}
                />
              </div>
            </div>

            {/* Organization */}
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", textAlign: "left" }}>
                Organization
              </label>
              <input
                name="organization"
                type="text"
                style={{ width: "100%", padding: "14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "1rem" }}
              />
            </div>

            {/* Field */}
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", textAlign: "left" }}>
                Name the Field of Social Service
              </label>
              <input
                name="field"
                type="text"
                style={{ width: "100%", padding: "14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "1rem" }}
              />
            </div>

            {/* Brief */}
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", textAlign: "left" }}>
                Brief & Explain their nomination
              </label>
              <textarea
                name="brief"
                rows={6}
                style={{ width: "100%", padding: "14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "1rem", resize: "vertical" }}
              />
            </div>

            {/* File Upload - Optional */}
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", textAlign: "left" }}>
                Docs Attachments (Profile & Pics) — Optional
              </label>
              <input
                type="file"
                name="attachments"
                multiple
                accept="image/*,.pdf,.doc,.docx"
                style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "8px" }}
              />
              {/* <small style={{ color: "#888", display: "block", marginTop: "8px", textAlign: "left" }}>
                ⚠️ Files ka naam email mein mention hoga. Baad mein alag se bhejne ke liye request ki ja sakti hai.
              </small> */}
            </div>

            {/* Success / Error */}
            {success && (
              <div style={{ background: "#e6ffe6", color: "#006400", padding: "15px", borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}>
                Nomination successfully submitted! Thank you for your contribution 🙏
              </div>
            )}
            {error && (
              <div style={{ background: "#ffe6e6", color: "#c00", padding: "15px", borderRadius: "8px", textAlign: "center" }}>
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading ? "#aaa" : "#00acf0",
                color: "white",
                padding: "16px",
                border: "none",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                cursor: loading ? "not-allowed" : "pointer",
                marginTop: "20px",
              }}
            >
              {loading ? "Submitting..." : "Submit Nomination"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}


