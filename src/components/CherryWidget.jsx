import { useEffect } from "react";

export default function CherryWidget() {
  useEffect(() => {
    // If script already loaded, just init again
    const initCherry = () => {
      if (!window._hw) return;

      window._hw("init", {
        debug: false,
        variables: {
          slug: "tbeautylounge",
          name: "T-Beauty Lounge LLC",
          images: [24],
          customLogo: "",
          defaultPurchaseAmount: 750,
          customImage: "",
          imageCategory: "aesthetics",
          language: "en",
        },
        styles: {
          primaryColor: "#7c9a6d",
          secondaryColor: "#7c9a6d10",
          fontFamily: "Playfair Display",
          headerFontFamily: "Playfair Display",
        },
      }, ["hero", "calculator", "howitworks", "faq"]);
    };

    // Create the queue function if it doesn't exist yet
    window._hw =
      window._hw ||
      function () {
        (window._hw.q = window._hw.q || []).push(arguments);
      };

    // Load script once
    const existing = document.getElementById("_hw");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "_hw";
      script.src = "https://files.withcherry.com/widgets/widget.js";
      script.async = true;
      script.onload = initCherry;
      document.body.appendChild(script);
    } else {
      initCherry();
    }
  }, []);

  return (
    <>
      <div id="all"></div>
      <div id="hero"></div>
      <div id="calculator"></div>
      <div id="howitworks"></div>
      <div id="testimony"></div>
      <div id="faq"></div>
    </>
  );
}
