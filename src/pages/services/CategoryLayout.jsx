export default function CategoryLayout({ eyebrow, title, image, children }) {
  return (
    <div className="mx-auto w-11/12 max-w-6xl py-8">
      {/* Breadcrumbs */}
      <nav className="mb-3 text-sm text-brand-forest/70">
        <a href="/services" className="hover:underline">Services</a>
        <span className="mx-2">/</span>
        <span className="text-brand-forest">{title}</span>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-[--radius-card]">
        <img src={image} alt={title} className="h-[36vh] w-full object-cover md:h-[44vh]" />
        <div className="absolute inset-0 bg-brand-cream/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-11/12 max-w-4xl">
            {eyebrow && <p className="text-sm tracking-widest text-brand-forest/70">{eyebrow}</p>}
            <h1 className="text-4xl font-semibold text-brand-forest md:text-5xl">{title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mt-6">{children}</div>
    </div>
  );
}
