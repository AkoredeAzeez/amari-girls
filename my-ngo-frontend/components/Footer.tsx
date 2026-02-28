import type { FooterData } from "@/lib/types";
import defaults from "@/lib/defaults";

export default function Footer({ data = defaults.footer }: { data?: FooterData }) {
  return (
    <footer className="bg-navy-dark">
      <div className="h-1 bg-orange w-full" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-orange flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-tighter">{data.logoText}</span>
              </div>
              <p className="text-white font-black text-xs uppercase tracking-widest leading-tight">
                {data.orgNameLine1} <br /> {data.orgNameLine2}
              </p>
            </div>
            <p className="text-slate-muted text-xs leading-relaxed uppercase tracking-wide">
              {data.brandDescription}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-orange font-black uppercase tracking-[0.3em] text-xs mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {data.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-muted hover:text-orange text-xs font-bold uppercase tracking-widest transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-orange font-black uppercase tracking-[0.3em] text-xs mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wide">
              <li>
                <span className="text-orange font-black">Phone </span>
                <span className="text-slate-muted">{data.phone}</span>
              </li>
              <li>
                <span className="text-orange font-black">Email </span>
                <span className="text-slate-muted">{data.email}</span>
              </li>
              <li>
                <span className="text-orange font-black">Location </span>
                <span className="text-slate-muted">{data.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-navy flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-muted text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {data.copyrightOrg}
          </p>
          <p className="text-slate-muted text-xs uppercase tracking-widest">
            {data.registrationNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
