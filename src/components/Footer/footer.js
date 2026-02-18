import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2026 Akshaya. All Rights Reserved.</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  padding: "20px",
  background: "#111",
  color: "#fff",
};

export default Footer;
