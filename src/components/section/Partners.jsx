export default function Partners() {
  const logos = [
    "/logos/sedo.webp",
    "/logos/globus.png",
    "/logos/lenspro.png",
    "/logos/sedo.webp",
    "/logos/globus.png",
    "/logos/lenspro.png",
    "/logos/sedo.webp",
    "/logos/globus.png",
    "/logos/lenspro.png",
    "/logos/sedo.webp",
    "/logos/globus.png",
    "/logos/lenspro.png",
    
  ];

  return (
    <section className="bg-black px-4 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title - Top Center */}
        <div className="mb-6 flex justify-center">
          <h3 className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
            Trusted by our clients
          </h3>
        </div>

        {/* Main Container: Our Clients + Marquee */}
        <div className="flex items-center gap-2 lg:gap-12">
          {/* Left: "Our Clients" Text */}
          <div className="shrink-0">
            <h2 className="text-1xl md:text-2xl lg:text-4xl font-bold text-white/70 whitespace-nowrap">
              Our  Clients | 
            </h2>
          </div>

          {/* Right: Marquee */}
          <div className="flex-1 relative overflow-hidden">
            {/* ✅ LEFT FADE */}
            <div className="absolute left-0 top-0 h-full w-16 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />

            {/* ✅ RIGHT FADE */}
            <div className="absolute right-0 top-0 h-full w-16 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

            {/* Scrolling Logos */}
            <div className="flex w-max animate-scroll gap-8 items-center">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-24 md:w-28 lg:w-32 h-12 md:h-16 lg:h-20 p-2 bg-white/5 rounded-md"
                >
                  <img
                    src={logo}
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition"
                    alt="client logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}