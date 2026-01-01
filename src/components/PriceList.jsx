import { useState } from "react";

/**
 * PriceList
 * - title: heading for the list (e.g. "Eyelash Extensions")
 * - items: array of service rows with
 *   {
 *     id: string,
 *     name: string,
 *     short: string,    // 1-line teaser under the name
 *     details: {
 *       fullSet?: { label?: string, price: string, duration?: string },
 *       fill2w?:  { label?: string, price: string, duration?: string },
 *       fill3w?:  { label?: string, price: string, duration?: string },
 *       notes?: string   // any extra guidance / policies
 *     }
 *   }
 */
export default function PriceList({ title, items = [] }) {
  return (
    <section className="mt-6 rounded-[--radius-card] bg-white ring-1 ring-black/5">
      {title && (
        <header className="border-b border-black/5 px-5 py-4 md:px-6">
          <h3 className="text-lg font-semibold text-brand-forest">{title}</h3>
        </header>
      )}

      <ul className="divide-y divide-black/5">
        {items.map((it) => (
          <li key={it.id}>
            <PriceRow item={it} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function PriceRow({ item }) {
  const [open, setOpen] = useState(false);
  const { name, short, details } = item || {};

  return (
    <div className="group">
      {/* summary row */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left md:px-6"
      >
        <div>
          <div className="text-brand-forest font-medium">{name}</div>
          {short && (
            <p className="text-sm text-brand-forest/75">{short}</p>
          )}
        </div>

        {/* plus -> minus via rotate */}
        <span
          className={`inline-grid h-6 w-6 place-items-center rounded-full border border-brand-forest/50 text-brand-forest transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* details panel (animated height) */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-90"
        }`}
      >
        <div className="min-h-0">
          <div className="px-5 pb-5 pt-0 md:px-6">
            <div className="rounded-[--radius-card] bg-brand-mint/40 p-4 md:p-5">
              <dl className="grid gap-3 md:grid-cols-3">
                {details?.fullSet && (
                  <PriceCell
                    title={details.fullSet.label ?? "Full Set"}
                    price={details.fullSet.price}
                    duration={details.fullSet.duration}
                  />
                )}
                {details?.fill2w && (
                  <PriceCell
                    title={details.fill2w.label ?? "2-Week Fill"}
                    price={details.fill2w.price}
                    duration={details.fill2w.duration}
                  />
                )}
                {details?.fill3w && (
                  <PriceCell
                    title={details.fill3w.label ?? "3-Week Fill"}
                    price={details.fill3w.price}
                    duration={details.fill3w.duration}
                  />
                )}
              </dl>

              {details?.notes && (
                <p className="mt-3 text-xs text-brand-forest/75">
                  {details.notes}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceCell({ title, price, duration }) {
  return (
    <div className="rounded-lg bg-white p-3 ring-1 ring-brand-forest/10">
      <dt className="text-sm font-medium text-brand-forest">{title}</dt>
      <dd className="mt-1">
        <div className="text-lg font-semibold text-brand-forest">{price}</div>
        {duration && (
          <div className="text-xs text-brand-forest/70">{duration}</div>
        )}
      </dd>
    </div>
  );
}
