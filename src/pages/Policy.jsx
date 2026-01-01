import { useMemo, useState } from "react";

function SectionAccordion({
  title,
  subtitle,
  icon,
  children,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-5 py-4 flex items-start justify-between gap-4 text-left hover:bg-[var(--color-surface-2)]"
        aria-expanded={open}
      >
        <div className="flex gap-3">
          {icon ? (
            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
              <span className="text-base">{icon}</span>
            </span>
          ) : null}

          <div>
            <h2 className="text-base md:text-lg font-semibold text-brand-forest">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-1 text-sm text-brand-forest/70">{subtitle}</p>
            ) : null}
          </div>
        </div>

        <span
          className={`mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="px-5 pb-5">{children}</div>
        </div>
      </div>
    </section>
  );
}

function RuleCallout({ children }) {
  return (
    <div className="rounded-xl bg-[var(--color-surface-2)] p-4 border border-[var(--color-border)]">
      <p className="text-sm text-slate-700">{children}</p>
    </div>
  );
}

function TextBlock({ children }) {
  return <div className="space-y-3 text-sm text-slate-700">{children}</div>;
}

function ImageCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="relative">
        <img
          src="/images/policies-spa.png"
          alt="Relaxing spa environment at T Beauty Lounge"
          className="h-56 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/35" />
      </div>

      <div className="p-6">
        <p className="text-xs tracking-[0.22em] text-brand-forest/70">
          T BEAUTY LOUNGE
        </p>
        <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-brand-forest leading-tight">
          Spa Policies & Etiquette
        </h1>
        <p className="mt-3 text-sm text-slate-700">
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
              A valid card on file is required to secure all appointments. Your
              time is reserved specifically for you and your provider.
            </p>

            <RuleCallout>
              If the card on file is declined, you’ll be invoiced and the balance
              must be resolved before booking future appointments.
            </RuleCallout>
          </TextBlock>
        ),
      },

      {
        title: "Cancellations, Late Arrivals & No-Shows",
        subtitle:
          "Policies that protect reserved time and keep the day on schedule.",
        icon: "⏰",
        body: (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-brand-forest">
                Cancellation & Rescheduling
              </h3>

              <TextBlock>
                <p>
                  We require{" "}
                  <span className="font-medium">at least 24 hours’ notice</span>{" "}
                  to cancel or reschedule an appointment.
                </p>

                <RuleCallout>
                  Changes made within 24 hours incur a{" "}
                  <span className="font-medium">25% cancellation fee</span>,
                  regardless of reason.
                </RuleCallout>

                <p className="text-slate-600">
                  This fee helps cover the time reserved and preparation
                  completed for your service.
                </p>
              </TextBlock>
            </div>

            <div className="border-t border-[var(--color-border)] pt-6">
              <h3 className="text-sm font-semibold text-brand-forest">
                Late Arrival
              </h3>

              <TextBlock>
                <p>
                  We allow a{" "}
                  <span className="font-medium">strict 5-minute grace period</span>
                  . To ensure every guest receives their full booked time, we do
                  not shorten services.
                </p>

                <RuleCallout>
                  Arriving more than 5 minutes late will result in your
                  appointment being canceled, and a{" "}
                  <span className="font-medium">25% late-cancellation fee</span>{" "}
                  will apply.
                </RuleCallout>

                <p className="text-slate-600">
                  If you arrive after cancellation, we can reschedule you for a
                  future date based on availability.
                </p>
              </TextBlock>
            </div>

            <div className="border-t border-[var(--color-border)] pt-6">
              <h3 className="text-sm font-semibold text-brand-forest">No-Show</h3>

              <TextBlock>
                <p>
                  A <span className="font-medium">no-show</span> is missing your
                  appointment without notice.
                </p>

                <RuleCallout>
                  No-shows are charged a{" "}
                  <span className="font-medium">$50 no-show fee</span>. This fee
                  is non-refundable.
                </RuleCallout>

                <p className="text-slate-600">
                  Repeated no-shows may result in booking restrictions or
                  prepayment requirements.
                </p>
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
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-brand-forest">
                Service Packages
              </h3>

              <TextBlock>
                <p>
                  Packages must be used within{" "}
                  <span className="font-medium">6 months</span> of purchase unless
                  otherwise stated. Unused sessions after the expiration period
                  are forfeited.
                </p>

                <RuleCallout>
                  Missed package appointments or changes within 24 hours incur a{" "}
                  <span className="font-medium">$100 missed appointment fee</span>.
                </RuleCallout>

                <p className="text-slate-600">
                  Package sessions are not forfeited for missed appointments
                  since the package has already been purchased.
                </p>
              </TextBlock>
            </div>

            <div className="border-t border-[var(--color-border)] pt-6">
              <h3 className="text-sm font-semibold text-brand-forest">
                Memberships
              </h3>

              <TextBlock>
                <p>
                  Memberships are billed monthly and are non-refundable and
                  non-transferable. Benefits apply only during the active billing
                  month unless otherwise stated at enrollment.
                </p>

                <RuleCallout>
                  Missed membership appointments still follow the standard
                  cancellation and no-show policies.
                </RuleCallout>

                <p className="text-slate-600">
                  Memberships may be paused once per year for up to 3 months,
                  subject to approval. Specific details and inclusions are
                  provided at enrollment.
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
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-brand-forest">
                Lash Fill Policy
              </h3>

              <TextBlock>
                <p>
                  Foreign fills are accepted with an additional{" "}
                  <span className="font-medium">$20 fee</span>. If existing
                  extensions are deemed unworkable, a removal and full set may be
                  recommended.
                </p>

                <RuleCallout>
                  Fills scheduled after <span className="font-medium">3 weeks</span>{" "}
                  from your previous appointment are considered a full set.
                </RuleCallout>
              </TextBlock>
            </div>

            <div className="border-t border-[var(--color-border)] pt-6">
              <h3 className="text-sm font-semibold text-brand-forest">
                Lash Fix Policy
              </h3>

              <TextBlock>
                <p>
                  If you have concerns, please reach out within{" "}
                  <span className="font-medium">5 days</span> of your appointment
                  so we can help.
                </p>

                <RuleCallout>
                  Concerns reported after 5 days are treated as a new service and
                  charged accordingly.
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
              By booking, clients agree not to dispute or reverse charges
              (“chargebacks”) for services or fees agreed to at booking.
            </RuleCallout>

            <p className="text-slate-600">
              Unauthorized chargebacks may result in refusal of future services,
              revocation of memberships/packages, and additional action if
              necessary.
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
                Please arrive prepared for your scheduled appointment time and
                silence phones when possible. Disruptive, disrespectful, or
                abusive behavior will not be tolerated.
              </p>

              <p className="text-slate-600">
                T Beauty Lounge reserves the right to refuse service.
              </p>
            </TextBlock>

            <div className="rounded-xl bg-[var(--color-surface-2)] p-4 border border-[var(--color-border)]">
              <h3 className="text-sm font-semibold text-brand-forest">
                Children at Appointments
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                To ensure a relaxing environment and allow our providers to focus
                fully on your service, we kindly ask that you refrain from
                bringing children to your appointment.
              </p>

              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <p>
                  Our staff and facility are not equipped to supervise or
                  accommodate children. For safety, insurance, and quality-of-care
                  reasons, children may not accompany guests during services.
                </p>
                <p>
                  If a guest arrives with a child, the appointment may be canceled
                  or rescheduled, and standard cancellation policies will apply.
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
      <div className="mx-auto w-11/12 max-w-6xl py-10">
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          {/* LEFT */}
          <div className="space-y-4">
            <ImageCard />
          </div>

          {/* RIGHT */}
          <div>
            <div className="mt-2 space-y-4">
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

            <div className="mt-8 rounded-2xl bg-[var(--color-surface)] p-6 border border-[var(--color-border)]">
              <h2 className="text-base font-semibold text-brand-forest">
                Questions?
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                If you have questions regarding these policies, please contact us
                at <span className="font-medium">623-213-8996</span> prior to
                booking.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                By booking an appointment at T Beauty Lounge, you acknowledge and
                agree to these policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
