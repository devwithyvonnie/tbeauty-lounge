import { useEffect } from "react";

export default function PodiumWidget() {
  useEffect(() => {
    // Prevent duplicate script inserts
    if (document.getElementById("podium-widget")) return;

    const s = document.createElement("script");
    s.defer = true;
    s.src =
      "https://connect.podium.com/widget.js#ORG_TOKEN=e40051f4-14c5-4426-8138-fee1aac2f5c4";
    s.id = "podium-widget";
    s.setAttribute(
      "data-organization-api-token",
      "e40051f4-14c5-4426-8138-fee1aac2f5c4"
    );

    document.body.appendChild(s);

    // Optional cleanup if you want it removed when leaving Home:
    // return () => {
    //   const el = document.getElementById("podium-widget");
    //   if (el) el.remove();
    // };
  }, []);

  return null;
}
