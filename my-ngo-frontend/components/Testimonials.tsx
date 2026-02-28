import ClientImage from "@/components/ClientImage";
import type { TestimonialsData } from "@/lib/types";
import { resolveImageUrl } from "@/lib/api";
import defaults from "@/lib/defaults";

export default function Testimonials({ data = defaults.testimonials }: { data?: TestimonialsData }) {
  return (
    <section className="bg-navy py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-1 h-10 bg-orange" />
          <div>
            <p className="text-orange text-xs font-black uppercase tracking-[0.3em]">
              {data.sectionLabel}
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mt-1">
              {data.sectionTitle}
            </h2>
          </div>
        </div>

        {/* Featured quote — solid white block */}
        <div className="bg-white p-10 md:p-14 mb-0.5">
          <div className="text-orange text-7xl font-black leading-none mb-4 select-none">&ldquo;</div>
          <blockquote className="text-navy text-lg md:text-xl font-bold leading-relaxed max-w-3xl uppercase tracking-tight">
            {data.featuredQuote}
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-8 h-px bg-orange" />
            <div>
              <p className="text-navy font-black text-xs uppercase tracking-widest">
                {data.featuredAuthor}
              </p>
              <p className="text-slate-muted text-xs uppercase tracking-widest mt-0.5">
                {data.featuredRole}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial cards — solid white panels separated by 2px navy gap */}
        {data.items.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-0.5 bg-navy mt-0.5">
            {data.items.map((t, i) => {
              const imgSrc = resolveImageUrl(t.image);
              const initial = t.name.charAt(0).toUpperCase();
              const fallback = `https://placehold.co/56x56/0d2a6e/ffffff?text=${initial}`;
              return (
                <div key={i} className="bg-white p-8 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-navy overflow-hidden shrink-0">
                      <ClientImage
                        src={imgSrc}
                        alt={t.name}
                        fallback={fallback}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-black text-navy text-xs uppercase tracking-wide">{t.name}</p>
                      <p className="text-orange text-xs font-bold uppercase tracking-widest mt-0.5">{t.role}</p>
                    </div>
                  </div>
                  <div className="w-6 h-px bg-orange" />
                  <p className="text-navy text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-slate-300 text-sm mt-4">Testimonials are currently unavailable.</p>
        )}

      </div>
    </section>
  );
}
