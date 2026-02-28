import ClientImage from "@/components/ClientImage";
import type { BoardData } from "@/lib/types";
import { resolveImageUrl } from "@/lib/api";
import defaults from "@/lib/defaults";

export default function BoardOfTrustees({ data = defaults.board }: { data?: BoardData }) {
  return (
    <section id="board" className="bg-off-white py-24 px-6 lg:px-10">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0.5 bg-navy">
          {data.members.map((member, i) => {
            const imgSrc = resolveImageUrl(member.image);
            const initials = member.name
              .split(" ")
              .filter((w) => w.length > 1)
              .map((w) => w[0])
              .join("")
              .slice(0, 2);
            const fallback = `https://placehold.co/160x160/0d2a6e/ffffff?text=${initials}`;
            return (
              <div key={i} className="bg-off-white flex flex-col items-center text-center p-6">
                <div className="w-20 h-20 bg-navy overflow-hidden mb-4">
                  <ClientImage
                    src={imgSrc}
                    alt={member.name}
                    fallback={fallback}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-px bg-orange mb-3" />
                <p className="text-navy font-black text-xs uppercase tracking-wide leading-tight">
                  {member.name}
                </p>
                <p className="text-orange text-xs font-bold uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
