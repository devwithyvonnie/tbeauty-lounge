import { useState } from "react";

const faqs = [
  {
    q: "Do I need to stop skincare before Botox?",
    a: "Avoid retinoids and exfoliants 24–48 hours prior. We’ll review your routine at your visit.",
  },
  {
    q: "How often should I get a facial?",
    a: "Every 4–6 weeks is ideal to align with your skin’s natural renewal cycle.",
  },
  {
    q: "Can I shave before laser hair removal?",
    a: "Yes—shave 24 hours before your appointment. Avoid waxing or plucking beforehand.",
  },
];

export default function MiniFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto w-[92%] max-w-7xl py-8">
      <div className="grid gap-3 md:grid-cols-3 sm:grid-cols-2">
        {faqs.map((f, i) => {
          const open = openIndex === i;

          return (
            <div
              key={f.q}
              className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full px-5 py-4 flex items-start justify-between gap-4 text-left hover:bg-black/[0.02]"
                aria-expanded={open}
              >
                <span className="text-sm md:text-base font-semibold text-brand-forest">
                  {f.q}
                </span>

                <span
                  className={[
                    "mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-forest/30",
                    "text-brand-forest transition-transform",
                    open ? "rotate-45" : "",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {open && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-brand-forest/80 leading-relaxed">
                    {f.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 text-center">
        <a
          href="/faq"
          className="inline-block text-sm text-brand-forest underline underline-offset-4 hover:opacity-80"
        >
          View all FAQs
        </a>
      </div>
    </section>
  );
}
