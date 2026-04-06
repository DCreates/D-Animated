export default function Partners() {
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.webp",
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.webp",
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.webp",
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.webp",
  ];

  return (
    <section className="bg-black px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl overflow-hidden">

      {/* Title */}
      <div className="mb-10 flex justify-center">
        <h2 className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
          Trusted by our collaborators
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">

        {/* ✅ LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

        {/* ✅ RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling Logos */}
        <div className="flex w-max animate-scroll gap-12">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              className="h-12 object-contain opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>

      </div>

      </div>
    </section>
  );
}