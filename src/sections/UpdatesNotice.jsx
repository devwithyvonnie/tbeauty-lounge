
// src/sections/UpdatesNotice.jsx
// Homepage notice about upcoming pricing + booking/phone system changes.
// Set SHOW_NOTICE to false once the transition is done.
 
const SHOW_NOTICE = true;
 
const UPDATES = [
  {
    title: "Pricing updates coming soon",
    body: "Some service prices will be changing. Updated pricing will be posted on our service pages before it takes effect.",
  },
  {
    title: "New booking & phone system",
    body: "We're moving to a new booking and phone system. If a call or message slips through during the switch, please reach out again and we'll get right back to you.",
  },
];
 
export default function UpdatesNotice() {
  if (!SHOW_NOTICE) return null;
 
  return (
    <section
      aria-labelledby="updates-notice-title"
      className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
    >
      <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
 
      <div className="p-5 md:p-7">
        <div className="flex items-start gap-3">
          <span
            className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-mint/40 text-brand-gold"
            aria-hidden="true"
          >
            ✦
          </span>
          <div className="min-w-0">
            <p className="text-[11px] tracking-[0.22em] text-brand-forest/60">
              A QUICK HEADS-UP
            </p>
            <h2
              id="updates-notice-title"
              className="mt-1 text-lg md:text-xl font-semibold text-brand-forest"
            >
              We're making some changes — thank you for bearing with us
            </h2>
          </div>
        </div>
 
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {UPDATES.map((u) => (
            <div
              key={u.title}
              className="rounded-xl bg-brand-cream/70 p-4 ring-1 ring-black/5"
            >
              <h3 className="text-sm font-semibold text-brand-forest">
                {u.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-brand-forest/80">
                {u.body}
              </p>
            </div>
          ))}
        </div>
 
        <p className="mt-4 text-xs text-brand-forest/60">
          Online booking through Vagaro is the fastest way to schedule while we
          transition.
        </p>
      </div>
    </section>
  );
}
 