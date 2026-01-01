const faqs = [
  {
    q: 'Do I need to stop skincare before Botox?',
    a: 'Avoid retinoids and exfoliants 24–48 hrs prior. We’ll review at your visit.',
  },
  {
    q: 'How often should I get a facial?',
    a: 'Every 4–6 weeks is ideal to sync with your skin cycle.',
  },
  {
    q: 'Can I shave before laser hair removal?',
    a: 'Yes—shave 24 hrs before. Avoid waxing or plucking.',
  },
];

export default function MiniFAQ() {
  return (
    <section className="mx-auto w-11/12 max-w-6xl py-12">
      <div className="grid gap-4 md:grid-cols-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="rounded-2xl border border-[#e5e2d9] bg-white p-5"
          >
            <summary className="cursor-pointer list-none text-base font-medium">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-[#2f3a2f]/80">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="mb-6 flex items-end justify-between">
        <a href="/faq" className="text-sm underline">
          View all FAQs
        </a>
      </div>
    </section>
  );
}
