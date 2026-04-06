
export default function Footer() {
  const contactDetails = [
    { label: "Email", value: "info@dcreate.com", href: "mailto:info@dcreate.com" },
    { label: "Phone", value: "+94 72 553 5525", href: "tel:+94725535525" },
    { label: "Location", value: "123 Street, City", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-black pt-16 text-white border-t border-amber-50/20">

      <div className="relative mx-auto w-[95%] max-w-[1420px]">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: About Section */}
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

          {/* Right: Contact Details */}
          <div className="flex flex-col justify-start gap-6 lg:items-end lg:text-right">
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Get in Touch
              </p>
              <ul className="space-y-5">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex flex-col lg:items-end">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50 mb-2">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className="text-base text-slate-200 transition hover:text-white font-medium"
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
          <p>© 2026 D Create. All rights reserved.</p>
          <p className="tracking-[0.18em] uppercase text-white/60">Design. Build. Launch.</p>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <div className="mx-auto overflow-hidden [height:12.5em]">
            <p
              className="text-[290px] font-semibold leading-none tracking-[0.004em] text-white "
              
            >
              D-Creates
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}