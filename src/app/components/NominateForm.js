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
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/nominate", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        e.target.reset();
      } else {
        setError("Kuch galat hua, please dubara try karen");
      }
    } catch (err) {
      setError("Network error, please check your connection");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <>
      <style jsx global>{`
        @media (max-width: 768px) {
          .form-grid-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          section#nominate-form {
            padding: 60px 5% !important; /* mobile pe kam padding */
          }

          div[style*="maxWidth: 700px"] {
            padding: 30px !important; /* form container padding kam */
          }
        }
      `}</style>

      <section
        id="nominate-form"
        style={{
          padding: "80px 10%",
          background: "#f8f9fa",
        }}
      >
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

          {success && (
            <div
              style={{
                background: "#e6ffe6",
                color: "#006400",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "30px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Nomination successfully submitted! Thank you for your contribution
              🙏
            </div>
          )}

          {error && (
            <div
              style={{
                background: "#ffe6e6",
                color: "#c00",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Name *
              </label>
              <input
                name="name"
                required
                type="text"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                // gridTemplateColumns: "1fr 1fr",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Age *
                </label>
                <input
                  name="age"
                  required
                  type="number"
                  style={{
                    width: "100%",
                    padding: "14px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                />
              </div>

                
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Year of Experience as Social Activist *
                </label>
                <input
                  name="experience"
                  required
                  type="number"
                  style={{
                    width: "100%",
                    padding: "14px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="yourname@example.com"
                  autoComplete="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // basic regex for better validation
                  title="Please enter a valid email address (e.g. name@example.com)"
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                />
                {/* <small style={{ color: '#6b7280', display: 'block', marginTop: '6px', fontSize: '0.875rem' }}>
    We'll use this to send confirmation or updates about your nomination.
  </small> */}
              </div>

              <div>
                <label
                  htmlFor="contact"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Contact Number *
                </label>
                <input
                  id="contact"
                  name="contact"
                  required
                  type="tel"
                  placeholder="9876543210"
                  pattern="[6-9][0-9]{9}" // Indian mobile: starts with 6-9, exactly 10 digits
                  title="Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)"
                  autoComplete="tel-national"
                  maxLength={10}
                  minLength={10}
                  inputMode="numeric" // mobile keyboard pe number pad khulega
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                  onInput={(e) => {
                    // Real-time mein sirf numbers allow + 10 digit limit enforce
                    e.target.value = e.target.value
                      .replace(/[^0-9]/g, "") // non-digits hatao
                      .slice(0, 10); // max 10 digits
                  }}
                />
                {/* <small style={{ color: '#6b7280', display: 'block', marginTop: '6px', fontSize: '0.875rem' }}>
    10-digit Indian mobile number (without +91 or 0)
  </small> */}
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Organization *
              </label>
              <input
                name="organization"
                required
                type="text"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Name the Field of Social Service *
              </label>
              <input
                name="field"
                required
                type="text"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Brief & Explain their nomination *
              </label>
              <textarea
                name="brief"
                required
                rows={6}
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  resize: "vertical",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Docs Attachments (Profile & Pics) *
              </label>
              <input
                type="file"
                name="attachments"
                multiple
                accept="image/*,.pdf,.doc,.docx"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              />
              <small
                style={{
                  color: "#555",
                  display: "block",
                  marginTop: "8px",
                  textAlign: "left",
                }}
              >
                You can attach multiple files (Profile picture + supporting
                documents)
              </small>
            </div>

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
