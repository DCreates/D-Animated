import { NAV_LINKS } from "../utils/constants.js";

const FOOTER_LINKS = [
  {
    title: "Navigate",
    links: NAV_LINKS,
  },
  {
    title: "Contact",
    links: [
      { label: "info@dcreate.com", href: "mailto:info@dcreate.com" },
      { label: "+123 456 7890", href: "tel:+1234567890" },
      { label: "123 Street, City", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-16 text-white border-t border-amber-50/20">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.1),transparent_30%)]" /> */}

      <div className="relative mx-auto w-[95%] max-w-[1420px]">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
              D Create Studio
            </p>
            <p className="text-xl font-bold leading-tight tracking-tight md:text-xl">
              Building polished digital products with clarity, speed, and precision.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              We design experiences that feel intentional from the first interaction to the final click, with a focus on professional execution and long-term scalability.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href || `#${link.id}`}
                        className="transition hover:text-white"
                        onClick={(event) => {
                          if (link.id) {
                            event.preventDefault();
                            const target = document.getElementById(link.id);
                            target?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
          <p>© 2026 D Create. All rights reserved.</p>
          <p className="tracking-[0.18em] uppercase text-white/60">Design. Build. Launch.</p>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <div className="mx-auto overflow-hidden [height:3.5em]">
            <p
              className="text-10xl font-semibold leading-none tracking-[0.24em] text-white sm:text-6xl md:text-7xl"
              style={{
                textShadow:
                  "0 0 8px rgba(255,255,255,0.65), 0 0 24px rgba(59,130,246,0.35)",
              }}
            >
              D- Creates
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}