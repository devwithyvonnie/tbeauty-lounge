
import { useMemo, useState } from "react";
 
function SectionAccordion({ title, subtitle, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
 
  return (
    <section className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left hover:bg-[var(--color-surface-2)]"
        aria-expanded={open}
      >
        <div className="flex items-start gap-3 px-4 py-4 sm:px-5 sm:py-4">
          {/* Icon */}
          {icon ? (
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]">
              <span className="text-base">{icon}</span>
            </span>
          ) : null}
 
          {/* Title + Subtitle */}
          <div className="min-w-0 flex-1">
            <h2 className="text-[15px] font-semibold leading-snug text-brand-forest sm:text-base md:text-lg">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-1 text-[13px] leading-snug text-brand-forest/70 sm:text-sm">
                {subtitle}
              </p>
            ) : null}
          </div>
 
          {/* Toggle */}
          <span
            className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] transition-transform ${
              open ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </div>
      </button>
 
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="px-4 pb-5 sm:px-5">{children}</div>
        </div>
      </div>
    </section>
  );
}
 
function RuleCallout({ children }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-3 sm:p-4">
      <p className="text-[13px] leading-relaxed text-slate-700 sm:text-sm">{children}</p>
    </div>
  );
}
 
function TextBlock({ children }) {
  return (
    <div className="space-y-3 text-[13px] leading-relaxed text-slate-700 sm:text-sm">
      {children}
    </div>
  );
}
 
function ImageCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="relative">
        <img
          src="/images/policies-spa.png"
          alt="Relaxing spa environment at T Beauty Lounge"
          className="h-44 w-full object-cover sm:h-52 md:h-56"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/35" />
      </div>
 
      <div className="p-4 sm:p-6">
        <p className="text-[11px] tracking-[0.22em] text-brand-forest/70">
          T BEAUTY LOUNGE
        </p>
        <h1 className="mt-2 text-2xl font-semibold leading-tight text-brand-forest sm:text-3xl">
          Spa Policies & Etiquette
        </h1>
        <p className="mt-3 text-[13px] leading-relaxed text-slate-700 sm:text-sm">
          Your appointment is reserved just for you. These policies help protect
          your time, your provider’s time, and every guest’s experience.
        </p>
      </div>
    </div>
  );
}
 
export default function PolicyPage() {
  const sections = useMemo(
    () => [
      {
        title: "Booking & Payments",
        subtitle: "How appointments are secured and how balances are handled.",
        icon: "💳",
        body: (
          <TextBlock>
            <p>
              A valid credit or debit card on file is required to book any
              appointment. Your card is not charged at booking unless a deposit
              applies.
            </p>
 
            <RuleCallout>
              <span className="font-medium">New clients</span> and clients booking{" "}
              <span className="font-medium">select premium services</span> pay a
              non-refundable deposit at booking. Your deposit is applied to your
              service total at checkout.
            </RuleCallout>
 
            <p className="text-slate-600">
              If a payment or fee is declined, you’ll receive an invoice that must
              be paid in full before booking future appointments. Unpaid balances
              may be referred to collections.
            </p>
          </TextBlock>
        ),
      },
      {
        title: "Cancellations, Late Arrivals & No-Shows",
        subtitle: "Policies that protect reserved time and keep the day on schedule.",
        icon: "⏰",
        body: (
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-brand-forest">
                Cancellation & Rescheduling
              </h3>
 
              <TextBlock>
                <p>
                  Appointments must be canceled or rescheduled at least{" "}
                  <span className="font-medium">48 hours (2 days)</span> before the
                  start time. You can cancel or reschedule online, by text, or by
                  phone.
                </p>
 
                <RuleCallout>
                  Changes made within 48 hours are charged{" "}
                  <span className="font-medium">50% of the service price</span>,
                  regardless of reason. Any deposit is applied toward this fee.
                </RuleCallout>
 
                <p className="text-slate-600">
                  This fee covers the time reserved and the preparation completed
                  for your service.
                </p>
              </TextBlock>
            </div>
 
            <div className="border-t border-[var(--color-border)] pt-5 sm:pt-6">
              <h3 className="text-sm font-semibold text-brand-forest">Late Arrival</h3>
 
              <TextBlock>
                <p>
                  We allow a{" "}
                  <span className="font-medium">5-minute grace period</span>. Your
                  appointment ends at its scheduled time so the next guest is not
                  kept waiting.
                </p>
 
                <RuleCallout>
                  Arriving more than 5 minutes late may result in a shortened or
                  rescheduled service, and the{" "}
                  <span className="font-medium">full service price</span> applies.
                </RuleCallout>
              </TextBlock>
            </div>
 
            <div className="border-t border-[var(--color-border)] pt-5 sm:pt-6">
              <h3 className="text-sm font-semibold text-brand-forest">No-Show</h3>
 
              <TextBlock>
                <p>
                  A <span className="font-medium">no-show</span> is missing your
                  appointment without notice.
                </p>
 
                <RuleCallout>
                  No-shows are charged{" "}
                  <span className="font-medium">100% of the service price</span>.
                  This fee is non-refundable.
                </RuleCallout>
              </TextBlock>
            </div>
 
            <div className="border-t border-[var(--color-border)] pt-5 sm:pt-6">
              <h3 className="text-sm font-semibold text-brand-forest">
                Repeated Missed Appointments
              </h3>
 
              <TextBlock>
                <RuleCallout>
                  After <span className="font-medium">two</span> late cancellations
                  or no-shows within <span className="font-medium">six months</span>,
                  future bookings require{" "}
                  <span className="font-medium">prepayment in full</span>.
                </RuleCallout>
              </TextBlock>
            </div>
          </div>
        ),
      },
      {
        title: "Packages & Memberships",
        subtitle: "Series and monthly benefits with clear timelines and terms.",
        icon: "🎁",
        body: (
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-brand-forest">Service Packages</h3>
 
              <TextBlock>
                <p>
                  Packages must be used within <span className="font-medium">6 months</span> of purchase unless otherwise stated. Unused sessions after the expiration period are forfeited.
                </p>
 
                <RuleCallout>
                  Missed package appointments or changes made within 48 hours are
                  charged a{" "}
                  <span className="font-medium">$100 missed appointment fee</span>.
                </RuleCallout>
 
                <p className="text-slate-600">
                  Package sessions are not forfeited for missed appointments since the package has already been purchased.
                </p>
              </TextBlock>
            </div>
 
            <div className="border-t border-[var(--color-border)] pt-5 sm:pt-6">
              <h3 className="text-sm font-semibold text-brand-forest">Memberships</h3>
 
              <TextBlock>
                <p>
                  Memberships are billed monthly and are non-refundable and non-transferable. Benefits apply only during the active billing month unless otherwise stated at enrollment.
                </p>
 
                <RuleCallout>
                  Missed membership appointments follow the standard cancellation
                  and no-show policies above.
                </RuleCallout>
 
                <p className="text-slate-600">
                  Memberships may be paused once per year for up to 3 months, subject to approval. Specific details and inclusions are provided at enrollment.
                </p>
              </TextBlock>
            </div>
          </div>
        ),
      },
      {
        title: "Lash Policies",
        subtitle: "Fill timing, foreign fills, and lash-fix guidelines.",
        icon: "👁️",
        body: (
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-brand-forest">Lash Fill Policy</h3>
 
              <TextBlock>
                <p>
                  Fills must be booked within{" "}
                  <span className="font-medium">3 weeks</span> of your last fill.
                  After 3 weeks, please book a Full Set.
                </p>
 
                <RuleCallout>
                  If you arrive for a fill after 3 weeks, your service will be
                  changed to a Full Set and may need to be rescheduled if time does
                  not allow.
                </RuleCallout>
 
                <p className="text-slate-600">
                  Foreign fills are accepted for an additional{" "}
                  <span className="font-medium">$20</span>. Our lash specialist will
                  evaluate your extensions first. If they are unworkable, a removal
                  and Full Set may be recommended.
                </p>
              </TextBlock>
            </div>
 
            <div className="border-t border-[var(--color-border)] pt-5 sm:pt-6">
              <h3 className="text-sm font-semibold text-brand-forest">Lash Fix Policy</h3>
 
              <TextBlock>
                <p>
                  If you have any issue with your lash extensions, contact us within{" "}
                  <span className="font-medium">5 days</span> of your appointment so we can assess and fix it.
                </p>
 
                <RuleCallout>
                  Concerns reported after 5 days are treated as a new service and charged accordingly.
                </RuleCallout>
              </TextBlock>
            </div>
          </div>
        ),
      },
      {
        title: "Disputes & Chargebacks",
        subtitle: "Clear expectations to prevent misunderstandings.",
        icon: "🧾",
        body: (
          <TextBlock>
            <p>All services rendered are final.</p>
 
            <RuleCallout>
              Every booking records your agreement to these policies. If you
              dispute a charge for a service you received or a fee covered by this
              policy, we will provide that booking record to your card issuer.
            </RuleCallout>
 
            <p className="text-slate-600">
              Clients who file chargebacks for services received or agreed-upon
              fees may be refused future services, and any memberships or packages
              may be canceled.
            </p>
          </TextBlock>
        ),
      },
      {
        title: "Guest Etiquette",
        subtitle: "A calm, respectful environment for everyone.",
        icon: "🌿",
        body: (
          <div className="space-y-5">
            <TextBlock>
              <p>
                Please arrive prepared for your scheduled appointment time and silence phones when possible. Disruptive, disrespectful, or abusive behavior will not be tolerated.
              </p>
 
              <p className="text-slate-600">T Beauty Lounge reserves the right to refuse service.</p>
            </TextBlock>
 
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-3 sm:p-4">
              <h3 className="text-sm font-semibold text-brand-forest">Children at Appointments</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-700 sm:text-sm">
                Children may not accompany guests during services. Our staff and
                facility are not equipped to supervise children, and this keeps the
                space relaxing and lets your provider focus fully on you.
              </p>
 
              <div className="mt-3 space-y-2 text-[13px] leading-relaxed text-slate-700 sm:text-sm">
                <p>
                  If a guest arrives with a child, the appointment may be canceled
                  or rescheduled, and the late cancellation policy will apply.
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
    []
  );
 
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="mx-auto w-[92%] max-w-6xl py-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[380px_1fr] lg:items-start">
          {/* LEFT: stacks on mobile, sticky on desktop */}
          <div className="space-y-4 lg:sticky lg:top-24">
            <ImageCard />
          </div>
 
          {/* RIGHT */}
          <div>
            <div className="space-y-4">
              {sections.map((s, idx) => (
                <SectionAccordion
                  key={s.title}
                  title={s.title}
                  subtitle={s.subtitle}
                  icon={s.icon}
                  defaultOpen={idx === 0}
                >
                  {s.body}
                </SectionAccordion>
              ))}
            </div>
 
            <div className="mt-6 sm:mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-6">
              <h2 className="text-base font-semibold text-brand-forest">Questions?</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-700 sm:text-sm">
                If you have questions regarding these policies, please contact us at{" "}
                <span className="font-medium">623-213-8996</span> prior to booking.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                By booking an appointment at T Beauty Lounge, you acknowledge and agree to these policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 