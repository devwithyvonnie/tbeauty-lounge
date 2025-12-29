import { useMemo, useState } from 'react';

function SectionAccordion({ title, subtitle, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="rounded-2xl bg-white/80 ring-1 ring-black/5 shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-5 py-4 flex items-start justify-between gap-4 text-left hover:bg-black/[0.02]"
        aria-expanded={open}
      >
        <div>
          <h2 className="text-base md:text-lg font-semibold text-brand-forest">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-brand-forest/70">{subtitle}</p>
          ) : null}
        </div>

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
        <div className="min-h-0">
          <div className="px-5 pb-5">{children}</div>
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 text-sm text-brand-forest/85">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-brand-forest/50" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PolicyPage() {
  const sections = useMemo(
  () => [
    {
      title: "Booking & Payments",
      subtitle: "How appointments are secured and how balances are handled.",
      body: (
        <BulletList
          items={[
            "A valid card on file is required to secure all appointments.",
            "Appointments are reserved specifically for you and your provider.",
            "If your payment method on file is declined, you will be invoiced and must resolve the balance before booking any future appointments.",
          ]}
        />
      ),
    },

    {
      title: "Cancellations, Late Arrivals & No-Shows",
      subtitle: "Policies that protect reserved time and keep the day on schedule.",
      body: (
        <div className="space-y-5">
          {/* Cancellation */}
          <div>
            <h3 className="text-sm font-semibold text-brand-forest">
              Cancellation & Rescheduling
            </h3>
            <p className="mt-2 text-sm text-brand-forest/85">
              We require{" "}
              <span className="font-medium">at least 24 hours’ notice</span> to
              cancel or reschedule an appointment.
            </p>
            <div className="mt-3">
              <BulletList
                items={[
                  "Cancellations or reschedules made within 24 hours will incur a 25% cancellation fee, regardless of reason.",
                  "This fee helps cover the time reserved and preparation completed for your service.",
                ]}
              />
            </div>
          </div>

          {/* Late */}
          <div className="border-t border-black/5 pt-5">
            <h3 className="text-sm font-semibold text-brand-forest">
              Late Arrival
            </h3>
            <p className="mt-2 text-sm text-brand-forest/85">
              We allow a{" "}
              <span className="font-medium">strict 5-minute grace period</span>.
            </p>
            <div className="mt-3">
              <BulletList
                items={[
                  "If you arrive more than 5 minutes late, your appointment will be canceled.",
                  "We do not shorten services, as we believe every guest deserves the full time they booked.",
                  "If you arrive after your appointment has been canceled, we’re happy to offer a reschedule for a future date, subject to availability.",
                  "A 25% late-cancellation fee will still apply.",
                ]}
              />
            </div>
          </div>

          {/* No-show */}
          <div className="border-t border-black/5 pt-5">
            <h3 className="text-sm font-semibold text-brand-forest">
              No-Show
            </h3>
            <p className="mt-2 text-sm text-brand-forest/85">
              A <span className="font-medium">no-show</span> is missing your
              appointment without notice.
            </p>
            <div className="mt-3">
              <BulletList
                items={[
                  "No-shows will be charged a $50 no-show fee.",
                  "This fee is non-refundable and covers the time reserved for your provider.",
                  "Repeated no-shows may result in booking restrictions or prepayment requirements.",
                ]}
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Packages & Memberships",
      subtitle: "Series and monthly benefits with clear timelines and terms.",
      body: (
        <div className="space-y-5">
          {/* Packages */}
          <div>
            <h3 className="text-sm font-semibold text-brand-forest">
              Service Packages
            </h3>
            <div className="mt-3">
              <BulletList
                items={[
                  "Packages must be used within 6 months of purchase unless otherwise stated.",
                  "If a package appointment is missed or canceled within 24 hours, a $100 missed appointment fee will be charged.",
                  "Package sessions are not forfeited for missed appointments, since the package has already been purchased.",
                  "Unused sessions remaining after the 6-month period will be forfeited.",
                ]}
              />
            </div>
          </div>

          {/* Memberships */}
          <div className="border-t border-black/5 pt-5">
            <h3 className="text-sm font-semibold text-brand-forest">
              Memberships
            </h3>
            <div className="mt-3">
              <BulletList
                items={[
                  "Memberships are billed monthly and are non-refundable and non-transferable.",
                  "Membership services and discounts apply only within the active billing month unless otherwise stated.",
                  "Missed membership appointments are subject to the standard cancellation and no-show policies.",
                  "Membership benefits do not roll over unless explicitly stated at enrollment.",
                  "Memberships may be paused once per year for up to 3 months, subject to approval.",
                  "Specific membership details, inclusions, and terms are provided at enrollment.",
                ]}
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Lash Policies",
      subtitle: "Fill timing, foreign fills, and lash-fix guidelines.",
      body: (
        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold text-brand-forest">
              Lash Fill Policy
            </h3>
            <div className="mt-3">
              <BulletList
                items={[
                  "Foreign fills are accepted for an additional $20 fee.",
                  "If existing extensions are deemed unworkable, a removal and full set will be recommended.",
                  "Lash fills scheduled after 3 weeks from the previous appointment will be considered a full set.",
                ]}
              />
            </div>
          </div>

          <div className="border-t border-black/5 pt-5">
            <h3 className="text-sm font-semibold text-brand-forest">
              Lash Fix Policy
            </h3>
            <div className="mt-3">
              <BulletList
                items={[
                  "Concerns must be reported within 5 days of your appointment.",
                  "Concerns reported after this window will be treated as a new service and charged accordingly.",
                ]}
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Disputes & Chargebacks",
      subtitle: "Clear expectations to prevent misunderstandings.",
      body: (
        <BulletList
          items={[
            "All services rendered are final.",
            "By booking, clients agree not to dispute or reverse charges (“chargebacks”) for services or fees agreed to at booking.",
            "Unauthorized chargebacks may result in refusal of future services, revocation of memberships/packages, and additional action if necessary.",
          ]}
        />
      ),
    },

    {
      title: "Guest Etiquette",
      subtitle: "A calm, respectful environment for everyone.",
      body: (
        <ul className="space-y-2 text-sm text-brand-forest/85">
          <li className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-forest/50" />
            <span>
              Please arrive prepared for your scheduled appointment time and
              silence phones when possible.
            </span>
          </li>

          <li className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-forest/50" />
            <span>
              Disruptive, disrespectful, or abusive behavior will not be tolerated.
            </span>
          </li>

          <li className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-forest/50" />
            <span>T Beauty Lounge reserves the right to refuse service.</span>
          </li>

          {/* Parent bullet */}
          <li className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-forest/50" />
            <span>
              To ensure a relaxing environment and allow our providers to focus fully
              on your service, we kindly ask that you refrain from bringing children
              to your appointment.
            </span>
          </li>

          {/* Nested bullets */}
          <ul className="ml-6 mt-1 space-y-1 border-l border-brand-forest/15 pl-4">
            <li className="text-sm text-brand-forest/75">
              • Our staff and facility are not equipped to supervise or accommodate
              children. For safety, insurance, and quality-of-care reasons, children
              may not accompany guests during services.
            </li>
            <li className="text-sm text-brand-forest/75">
              • If a guest arrives with a child, the appointment may be canceled or
              rescheduled, and standard cancellation policies will apply.
            </li>
          </ul>
        </ul>
      ),
    },
  ],
  []
);

  return (
    <div className="mx-auto w-11/12 max-w-5xl py-10">
      {/* HERO */}
      <header className="rounded-3xl bg-brand-cream/70 p-6 md:p-10 ring-1 ring-black/5">
        <p className="text-sm tracking-[0.25em] text-brand-forest/70">
          SPA POLICIES & ETIQUETTE
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-brand-forest leading-tight">
          Spa Policies & Etiquette
        </h1>
        <p className="mt-4 max-w-2xl text-brand-forest/85">
          Your appointment is reserved just for you. These policies help protect
          your time, your provider’s time, and the experience of every guest.
        </p>
      </header>

      {/* ACCORDIONS */}
      <div className="mt-8 space-y-4">
        {sections.map((s, idx) => (
          <SectionAccordion
            key={s.title}
            title={s.title}
            subtitle={s.subtitle}
            defaultOpen={idx === 0}
          >
            {s.body}
          </SectionAccordion>
        ))}
      </div>

      {/* CONTACT */}
      <div className="mt-8 rounded-2xl bg-white/80 p-6 ring-1 ring-black/5">
        <h2 className="text-base font-semibold text-brand-forest">
          Questions?
        </h2>
        <p className="mt-2 text-sm text-brand-forest/85">
          If you have questions regarding these policies, please contact us at{' '}
          <span className="font-medium">623-213-8996</span> prior to booking.
        </p>
        <p className="mt-3 text-xs text-brand-forest/65">
          By booking an appointment at T Beauty Lounge, you acknowledge and
          agree to these policies.
        </p>
      </div>
    </div>
  );
}
