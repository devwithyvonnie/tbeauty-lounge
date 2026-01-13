import { useEffect } from "react";

/**
 * Loads Podium widget (once) and optionally opens chat
 * when `open` becomes true.
 */
export default function PodiumPopup({ open = false }) {
  useEffect(() => {
    // Inject script once
    if (!document.getElementById("podium-widget")) {
      const s = document.createElement("script");
      s.defer = true;
      s.id = "podium-widget";
      s.src =
        "https://connect.podium.com/widget.js#ORG_TOKEN=e40051f4-14c5-4426-8138-fee1aac2f5c4";
      s.setAttribute(
        "data-organization-api-token",
        "e40051f4-14c5-4426-8138-fee1aac2f5c4"
      );

      document.body.appendChild(s);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    // Podium exposes window.Podium once loaded
    const tryOpen = () => {
      if (window.Podium?.open) {
        window.Podium.open();
      } else {
        // Retry until widget finishes loading
        setTimeout(tryOpen, 300);
      }
    };

    tryOpen();
  }, [open]);

  return null;
}
