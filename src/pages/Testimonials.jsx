import { useState } from "react";
import { TESTIMONIALS } from "../data/testimonials";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentTestimonial = TESTIMONIALS[activeIndex];
  const prevTestimonial = TESTIMONIALS[(activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length];
  const nextTestimonial = TESTIMONIALS[(activeIndex + 1) % TESTIMONIALS.length];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-white text-lg">
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-16"
    >

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/25 px-5 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
            Client Stories
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
            See what our clients have to say about working with us
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <button
            onClick={handlePrev}
            className="group absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/50 text-white transition backdrop-blur hover:border-white/55 hover:bg-black/70 md:flex"
            aria-label="Previous testimonial"
          >
            <span className="transition group-hover:-translate-x-0.5">←</span>
          </button>

          <button
            onClick={handleNext}
            className="group absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/50 text-white transition backdrop-blur hover:border-white/55 hover:bg-black/70 md:flex"
            aria-label="Next testimonial"
          >
            <span className="transition group-hover:translate-x-0.5">→</span>
          </button>

          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[0.5fr_2.2fr_0.5fr]">
            <article className="hidden rounded-[28px] border border-white/15 bg-white/5 p-4 opacity-40 blur-[1px] backdrop-blur-xl lg:block">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={prevTestimonial.avatar}
                  alt={prevTestimonial.author}
                  className="h-11 w-11 rounded-full border border-white/20 object-cover grayscale"
                />
                <div>
                  <p className="text-sm font-semibold text-white/85">{prevTestimonial.author}</p>
                  <p className="text-xs text-slate-400">{prevTestimonial.role}</p>
                </div>
              </div>
              <p className="h-16 overflow-hidden text-xs leading-5 text-slate-300/80">
                "{prevTestimonial.text}"
              </p>
            </article>

            <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-xl overflow-hidden">
              <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-[320px_1fr] md:p-12">
              {/* Left: Photo & Metric */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  {/* B&W Photo Background */}
                  <div className="aspect-square overflow-hidden rounded-2xl border border-white/20 bg-linear-to-br from-white/30 via-white/20 to-white/10">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      className="h-full w-full object-cover grayscale"
                    />
                  </div>

                  {/* Metric Badge */}
                  <div className="absolute bottom-4 left-4 rounded-xl border border-white/30 bg-black/60 backdrop-blur-md px-4 py-3">
                    <p className="text-2xl font-bold text-white">{currentTestimonial.metric}</p>
                    <p className="text-sm text-slate-300 leading-tight">{currentTestimonial.metricLabel}</p>
                  </div>
                </div>
              </div>

              {/* Right: Quote & Author */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-400 mb-4">
                    {activeIndex.toString().padStart(2, "0")}
                  </p>
                  <p className="text-lg md:text-xl leading-8 text-white mb-8">
                    "{currentTestimonial.text}"
                  </p>
                </div>

                <div>
                  <div className="mb-4">
                    {renderStars(currentTestimonial.rating)}
                  </div>
                  <p className="text-lg font-semibold text-white">{currentTestimonial.author}</p>
                  <p className="text-sm text-slate-400">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
            </div>

            <article className="hidden rounded-[28px] border border-white/15 bg-white/5 p-4 opacity-40 blur-[1px] backdrop-blur-xl lg:block">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={nextTestimonial.avatar}
                  alt={nextTestimonial.author}
                  className="h-11 w-11 rounded-full border border-white/20 object-cover grayscale"
                />
                <div>
                  <p className="text-sm font-semibold text-white/85">{nextTestimonial.author}</p>
                  <p className="text-xs text-slate-400">{nextTestimonial.role}</p>
                </div>
              </div>
              <p className="h-16 overflow-hidden text-xs leading-5 text-slate-300/80">
                "{nextTestimonial.text}"
              </p>
            </article>
          </div>

          {/* Navigation Controls */}
          <div className="mt-10 flex items-center justify-center gap-2 md:gap-3">
            {/* Pagination Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/25 hover:bg-white/45"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
