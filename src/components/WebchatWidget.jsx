// src/components/WebchatWidget.jsx
// Loads the Mangomint web chat / booking script once for the whole site.
// Mounted in App.jsx so it's available on every page.
import { useEffect } from "react";

const MANGOMINT_COMPANY_ID = 532777;
const SCRIPT_ID = "mangomint-app";

export default function WebchatWidget() {
  useEffect(() => {
    // Config must exist before app.js loads
    window.Mangomint = window.Mangomint || {};
    window.Mangomint.CompanyId = MANGOMINT_COMPANY_ID;

    // Prevent duplicate script inserts
    if (document.getElementById(SCRIPT_ID)) return;

    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src = "https://booking.mangomint.com/app.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return null;
}
