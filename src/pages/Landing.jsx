import { Link } from "react-router-dom";

function Landing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "#8b5cf6",
          marginBottom: "15px",
        }}
      >
        QRify Pro
      </h1>

      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "15px",
        }}
      >
        Generate QR Codes Instantly
      </h2>

      <p
        style={{
          maxWidth: "600px",
          lineHeight: "1.8",
          color: "#cbd5e1",
          marginBottom: "25px",
        }}
      >
        Create QR codes for URLs, Emails, Phone Numbers and Text in
        seconds.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            background: "#8b5cf6",
            color: "white",
            padding: "12px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Get Started
        </Link>

        <Link
          to="/login"
          style={{
            textDecoration: "none",
            border: "2px solid #8b5cf6",
            color: "white",
            padding: "12px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "15px 25px",
            borderRadius: "12px",
          }}
        >
          ⚡ Fast
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "15px 25px",
            borderRadius: "12px",
          }}
        >
          🔒 Secure
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "15px 25px",
            borderRadius: "12px",
          }}
        >
          🎯 Free
        </div>
      </div>
    </div>
  );
}

export default Landing;