// src/pages/FAQ.jsx
import { useMemo, useState, useEffect } from 'react';

function AccordionItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <div className="rounded-2xl bg-white/80 ring-1 ring-black/5 shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-5 py-4 flex items-start justify-between gap-4 text-left hover:bg-black/[0.02]"
        aria-expanded={open}
      >
        <span className="text-sm md:text-base font-semibold text-brand-forest">
          {q}
        </span>
        <span
          className={`mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white transition-transform ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 px-5 pb-5 text-sm text-brand-forest/85 leading-relaxed">
          {a}
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ title, count, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-3xl p-5 ring-1 transition shadow-sm ${
        active
          ? 'bg-brand-forest text-white ring-brand-forest'
          : 'bg-white/80 text-brand-forest ring-black/5 hover:bg-white'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3
            className={`text-base md:text-lg font-semibold ${
              active ? 'text-white' : 'text-brand-forest'
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-1 text-xs ${
              active ? 'text-white/80' : 'text-brand-forest/70'
            }`}
          >
            {count} question{count === 1 ? '' : 's'}
          </p>
        </div>
        <span
          className={`mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border ${
            active ? 'border-white/30 bg-white/10' : 'border-black/10 bg-white'
          }`}
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </button>
  );
}

export default function FAQ() {
  const SECTIONS = useMemo(
    () => [
      { key: 'overall', title: 'Overall Spa' },
      { key: 'lashes', title: 'Eyelash Extensions' },
      { key: 'facials', title: 'Facials' },
      { key: 'injectables', title: 'Cosmetic Injections' },
      { key: 'laser', title: 'Laser' },
      { key: 'pmu', title: 'PMU' },
      { key: 'waxtint', title: 'Wax + Tint' },
    ],
    [],
  );

  const FAQS = useMemo(
    () => [
      {
        categories: ['overall'],
        q: 'Do I need a card on file to book?',
        a: 'Yes—appointments are reserved just for you, so a valid card on file is required to secure bookings.',
      },
      {
        categories: ['overall'],
        q: 'Do you accept walk-ins?',
        a: 'We recommend booking ahead to ensure availability. Same-day appointments may be available—please call us.',
      },
      {
        categories: ['overall'],
        q: 'What is your cancellation policy?',
        a: 'We ask for at least 24 hours notice to cancel or reschedule. Late cancellations may be subject to a fee.',
      },
      {
        categories: ['overall'],
        q: 'What happens if I’m late?',
        a: 'Because appointments are scheduled back-to-back, arriving late may require rescheduling so we can provide your full service time.',
      },
      {
        categories: ['overall'],
        q: 'Do you allow children or additional guests?',
        a: 'To maintain a calm environment and for safety reasons, we ask that you do not bring children or additional guests to your appointment.',
      },
      {
        categories: ['overall'],
        q: 'What forms of payment do you accept?',
        a: 'We accept major cards and other in-studio payment methods. If you have a question about payment, please contact us before your appointment.',
      },
      {
        categories: ['overall'],
        q: 'Do you offer financing?',
        a: 'Yes—financing may be available through Cherry (pending approval).',
      },
      {
        categories: ['overall'],
        q: 'Do you offer consultations?',
        a: 'Yes. For some services, a consultation may be required before treatment to ensure we choose the safest and best option for your goals.',
      },
      {
        categories: [
          'overall',
          'lashes',
          'facials',
          'injectables',
          'laser',
          'pmu',
          'waxtint',
        ],
        q: 'Can I request a specific provider?',
        a: 'Yes. If you have a preferred provider, note it when booking or let us know and we’ll do our best to match availability.',
      },

      {
        categories: ['lashes'],
        q: 'How often do I need a fill?',
        a: 'Most clients return every 2–3 weeks depending on natural lash shedding, desired fullness, and aftercare.',
      },
      {
        categories: ['lashes'],
        q: 'Can I wear mascara with extensions?',
        a: 'We recommend avoiding mascara, especially waterproof formulas, to help protect retention and keep lashes clean.',
      },

      {
        categories: ['facials'],
        q: 'How often should I get a facial?',
        a: 'Many clients benefit from monthly facials, but we’ll recommend a schedule based on your skin goals and sensitivity.',
      },

      {
        categories: ['injectables'],
        q: 'Is there downtime after injections?',
        a: 'Downtime varies. Some clients experience mild swelling or bruising, and your provider will review aftercare and timing before treatment.',
      },

      {
        categories: ['laser'],
        q: 'Do I need to avoid sun before laser treatments?',
        a: 'Typically yes—sun exposure can affect safety and results. We’ll provide prep instructions based on your treatment.',
      },

      {
        categories: ['pmu'],
        q: 'How long does permanent makeup last?',
        a: 'Results vary by skin type and lifestyle. Many clients schedule touch-ups as recommended by their provider to maintain pigment.',
      },

      {
        categories: ['waxtint'],
        q: 'How long do brow tints typically last?',
        a: 'Tint longevity varies, but many clients enjoy results for a few weeks depending on skin type, cleansing routine, and sun exposure.',
      },
    ],
    [],
  );

  const MOST_ASKED = useMemo(
    () => [
      'Do I need a card on file to book?',
      'What is your cancellation policy?',
      'Do you offer financing?',
      'Do you allow children or additional guests?',
      'Can I request a specific provider?',
      'How often do I need a fill?',
    ],
    [],
  );

  const [query, setQuery] = useState('');
  const [selectedKey, setSelectedKey] = useState(null); // <-- start hidden

  const q = query.trim().toLowerCase();
  const isMatch = (item) => {
    if (!q) return true;
    return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
  };

  const counts = useMemo(() => {
    const map = new Map();
    SECTIONS.forEach((s) => map.set(s.key, 0));
    FAQS.forEach((f) =>
      f.categories.forEach((k) => map.set(k, (map.get(k) || 0) + 1)),
    );
    return map;
  }, [SECTIONS, FAQS]);

  const mostAskedItems = useMemo(() => {
    const set = new Set(MOST_ASKED);
    return FAQS.filter((f) => set.has(f.q) && isMatch(f));
  }, [FAQS, MOST_ASKED, q]);

  const selectedSection = useMemo(() => {
    if (!selectedKey) return null;
    return SECTIONS.find((s) => s.key === selectedKey) || null;
  }, [SECTIONS, selectedKey]);

  const selectedItems = useMemo(() => {
    if (!selectedKey) return [];
    return FAQS.filter((f) => f.categories.includes(selectedKey) && isMatch(f));
  }, [FAQS, selectedKey, q]);

  return (
    <div className="mx-auto w-11/12 max-w-5xl py-10">
      <header className="rounded-3xl bg-brand-cream/70 p-6 md:p-10 ring-1 ring-black/5">
        <p className="text-sm tracking-[0.25em] text-brand-forest/70">FAQ</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-brand-forest leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-2xl text-brand-forest/85">
          Choose a service category, or start with the most common questions.
        </p>

        <div className="mt-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search (ex: fills, downtime, cancellation, financing)..."
            className="w-full rounded-2xl bg-white/80 px-4 py-3 text-sm text-brand-forest outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-brand-forest/40"
          />
        </div>
      </header>

      {/* Browse by Service FIRST */}
      <section className="mt-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-forest">
            Browse by Service
          </h2>

          {selectedKey ? (
            <button
              type="button"
              onClick={() => setSelectedKey(null)}
              className="text-xs rounded-full px-3 py-1 bg-white/80 ring-1 ring-black/5 text-brand-forest hover:bg-white"
            >
              Clear selection
            </button>
          ) : null}
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SECTIONS.map((s) => (
            <CategoryCard
              key={s.key}
              title={s.title}
              count={counts.get(s.key) || 0}
              active={selectedKey === s.key}
              onClick={() => setSelectedKey(s.key)}
            />
          ))}
        </div>
      </section>

      {/* Selected Category — hidden until selected */}
      {selectedKey && (
        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-semibold text-brand-forest">
              {selectedSection?.title}
            </h2>
            <span className="text-xs text-brand-forest/60">
              {selectedItems.length} result
              {selectedItems.length === 1 ? '' : 's'}
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {selectedItems.length ? (
              selectedItems.map((item) => (
                <AccordionItem
                  key={`${selectedKey}-${item.q}`}
                  q={item.q}
                  a={item.a}
                  defaultOpen={!!q} // auto-open while searching
                />
              ))
            ) : (
              <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-black/5">
                <p className="text-sm text-brand-forest/80">
                  No results in this category. Try a different keyword.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Most Asked — hide once a category is selected */}
      {!selectedKey && (
        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-semibold text-brand-forest">
              Most Asked
            </h2>
            <span className="text-xs text-brand-forest/60">
              {mostAskedItems.length} result
              {mostAskedItems.length === 1 ? '' : 's'}
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {mostAskedItems.length ? (
              mostAskedItems.map((item) => (
                <AccordionItem
                  key={`most-${item.q}`}
                  q={item.q}
                  a={item.a}
                  defaultOpen={!!q}
                />
              ))
            ) : (
              <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-black/5">
                <p className="text-sm text-brand-forest/80">
                  No “Most Asked” results for that search. Try another keyword.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="mt-10 rounded-3xl bg-white/80 p-6 md:p-8 ring-1 ring-black/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-brand-forest">
            Still have questions?
          </h2>
          <p className="mt-1 text-sm text-brand-forest/80">
            Call us at <span className="font-medium">623-213-8996</span> or send
            us a message.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="/contact"
            className="rounded-full border border-brand-forest/30 px-5 py-2 text-sm text-brand-forest hover:bg-brand-cream/70"
          >
            Contact Us
          </a>
          <a
            href="/booking"
            className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
