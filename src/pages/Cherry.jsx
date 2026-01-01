import { useEffect } from "react";

export default function Cherry() {
  useEffect(() => {
    // This is your Cherry snippet, wrapped in a <script> tag we create at runtime
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (w, d, s, o, f, js, fjs) {
          w[o] = w[o] || function () {
              (w[o].q = w[o].q || []).push(arguments);
          };
          js = d.createElement(s);
          fjs = d.getElementsByTagName(s)[0];
          js.id = o;
          js.src = "https://files.withcherry.com/widgets/widget.js";
          js.async = 1;
          fjs.parentNode.insertBefore(js, fjs);
      })(window, document, "script", "_hw");

      _hw("init", {
          debug: false,
          variables: {
              slug: 'tbeautylounge',
              name: 'T-Beauty Lounge LLC', 
              images: [24],
              customLogo: '',
              defaultPurchaseAmount: 750,
              customImage: '', 
              imageCategory: 'medspa',
          },
          styles: {
              primaryColor: '#7c9a6d',
              secondaryColor: '#7c9a6d10',
              fontFamily: 'Montserrat',
              headerFontFamily: 'Montserrat',
          }
      }, ['hero','calculator','howitworks','faq']);
    `;
    document.body.appendChild(script);

    // basic cleanup: remove this script tag on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="px-6 py-10">
      {/* These are the exact containers from your Cherry HTML snippet */}
      <div id="all"></div>
      <div id="hero"></div>
      <div id="calculator"></div>
      <div id="howitworks"></div>
      <div id="testimony"></div>
      <div id="faq"></div>
    </div>
  );
}
