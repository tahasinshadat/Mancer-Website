export function CredibilitySection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-black/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-black/40 uppercase tracking-wider mb-6">Research-Driven Innovation</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-snug tracking-tight">
          As InnovBot, this technology received over $3M in NSF funding to advance robotic inspection research.
        </h2>
        <p className="mt-6 text-black/60 max-w-2xl mx-auto">
          Government-backed R&D. Peer-reviewed methodologies. Proven in the field across energy, transportation, and
          manufacturing sectors.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="w-16 h-1 bg-accent" />
        </div>
      </div>
    </section>
  )
}
