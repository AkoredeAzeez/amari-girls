import ClientImage from "@/components/ClientImage";
import type { GalleryData } from "@/lib/types";
import { resolveImageUrl } from "@/lib/api";
import defaults from "@/lib/defaults";

export default function Gallery({ data = defaults.gallery }: { data?: GalleryData }) {
  return (
    <section id="gallery" className="bg-off-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-1 h-10 bg-orange" />
          <div>
            <p className="text-orange text-xs font-black uppercase tracking-[0.3em]">
              {data.sectionLabel}
            </p>
            <h2 className="text-navy text-3xl md:text-4xl font-black uppercase tracking-tight mt-1">
              {data.sectionTitle}
            </h2>
          </div>
        </div>

        {/* Grid — sharp edges, 2px navy gap */}
        {data.images.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-0.5 bg-navy">
            {data.images.map((img, i) => {
              const src = resolveImageUrl(img.src);
              const fallback = `https://placehold.co/400x400/0d2a6e/ffffff?text=${String(i + 1).padStart(2, "0")}`;
              return (
                <div
                  key={i}
                  className="aspect-square bg-navy-dark overflow-hidden group cursor-pointer relative"
                >
                  <ClientImage
                    src={src}
                    alt={img.alt}
                    fallback={fallback}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay — solid orange top line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-navy text-sm">Gallery images are currently unavailable.</p>
        )}

      </div>
    </section>
  );
}
