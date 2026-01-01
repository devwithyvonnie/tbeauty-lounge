import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    // prevent loading the script multiple times
    if (document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);
  }, []);

  return (
    <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white">
      <behold-widget feed-id="Xq9c8QchCx0bRhiQKuXa"></behold-widget>
    </div>
  );
}
