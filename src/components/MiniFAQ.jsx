import { useState } from "react";

export default function MiniFAQAccordion({ title = "Quick FAQ", faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs?.length) return null;

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="mt-12 rounded-2xl bg-white p-6 ring-1 ring-black/5">
      <h2 className="text-xl font-semibold text-brand-forest">{title}</h2>
      <p className="mt-1 mb-4 text-sm text-brand-forest/75">
        The questions we get asked the most — tap to expand an answer.
      </p>

      <div className="divide-y divide-brand-cream/70">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-3">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-brand-forest text-sm md:text-base">
                  {item.q}
                </span>

                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border border-brand-forest/50 text-xs font-bold text-brand-forest transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {/* animated panel */}
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <p className="mt-2 text-sm text-brand-forest/80 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <a
        href="/faq"
        className="mt-6 inline-block rounded-full border border-brand-forest px-5 py-2 text-sm text-brand-forest hover:bg-brand-cream/60"
      >
        View Full FAQ
      </a>
    </section>
  );
}