export default function Footer() {
  const contactDetails = [
    { label: "Email", value: "info@dcreate.com", href: "mailto:info@dcreate.com" },
    { label: "Phone", value: "+94 72 553 5525", href: "tel:+94725535525" },
    { label: "Location", value: "123 Street, City", href: "#" },
  ];

  return (
    <footer className="relative font-sans overflow-hidden bg-black pt-6 text-white border-t border-white/10">

      <div className="relative mx-auto w-[95%] max-w-7xl">

        {/* MAIN SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-16">
          
          {/* LEFT: Brand */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-neutral-700"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
                Studio Philosophy
              </span>
            </div>

            <h2 className="text-5xl sm:text-4xl font-bold font-sans tracking-tighter mb-4 leading-[0.85] text-[#f5f5f7]">
              Building polished digital products with clarity, speed, and precision<span className="text-blue-500">.</span>
          </h2>
            

            <p className="mt-6 text-base text-neutral-500 leading-relaxed">
              Designing intentional experiences from first interaction to final click,
              focusing on professional execution and long-term scalability.
            </p>
          </div>

          {/* RIGHT: Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-6">
            {contactDetails.map((item) => (
              <div key={item.label} className="group">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-1">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  className="text-base text-neutral-300 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 inline-block"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 border-t border-white/5 gap-4">

          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-neutral-300">
            <p>© 2026 D Create</p>
            <span className="h-3 w-[1px] bg-neutral-400"></span>
            <p>All Rights Reserved</p>
          </div>

          <div className="flex items-center gap-6">
            {["Design", "Build", "Launch"].map((text) => (
              <span
                key={text}
                className="text-[15px] font-bold uppercase tracking-[0.2em] text-neutral-200 hover:text-white transition"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* BIG TEXT */}
        <div className="border-t border-white/10 pt-2 mt-1 text-center overflow-hidden">
          <p className="text-[90px] sm:text-[120px] md:text-[110px] lg:text-[310px] md:text-[7rem] font-sans font-bold tracking-tighter mb-8 leading-[0.85] bg-gradient-to-b from-blue-600 via-sky-500 to-black text-transparent bg-clip-text select-none">
            D-Create
          </p>
        </div>

      </div>
    </footer>
  );
}