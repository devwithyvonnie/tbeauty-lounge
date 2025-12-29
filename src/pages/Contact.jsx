// src/pages/Contact.jsx
import { useMemo, useState } from "react";

const SERVICES = [
  "Facials",
  "Injectables",
  "Laser",
  "Wellness",
  "Lashes",
  "PMU",
  "Wax & Tint",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    contactMethod: "Text",
    service: "Facials",
    bestTime: "",
    message: "",
    consent: false,
  });

  const mailtoHref = useMemo(() => {
    const subject = `T Beauty Lounge Inquiry — ${form.service}`;
    const lines = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Preferred Contact Method: ${form.contactMethod}`,
      `Service Interest: ${form.service}`,
      `Best Time to Reach You: ${form.bestTime}`,
      `Text Consent: ${form.consent ? "Yes" : "No"}`,
      "",
      "Message:",
      form.message,
    ];
    const body = lines.join("\n");
    return `mailto:tbeautyloungeaz@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const canSubmit =
    form.name.trim() &&
    (form.phone.trim() || form.email.trim()) &&
    form.message.trim() &&
    form.consent;

  return (
    <div className="mx-auto w-11/12 max-w-6xl py-8">
      {/* ===== HERO ===== */}
      <header className="rounded-[--radius-card] bg-brand-cream/70 p-6 md:p-10 ring-1 ring-black/5">
        <p className="text-sm tracking-[0.25em] text-brand-forest/70">
          CONTACT US
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-brand-forest leading-tight">
          We&apos;re here to help
        </h1>
        <p className="mt-4 max-w-2xl text-brand-forest/85">
          Have a question, need help choosing a service, or ready to book? Reach
          out anytime and our team will guide you.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://www.vagaro.com/tbeautylounge/book-now"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
          >
            Book on Vagaro
          </a>
          <a
            href="tel:6232138996"
            className="rounded-full border border-brand-forest/30 bg-white/60 px-6 py-2.5 text-sm text-brand-forest hover:bg-white"
          >
            Call 623-213-8996
          </a>
        </div>
      </header>

      {/* ===== INFO CARDS ===== */}
      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <InfoCard title="Call or Text">
          <a
            className="text-brand-forest underline underline-offset-4"
            href="tel:6232138996"
          >
            623-213-8996
          </a>
          <p className="mt-2 text-sm text-brand-forest/75">
            Fastest response during business hours.
          </p>
        </InfoCard>

        <InfoCard title="Email">
          <a
            className="text-brand-forest underline underline-offset-4 break-all"
            href="mailto:tbeautyloungeaz@gmail.com"
          >
            tbeautyloungeaz@gmail.com
          </a>
          <p className="mt-2 text-sm text-brand-forest/75">
            Perfect for detailed questions.
          </p>
        </InfoCard>

        <InfoCard title="Location">
          <p className="text-brand-forest/90">
            1375 N Litchfield Rd, Suite 103
            <br />
            Goodyear, AZ 85395
          </p>
          <a
            className="mt-2 inline-block text-sm text-brand-forest underline underline-offset-4"
            href="https://www.google.com/maps/search/?api=1&query=1375+N+Litchfield+Rd+Suite+103+Goodyear+AZ+85395"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </InfoCard>

        <InfoCard title="Hours">
          <ul className="space-y-1 text-sm text-brand-forest/85">
            <li>
              <span className="font-medium">Mon–Fri:</span> 9:30 AM – 7:00 PM
            </li>
            <li>
              <span className="font-medium">Saturday:</span> 9:30 AM – 6:00 PM
            </li>
            <li>
              <span className="font-medium">Sunday:</span> By appointment only
            </li>
          </ul>
        </InfoCard>
      </section>

      {/* ===== FORM + MAP ===== */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {/* FORM */}
        <div className="rounded-[--radius-card] bg-white p-6 md:p-8 shadow-sm ring-1 ring-black/5">
          <h2 className="text-xl font-semibold text-brand-forest">
            Send us a message
          </h2>
          <p className="mt-2 text-sm text-brand-forest/80">
            This form will open your email app and send your message to us. For
            fastest booking, use Vagaro.
          </p>

          <div className="mt-6 grid gap-4">
            <Field label="Name">
              <input
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                className="w-full rounded-xl bg-brand-cream/40 px-4 py-3 text-sm text-brand-forest outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-brand-forest/40"
                placeholder="Your name"
              />
            </Field>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Phone">
                <input
                  value={form.phone}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, phone: e.target.value }))
                  }
                  className="w-full rounded-xl bg-brand-cream/40 px-4 py-3 text-sm text-brand-forest outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-brand-forest/40"
                  placeholder="(###) ###-####"
                />
              </Field>

              <Field label="Email">
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                  className="w-full rounded-xl bg-brand-cream/40 px-4 py-3 text-sm text-brand-forest outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-brand-forest/40"
                  placeholder="you@email.com"
                />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Preferred contact method">
                <select
                  value={form.contactMethod}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, contactMethod: e.target.value }))
                  }
                  className="w-full rounded-xl bg-brand-cream/40 px-4 py-3 text-sm text-brand-forest outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-brand-forest/40"
                >
                  <option>Text</option>
                  <option>Call</option>
                  <option>Email</option>
                </select>
              </Field>

              <Field label="Service interest">
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, service: e.target.value }))
                  }
                  className="w-full rounded-xl bg-brand-cream/40 px-4 py-3 text-sm text-brand-forest outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-brand-forest/40"
                >
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Best time to reach you">
              <input
                value={form.bestTime}
                onChange={(e) =>
                  setForm((s) => ({ ...s, bestTime: e.target.value }))
                }
                className="w-full rounded-xl bg-brand-cream/40 px-4 py-3 text-sm text-brand-forest outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-brand-forest/40"
                placeholder="Ex: Weekdays after 3pm"
              />
            </Field>

            <Field label="Message">
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm((s) => ({ ...s, message: e.target.value }))
                }
                rows={5}
                className="w-full rounded-xl bg-brand-cream/40 px-4 py-3 text-sm text-brand-forest outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-brand-forest/40"
                placeholder="How can we help?"
              />
            </Field>

            <label className="flex items-start gap-3 text-sm text-brand-forest/85">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) =>
                  setForm((s) => ({ ...s, consent: e.target.checked }))
                }
                className="mt-1 h-4 w-4 rounded border-black/20"
              />
              <span>
                I agree to receive texts/calls from T Beauty Lounge regarding my
                inquiry. Message & data rates may apply.
              </span>
            </label>

            <a
              href={canSubmit ? mailtoHref : undefined}
              onClick={(e) => {
                if (!canSubmit) e.preventDefault();
              }}
              className={`mt-2 inline-flex justify-center rounded-full px-6 py-3 text-sm font-medium transition ${
                canSubmit
                  ? "bg-brand-forest text-white hover:brightness-110"
                  : "bg-black/10 text-black/40 cursor-not-allowed"
              }`}
            >
              Send Message
            </a>

            {!canSubmit && (
              <p className="text-xs text-brand-forest/70">
                Please enter your name, a message, and agree to text consent. Add
                phone or email so we can reply.
              </p>
            )}
          </div>

          {/* Social */}
          <div className="mt-6 flex items-center gap-4 text-sm text-brand-forest/85">
            <span className="text-brand-forest/70">Follow:</span>
            <a
              href="https://instagram.com/tbeautyloungeaz"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/tbeautyloungeaz"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* MAP */}
        <div className="rounded-[--radius-card] overflow-hidden bg-white shadow-sm ring-1 ring-black/5">
          <div className="p-5 md:p-6 border-b border-black/5">
            <h2 className="text-xl font-semibold text-brand-forest">Find us</h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              T Beauty Lounge — Goodyear, AZ
            </p>
          </div>

          <div className="aspect-[4/5] md:aspect-auto md:h-full">
            <iframe
              title="T Beauty Lounge Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              src="https://www.google.com/maps?q=1375%20N%20Litchfield%20Rd%20Suite%20103%20Goodyear%20AZ%2085395&output=embed"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------- small helpers (kept in same file) ------- */
function InfoCard({ title, children }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <h3 className="text-sm font-semibold tracking-wide text-brand-forest">
        {title}
      </h3>
      <div className="mt-2 text-sm">{children}</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs font-medium tracking-wide text-brand-forest/70">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
