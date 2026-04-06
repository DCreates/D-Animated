import { useState } from "react";

export default function PremiumTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Carter",
      role: "Creative Director",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      quote:
        "This platform transformed our workflow completely. The attention to detail and premium experience exceeded every expectation.",
    },
    {
      id: 2,
      name: "Daniel Brooks",
      role: "Startup Founder",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      quote:
        "The interface feels incredibly polished and intuitive. It has the same level of refinement you would expect from Apple.",
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Marketing Lead",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
      quote:
        "Beautiful, seamless, and thoughtfully crafted. Every interaction feels smooth and premium.",
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Product Designer",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
      quote:
        "A stunning experience from start to finish. The visual design alone impressed our entire team.",
    },
    {
      id: 5,
      name: "Ava Martinez",
      role: "Business Consultant",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop",
      quote:
        "The clean design and elegant motion made our brand feel more premium instantly.",
    },
  ];

  const [active, setActive] = useState(2);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="testimonials"
      className="min-h-screen bg-black flex items-center justify-center px-4 py-5 overflow-hidden"
    >
      <div className="relative w-full max-w-7xl rounded-[40px]   overflow-hidden">
       

        <div className="relative z-10 px-8 sm:px-10 lg:px-16 py-8 lg:py-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs tracking-[0.35em] uppercase text-white/70 backdrop-blur-xl mb-6">
            Client Satisfaction
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            Trusted by Teams That Value Precision
          </h2>

          <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-white/45 leading-7">
            Real feedback from partners who chose secure delivery, clear communication,
            and premium execution.
          </p>

          <button
            onClick={scrollToContact}
            className="mt-3 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            Start Your Project
          </button>

          <div className="relative mt-1 flex items-center justify-center min-h-[260px]">
            {testimonials.map((item, index) => {
              const offset = index - active;

              const positions = {
                "-2": "translate-x-[-320px] translate-y-[10px] scale-75 opacity-40 z-10",
                "-1": "translate-x-[-160px] translate-y-[-28px] scale-90 opacity-70 z-20",
                "0": "translate-x-0 translate-y-0 scale-110 opacity-100 z-30",
                "1": "translate-x-[160px] translate-y-[-28px] scale-90 opacity-70 z-20",
                "2": "translate-x-[320px] translate-y-[10px] scale-75 opacity-40 z-10",
              };

              const style =
                positions[offset] ||
                "opacity-0 scale-50 pointer-events-none";

              return (
                <button
                  key={item.id}
                  onClick={() => setActive(index)}
                  className={`absolute transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${style}`}
                >
                  <div
                    className={`relative rounded-full p-[3px] ${
                      index === active
                        ? "bg-gradient-to-br from-white via-white/70 to-white/20 shadow-[0_0_40px_rgba(255,255,255,0.18)]"
                        : "bg-white/10"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`rounded-full object-cover transition-all duration-500 ${
                        index === active
                          ? "w-24 h-24 sm:w-28 sm:h-28"
                          : "w-16 h-16 sm:w-20 sm:h-20"
                      }`}
                    />
                  </div>

                  {index === active && (
                    <>
                      <div className="absolute -top-2 -right-3 h-2.5 w-2.5 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
                      <div className="absolute -bottom-3 -left-4 h-1.5 w-1.5 rounded-full bg-white/50" />
                    </>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-2 mx-auto max-w-3xl">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl px-6 sm:px-10 py-8 sm:py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              {/* 5 Star Rating */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[active].rating)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]"
                  >
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557L2.04 10.385a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z" />
                  </svg>
                ))}
              </div>

              <p className="text-lg sm:text-2xl leading-relaxed text-white/90 font-light">
                “{testimonials[active].quote}”
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-1">
                <h3 className="text-white font-medium text-lg">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-white/45">
                  {testimonials[active].role}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-5">
              <button
                onClick={prev}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === active
                        ? "w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                        : "w-2 bg-white/25 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

