"use client"

const partners = ["Energy", "Transportation", "Manufacturing", "Defense", "Utilities", "Government"]

export function PartnersSection() {
  return (
    <section className="py-12 bg-black/95 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-white/40 uppercase tracking-wider mb-6">Serving Critical Sectors</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <span key={partner} className="text-sm font-medium text-white/30 uppercase tracking-wider">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
