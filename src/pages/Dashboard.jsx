import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
// import "../App.css";

function Dashboard() {
  const [type, setType] = useState("text");
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [history, setHistory] = useState([]);

  const generateQR = () => {
    if (!input.trim()) return;

    let formattedValue = input;

    if (type === "email") {
      formattedValue = `mailto:${input}`;
    } else if (type === "phone") {
      formattedValue = `tel:${input}`;
    }

    setQrValue(formattedValue);

    setHistory((prev) => {
      const updated = [input, ...prev];
      return updated.slice(0, 5);
    });
  };

  const downloadQR = () => {
    const canvas = document.getElementById("qr-code");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyContent = () => {
    navigator.clipboard.writeText(input);
    alert("Copied Successfully!");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>QR Code Generator</h1>
        <p>
          Generate QR Codes for Text, URLs, Emails and Phone Numbers.
        </p>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="url">URL</option>
          <option value="email">Email</option>
          <option value="phone">Phone Number</option>
        </select>

        <input
          type="text"
          placeholder={`Enter ${type}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="button-group">
          <button onClick={generateQR}>
            Generate QR
          </button>

          <button onClick={copyContent}>
            Copy Content
          </button>
        </div>

        {qrValue && (
          <div className="qr-section">
            <QRCodeCanvas
              id="qr-code"
              value={qrValue}
              size={250}
            />

            <button
              className="download-btn"
              onClick={downloadQR}
            >
              Download QR
            </button>
          </div>
        )}

        <div className="history">
          <h3>Recent QR History</h3>

          {history.length === 0 ? (
            <p>No QR generated yet.</p>
          ) : (
            history.map((item, index) => (
              <div
                key={index}
                className="history-item"
              >
                {item}
              </div>
            ))
          )}
        </div>
      </div>

      <footer>
        <h3>Pandit Muskan Sharma</h3>

        <p>muskanpandit555@gmail.com</p>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
          className="digital-btn"
        >
          Built for Digital Heroes
        </a>
      </footer>
    </div>
  );
}

export default Dashboard;