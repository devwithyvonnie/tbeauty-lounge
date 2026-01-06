const REVIEWS = [
  {
    text:
      "T Beauty Lounge cares how you look and will make you look beautiful! Thank you T Beauty Lounge Goodyear! Thank you for the best lashes I've ever had. I can't wait for the other treatments you do because every woman looks gorgeous leaving!",
    name: "Verified Client",
    source: "Google",
    rating: 5,
  },
  {
    text:
      "Each and every time I come in I feel at peace. Staff always goes above and beyond. I will always highly recommend coming here to feel gorgeous and get the relaxation needed.",
    name: "Verified Client",
    source: "Google",
    rating: 5,
  },
  {
    text: "The best place!! Don't go anywhere else, come here!",
    name: "Verified Client",
    source: "Google",
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 text-brand-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          {i < count ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ r }) {
  return (
    <article className="h-full rounded-2xl bg-[#FAF8F3] ring-1 ring-black/5 shadow-sm p-5">
      <Stars count={r.rating} />
      <p className="mt-3 text-sm md:text-base text-brand-forest/85 leading-relaxed">
        “{r.text}”
      </p>

      <div className="mt-4 flex items-center justify-between text-xs text-brand-forest/60">
        <span>— {r.name}</span>
        <span>{r.source}</span>
      </div>
    </article>
  );
}

export default function SocialProof() {
  return (
    <section className="border-y border-[#ece8de] bg-white">
      <div className="mx-auto w-[92%] max-w-7xl py-8 md:py-10">
        <div className="flex items-end justify-between gap-4">
          {/* Optional: hide on mobile so it doesn't crowd */}
          <a
            href="https://www.google.com/search?q=T+Beauty+Lounge+Goodyear"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block text-sm text-brand-forest underline underline-offset-4 hover:opacity-80"
          >
            Read more on Google
          </a>
        </div>

        {/* Mobile: swipeable row | Desktop: grid */}
        <div className="mt-5 md:mt-6">
          <div className="md:hidden -mx-[4%] px-[4%]">
            <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
              {REVIEWS.map((r, i) => (
                <div key={i} className="min-w-[85%] snap-start">
                  <ReviewCard r={r} />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid gap-4 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <ReviewCard key={i} r={r} />
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-5 text-center sm:hidden">
          <a
            href="https://www.google.com/search?q=T+Beauty+Lounge+Goodyear"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm text-brand-forest underline underline-offset-4 hover:opacity-80"
          >
            Read more on Google
          </a>
        </div>
      </div>
    </section>
  );
}
