import { useMemo, useState, useEffect, useRef } from 'react';

/* --- Keep all your existing FAQ code below --- */
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
      className={`group relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl px-4 py-3 text-left ring-1 shadow-sm transition-all duration-200 ${
        active
          ? 'bg-brand-forest text-white ring-brand-forest scale-[1.02]'
          : 'bg-white text-brand-forest ring-black/5 hover:-translate-y-0.5 hover:shadow-md'
      }`}
    >
      <span
        className={`absolute inset-x-0 top-0 h-1 ${
          active ? 'bg-brand-gold' : 'bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint'
        }`}
        aria-hidden="true"
      />

      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold">{title}</h3>
        <p className={`mt-0.5 text-[11px] ${active ? 'text-white/75' : 'text-brand-forest/60'}`}>
          {count} question{count === 1 ? '' : 's'}
        </p>
      </div>

      <span
        className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs transition ${
          active
            ? 'border-white/30 bg-white/10'
            : 'border-black/10 bg-brand-cream group-hover:translate-x-0.5'
        }`}
        aria-hidden="true"
      >
        →
      </span>
    </button>
  );
}

export default function FAQ() {
  const SECTIONS = useMemo(
    () => [
      { key: 'overall', title: 'Overall Spa', img: '/images/services/hero.png' },
      { key: 'lashes', title: 'Eyelash Extensions', img: '/images/services/lashes/hero.png' },
      { key: 'facials', title: 'Facials', img: '/images/services/facials/hero.png' },
      { key: 'injectables', title: 'Injectables & Functional Medicine', img: '/images/services/injectables/hero.png' },
      { key: 'laser', title: 'Laser', img: '/images/services/laser/hero.png' },
      { key: 'pmu', title: 'PMU', img: '/images/services/pmu/hero.png' },
      { key: 'waxtint', title: 'Wax + Tint', img: '/images/services/wax-tint/hero.png' },
      { key: 'fibroblast', title: 'Fibroblast', img: '/images/services/fibroblast/hero.png' },
      { key: 'headspa', title: 'Japanese Head Spa', img: '/images/services/headspa/hero.png' },
    ],
    [],
  );

  const FAQS = useMemo(
    () => [
      // ---------------- OVERALL ----------------
      {
        categories: ['overall'],
        q: 'Do I need a card on file to book?',
        a: 'Yes—appointments are reserved just for you, so a valid card on file is required to secure bookings.',
      },
      {
        categories: ['overall'],
        q: 'What is your cancellation policy?',
        a: 'We require at least 24 hours\u2019 notice to cancel or reschedule. Changes made within 24 hours incur a 25% cancellation fee, regardless of reason.',
      },
      {
        categories: ['overall'],
        q: 'What if I\u2019m running late to my appointment?',
        a: 'We allow a strict 5-minute grace period so every guest gets their full booked time. Arriving more than 5 minutes late will result in your appointment being canceled, with a 25% late-cancellation fee.',
      },
      {
        categories: ['overall'],
        q: 'What happens if I no-show?',
        a: 'A no-show is missing your appointment without notice, and is charged a non-refundable $50 fee. Repeated no-shows may result in booking restrictions or prepayment requirements.',
      },
      {
        categories: ['overall'],
        q: 'Do you allow children or additional guests?',
        a: 'To keep the space relaxing and let our providers focus fully on your service, we kindly ask that you not bring children to your appointment. Our staff and facility aren\u2019t equipped to supervise children during services.',
      },
      {
        categories: ['overall'],
        q: 'Do you offer financing?',
        a: 'Yes\u2014we partner with Cherry for flexible payment options. You can check your options anytime on our Cherry page before booking.',
      },
      {
        categories: ['overall'],
        q: 'Can I request a specific provider?',
        a: 'Yes\u2014when booking online, you\u2019ll see the option to choose a specific provider, or select "any" if you don\u2019t have a preference and want the earliest availability.',
      },
      {
        categories: ['overall'],
        q: 'What should I expect at my first visit?',
        a: 'Most clients complete their intake forms online before their appointment. When you arrive, our team will bring you back to your station for a quick consult to make sure everyone\u2019s on the same page before your service begins.',
      },
      {
        categories: ['overall', 'injectables'],
        q: 'Is T Beauty Lounge a medical spa? What about injectables?',
        a: 'Yes, T Beauty Lounge is a medical spa. Injectables and functional medicine are available at our Goodyear location through Teresa Le, MSN, FNP-C of TAI Longevity & Aesthetics, an independent nurse practitioner practice.',
      },

      // ---------------- LASHES ----------------
      {
        categories: ['lashes'],
        q: 'How often do I need fills?',
        a: 'We recommend every 2\u20133 weeks with at least 40\u201350% of your extensions remaining. After 3+ weeks or very low retention, a full set may be needed.',
      },
      {
        categories: ['lashes'],
        q: 'Do lash extensions damage my natural lashes?',
        a: 'When applied properly with safe isolation and lengths that match your natural lashes, they should not cause damage.',
      },
      {
        categories: ['lashes'],
        q: 'Can I book a fill if my lashes were done somewhere else?',
        a: 'Yes\u2014foreign fills are welcome. We may need extra time to assess the work and retention, so a small foreign-fill fee may apply.',
      },
      {
        categories: ['lashes'],
        q: 'How should I prepare for my appointment?',
        a: 'Arrive with clean lashes and no eye makeup or mascara. Avoid oil-based products around the eye area and limit caffeine so you can fully relax.',
      },
      {
        categories: ['lashes'],
        q: 'What\u2019s the difference between Classic, Hybrid, and Volume?',
        a: 'Classic applies one extension per natural lash for a soft, natural look\u2014great for first-timers. Hybrid mixes classic and volume techniques for extra fullness. Volume applies lightweight fans of multiple extensions per lash for a fuller look. Extra Volume and Mega Volume go bigger and denser still.',
      },
      {
        categories: ['lashes'],
        q: 'Which set should I get if I\u2019ve never had lashes before?',
        a: 'Classic is a great place to start\u2014it\u2019s the most natural option and a good way to see how you like wearing extensions before going fuller.',
      },
      {
        categories: ['lashes'],
        q: 'How long does an appointment take?',
        a: 'Full sets run about 1.5\u20132 hours. Fills run about 1\u20131.5 hours.',
      },
      {
        categories: ['lashes'],
        q: 'What\u2019s a "foreign fill" and why does it cost extra?',
        a: 'A foreign fill is when we fill lashes applied at a different studio. It\u2019s a bit more ($20) because we need extra time to assess the existing set and make sure it\u2019s safe and suitable to fill.',
      },
      {
        categories: ['lashes'],
        q: 'Can I wear makeup with lash extensions?',
        a: 'No mascara\u2014it will significantly shorten the life of your extensions. Eyeshadow is fine, just make sure to remove it with an oil-free makeup remover, since oil breaks down the adhesive.',
      },
      {
        categories: ['lashes'],
        q: 'What if I\u2019m sensitive to lash adhesive?',
        a: 'We offer a patch test with our regular lash glue, or a sensitive glue alternative. Sensitive glue is gentler but sheds noticeably sooner than our regular glue. All lash work is backed by a 5-day guarantee\u2014if you notice irritation or sensitivity, reach out right away and we\u2019ll get you in to assess it as soon as possible.',
      },

      // ---------------- FACIALS ----------------
      {
        categories: ['facials'],
        q: 'Do I need to stop using retinol or active products before my facial?',
        a: 'For most facials, we recommend pausing retinol, strong exfoliants, and acne prescriptions for 3\u20135 days before your visit. For advanced peels or microneedling, your provider may recommend a longer break.',
      },
      {
        categories: ['facials'],
        q: 'Is there downtime after a facial?',
        a: 'Most facials have little to no downtime\u2014your skin may look slightly flushed but generally radiant. Advanced services like peels or microneedling may involve temporary redness, dryness, or light flaking.',
      },
      {
        categories: ['facials'],
        q: 'Can facials help with acne or dark spots?',
        a: 'Yes. We offer targeted acne and brightening facials, plus HydraDiamond\u00ae and microneedling options that can support smoother texture and more even tone over a series of treatments.',
      },
      {
        categories: ['facials'],
        q: 'Can I wear makeup after my facial?',
        a: 'For best results, we recommend avoiding makeup for the rest of the day so your skin can fully absorb the benefits. For advanced treatments, your provider will give you specific post-care instructions.',
      },
      {
        categories: ['facials'],
        q: 'What\u2019s the difference between your facials?',
        a: 'Our Deluxe facial is the most common starting point: double cleanse, exfoliation, light extractions, moisturizer, sunscreen, and toner. Acne and Anti-Aging facials follow the same steps using products targeted for those concerns. Dermaplaning includes a double cleanse and dermaplaning treatment to remove dead skin, followed by a mask, moisturizer, sunscreen, and toner. Goddess combines Deluxe + Dermaplaning + a mask for the most comprehensive option.',
      },
      {
        categories: ['facials'],
        q: 'How long does a facial take, and how do I know which one to pick?',
        a: 'Facials range from about 1\u20132 hours depending on which one you choose. All first-time clients receive an in-depth consultation to help find the right fit for your skin and goals.',
      },
      {
        categories: ['facials'],
        q: 'How often should I get a facial?',
        a: 'Every 4\u20136 weeks is ideal to align with your skin\u2019s natural renewal cycle.',
      },

      // ---------------- INJECTABLES & FUNCTIONAL MEDICINE ----------------
      {
        categories: ['injectables'],
        q: 'Is Teresa still part of T Beauty Lounge?',
        a: 'Teresa now runs her own independent practice, TAI Longevity & Aesthetics, and continues to see clients on-site at our Goodyear location. Her scheduling, treatment plans, and payments are handled entirely through her own practice.',
      },
      {
        categories: ['injectables'],
        q: 'How do I book with Teresa?',
        a: 'Book directly through TAI Longevity & Aesthetics at tailongevityaesthetics.janeapp.com. This is separate from T Beauty Lounge\u2019s booking system.',
      },
      {
        categories: ['injectables'],
        q: 'Can I use my T Beauty Lounge membership with Teresa?',
        a: 'Yes\u2014your membership discount applies to her services. Membership credits, however, cannot be used, since Teresa bills independently from T Beauty Lounge.',
      },
      {
        categories: ['injectables'],
        q: 'What\u2019s the difference between "injectables" and "functional medicine"?',
        a: 'Injectables (like Botox, filler, and biostimulators) are cosmetic treatments that address how you look. Functional medicine takes a root-cause approach to how you feel\u2014things like hormone balance, energy, and overall wellness. Teresa offers both.',
      },
      {
        categories: ['injectables'],
        q: 'How do I get pricing, book a consultation, or ask clinical questions?',
        a: 'Since Teresa operates independently, all pricing, consultations, and clinical questions go directly through TAI Longevity & Aesthetics\u2014visit her site at tailongevity.com or book at tailongevityaesthetics.janeapp.com.',
      },

      // ---------------- LASER ----------------
      {
        categories: ['laser'],
        q: 'How many laser hair removal sessions will I need?',
        a: 'Most guests need a series of 6\u20138 sessions spaced several weeks apart, depending on the area, hair density, and hair growth cycle. Some may benefit from occasional maintenance treatments over time.',
      },
      {
        categories: ['laser'],
        q: 'Do I need to shave before my appointment?',
        a: 'Yes\u2014closely shave the treatment area about 24 hours before your visit. Avoid waxing, plucking, or threading for several weeks before starting a series.',
      },
      {
        categories: ['laser'],
        q: 'Can I get laser if I have a tan or deeper skin tone?',
        a: 'Safety first. Certain devices and settings work best for certain skin tones. We\u2019ll assess your skin and advise the safest plan, which may include avoiding recent sun or self-tanner.',
      },
      {
        categories: ['laser'],
        q: 'What does laser feel like?',
        a: 'Most guests describe it as a quick rubber-band snap with brief heat. Some areas are more sensitive than others, but treatments are generally fast and well-tolerated.',
      },
      {
        categories: ['laser'],
        q: 'How far apart are sessions scheduled?',
        a: 'We recommend 4 weeks between sessions for best results.',
      },
      {
        categories: ['laser'],
        q: 'Can I get laser if I\u2019m pregnant or breastfeeding?',
        a: 'No\u2014we do not perform laser hair removal on clients who are pregnant or breastfeeding.',
      },
      {
        categories: ['laser'],
        q: 'Do I need to avoid the sun before or after treatment?',
        a: 'Yes\u2014avoid sun exposure to the treatment area for 2\u20134 weeks both before and after your session.',
      },

      // ---------------- PMU ----------------
      {
        categories: ['pmu'],
        q: 'Does permanent makeup hurt?',
        a: 'Most guests describe PMU as mildly scratchy or pressure-like rather than painful. We use medical-grade topical numbing to keep you as comfortable as possible throughout the appointment.',
      },
      {
        categories: ['pmu'],
        q: 'How long does PMU last?',
        a: 'Brows typically last 1\u20133 years, lips around 2\u20133 years, and eyeliner 3+ years, depending on your skin type, lifestyle, and sun exposure. Color fades softly over time.',
      },
      {
        categories: ['pmu'],
        q: 'Is a touch-up required?',
        a: 'Yes. PMU is a two-step process. The perfecting visit allows us to fine-tune color, symmetry, and retention once the first session has healed.',
      },
      {
        categories: ['pmu'],
        q: 'Can you work over previous permanent makeup?',
        a: 'We recommend a consultation first. If old work is very dark, saturated, or outside your desired shape, removal or lightening may be recommended before new PMU.',
      },
      {
        categories: ['pmu'],
        q: 'What areas can you do PMU on?',
        a: 'Powder/Ombr\u00e9 Brows, Eyeliner (top, bottom, or both), and Lip Blush, plus correction services and tattoo removal for both face and body.',
      },
      {
        categories: ['pmu'],
        q: 'Is PMU the same as a regular tattoo?',
        a: 'No\u2014PMU uses different pigments and techniques designed to fade gradually over 1\u20133+ years, rather than being permanent like body tattoos, and it\u2019s applied with a focus on natural, cosmetic enhancement.',
      },

      // ---------------- WAX + TINT ----------------
      {
        categories: ['waxtint'],
        q: 'How long do waxing results last?',
        a: 'Most guests enjoy 3\u20134 weeks of smoothness, depending on hair growth. With consistent visits, hair can grow back finer over time.',
      },
      {
        categories: ['waxtint'],
        q: 'How long do tints and lamination last?',
        a: 'Brow tints typically last 2\u20134 weeks on the hairs, while lamination can last 4\u20136 weeks. Lash tints usually last about 3\u20134 weeks.',
      },
      {
        categories: ['waxtint'],
        q: 'Can I get waxed if I use retinoids or acne medication?',
        a: 'If you are using prescription retinoids, Accutane, or have very sensitized skin, waxing may not be appropriate. Please mention all skincare and medications during your visit so we can advise safely.',
      },
      {
        categories: ['waxtint'],
        q: 'Do I need to grow my brows out before shaping?',
        a: 'We recommend allowing some growth so we can see your natural brow pattern. Avoid tweezing for at least 2\u20133 weeks before your visit if possible.',
      },
      {
        categories: ['waxtint'],
        q: 'What\u2019s the difference between a brow tint and brow lamination?',
        a: 'A tint adds color to the brow hairs for a fuller look. Lamination reshapes and sets the hairs upward and into place for a fuller, more uniform brow shape\u2014they\u2019re often done together.',
      },

      // ---------------- FIBROBLAST ----------------
      {
        categories: ['fibroblast'],
        q: 'What is Fibroblast?',
        a: 'Fibroblast is a targeted skin-tightening treatment designed to help improve the look of laxity and texture in specific areas. Your provider will explain how it works and whether it\u2019s the best option for your goals.',
      },
      {
        categories: ['fibroblast'],
        q: 'How many sessions do I need?',
        a: 'Many guests see improvement after one session, but the ideal plan depends on the area, your skin, and your goals. Some areas may benefit from additional sessions spaced out over time.',
      },
      {
        categories: ['fibroblast'],
        q: 'Is there downtime?',
        a: 'Downtime varies by area and individual. You may experience redness and temporary visible healing in the treated area\u2014it\u2019s common for small dots to form and scab as part of healing, so it\u2019s important not to pick at them. We\u2019ll review full aftercare during your consultation.',
      },
      {
        categories: ['fibroblast'],
        q: 'Who is not a good candidate?',
        a: 'Certain skin types, medical conditions, or recent treatments may not be compatible. We\u2019ll screen for safety during your consultation and recommend alternatives if needed.',
      },
      {
        categories: ['fibroblast'],
        q: 'Is this the same as a facelift?',
        a: 'No\u2014Fibroblast is a non-surgical, targeted treatment for skin laxity and texture in specific areas, not a surgical procedure. Results and downtime are different from surgical options.',
      },

      // ---------------- JAPANESE HEAD SPA ----------------
      {
        categories: ['headspa'],
        q: 'Is a head spa good for everyone?',
        a: 'Most guests can enjoy head spa services, and we\u2019ll tailor the pressure and products to your scalp type and comfort level. If you have a scalp condition or recent treatments, let us know so we can recommend the best option.',
      },
      {
        categories: ['headspa'],
        q: 'Should I come with clean hair?',
        a: 'No need\u2014your service is designed to support scalp care and relaxation. If you have extensions or a sensitive scalp, mention it at booking so we can adjust the treatment.',
      },
      {
        categories: ['headspa'],
        q: 'Can I add a mini facial to any service?',
        a: 'Yes\u2014our mini facial add-on pairs beautifully with any head spa ritual for an extra glow boost.',
      },
      {
        categories: ['headspa'],
        q: 'How often should I book a head spa?',
        a: 'Many guests love it monthly for stress relief and scalp support, but your ideal schedule depends on your goals and scalp needs.',
      },
      {
        categories: ['headspa'],
        q: 'What actually happens during a head spa treatment?',
        a: 'We start by taking a look at your scalp and addressing any specific concerns, then move through dry brushing, a deep cleanse, exfoliation, a mask, massage, and conditioner. Please note our team isn\u2019t licensed hair stylists, so you\u2019ll leave with wet hair rather than a blowout or style.',
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
  const [selectedKey, setSelectedKey] = useState(null);
  const resultsRef = useRef(null);

  const selectCategory = (key) => {
    setSelectedKey(key);
    // Auto-scroll to results just below the category grid
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

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
    <div className="py-8">
      {/* WIDE HERO — matches Lashes/Services/etc. hero convention */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/about/hero.png"
            alt="T Beauty Lounge"
            className="h-[36vh] w-full object-cover md:h-[42vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/75" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-3xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                FAQ
              </p>
              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Choose a service category, or start with the most common
                questions.
              </p>

              <div className="mt-6">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search (ex: fills, downtime, cancellation, financing)..."
                  className="w-full max-w-xl rounded-2xl bg-white/90 px-4 py-3 text-sm text-brand-forest outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-brand-forest/40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WIDER CONTENT */}
      <div className="mx-auto w-[92%] max-w-7xl space-y-8 py-6 md:py-8">
        {/* Browse by Service — compact chips */}
        <section>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold text-brand-forest">
              Browse by Service
            </h2>

            {selectedKey ? (
              <button
                type="button"
                onClick={() => setSelectedKey(null)}
                className="text-xs rounded-full px-3 py-1 bg-white ring-1 ring-black/5 text-brand-forest hover:bg-brand-cream/60"
              >
                Clear selection
              </button>
            ) : null}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {SECTIONS.map((s) => (
              <CategoryCard
                key={s.key}
                title={s.title}
                count={counts.get(s.key) || 0}
                active={selectedKey === s.key}
                onClick={() => selectCategory(s.key)}
              />
            ))}
          </div>
        </section>

        <div ref={resultsRef} className="scroll-mt-24">
          {selectedKey && (
            <section>
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-xl font-semibold text-brand-forest">
                  {selectedSection?.title}
                </h2>
                <span className="text-xs text-brand-forest/60">
                  {selectedItems.length} result{selectedItems.length === 1 ? '' : 's'}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {selectedItems.length ? (
                  selectedItems.map((item) => (
                    <AccordionItem
                      key={`${selectedKey}-${item.q}`}
                      q={item.q}
                      a={item.a}
                      defaultOpen={!!q}
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

          {!selectedKey && (
            <section>
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-xl font-semibold text-brand-forest">
                  Most Asked
                </h2>
                <span className="text-xs text-brand-forest/60">
                  {mostAskedItems.length} result{mostAskedItems.length === 1 ? '' : 's'}
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
                      No "Most Asked" results for that search. Try another keyword.
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        <div className="rounded-2xl bg-white/80 p-6 md:p-8 ring-1 ring-black/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-brand-forest">
              Still have questions?
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              Call us at <span className="font-medium">623-213-8996</span> or
              send us a message.
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
    </div>
  );
}
