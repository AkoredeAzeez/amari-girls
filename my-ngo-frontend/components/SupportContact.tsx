import type { ContactData } from "@/lib/types";
import defaults from "@/lib/defaults";

export default function SupportContact({ data = defaults.contact }: { data?: ContactData }) {
  return (
    <section id="contact" className="bg-navy py-24 px-6 lg:px-10">
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

        <div className="grid md:grid-cols-2 gap-0.5 bg-navy-dark">

          {/* Bank details */}
          <div className="bg-navy p-10 border-t-4 border-orange">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8">
              Donate / Bank Details
            </h3>

            <div className="divide-y divide-navy-dark">
              {[
                { label: "Bank", value: data.bank.bankName, big: false },
                { label: "Account Name", value: data.bank.accountName, big: false },
                { label: "Account Number", value: data.bank.accountNumber, big: true },
              ].map((row) => (
                <div key={row.label} className="py-5">
                  <p className="text-slate-muted text-xs uppercase tracking-widest font-bold mb-1">
                    {row.label}
                  </p>
                  <p className={`font-black ${row.big ? "text-orange text-2xl tracking-[0.2em]" : "text-white text-sm"}`}>
                    {row.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-slate-muted text-xs leading-relaxed uppercase tracking-wide">
              {data.donateNote}
            </p>
          </div>

          {/* Contact info */}
          <div className="bg-navy p-10 border-t-4 border-white">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8">
              Get in Touch
            </h3>

            <div className="space-y-7">
              <div>
                <p className="text-slate-muted text-xs uppercase tracking-widest font-bold mb-2">Phone</p>
                {data.phones.map((phone, i) => (
                  <p key={i} className={`text-orange font-black text-sm${i > 0 ? " mt-1" : ""}`}>{phone}</p>
                ))}
              </div>
              <div>
                <p className="text-slate-muted text-xs uppercase tracking-widest font-bold mb-2">Email</p>
                <p className="text-white font-black text-sm">{data.email}</p>
              </div>
              <div>
                <p className="text-slate-muted text-xs uppercase tracking-widest font-bold mb-2">Location</p>
                <p className="text-white font-black text-sm">{data.location}</p>
              </div>

              <div>
                <p className="text-slate-muted text-xs uppercase tracking-widest font-bold mb-4">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.socials.map((label) => (
                    <span
                      key={label}
                      className="bg-navy-dark text-white text-xs font-black uppercase tracking-widest px-4 py-2 hover:bg-orange cursor-pointer transition-colors duration-150"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
