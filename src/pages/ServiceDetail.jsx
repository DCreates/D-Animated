import { useParams, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { getServiceBySlug } from "../data/services";
import { projects } from "../data/projects";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-slate-300 mb-8">The service you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-black font-medium transition hover:bg-white/90"
          >
            <FaArrowLeft /> Back to Services
          </button>
        </Motion.div>
      </div>
    );
  }

  // Get related projects
  const relatedProjects = projects.filter((project) =>
    service.relatedProjects.includes(project.title)
  );

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const totalSlides = relatedProjects.length;

  const nextSlide = () => {
    if (totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const getSlidePosition = (index) => {
    if (totalSlides === 1) return 0;

    const forward = (index - currentSlide + totalSlides) % totalSlides;
    const backward = (currentSlide - index + totalSlides) % totalSlides;

    if (forward === 0) return 0;

    if (totalSlides === 2) {
      return forward === 1 ? 1 : null;
    }

    if (forward === 1) return 1;
    if (backward === 1) return -1;
    return null;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 py-4">
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition text-sm font-medium"
          >
            <FaArrowLeft /> Back to Services
          </button>
        </div>
      </div>

      
  {/* Hero Section - Two Columns */}
        <Motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="relative mx-auto w-full max-w-7xl">
            {/* Animated background gradient */}
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl opacity-20" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl opacity-20" />

            {/* Two Column Layout */}
            <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
              {/* Left Column - Service Details */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <p className="mb-5 inline-flex items-center rounded-full border border-white/25 px-5 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
                  Service Details
                </p>

                <h1 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl">
                  {service.name}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                  {service.description}
                </p>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
                  {service.heroSubtitle}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleScrollToContact}
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-black font-medium transition hover:bg-white/90 shadow-lg"
                  >
                    Start Your Project
                    <FaArrowRight />
                  </button>
                  <button
                    onClick={() => navigate("/contact")}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-8 py-4 text-white font-medium transition hover:border-white/50 hover:bg-white/5"
                  >
                    Schedule a Call
                  </button>
                </div>
              </Motion.div>

              {/* Right Column - Project Slider */}
              {relatedProjects.length > 0 && (
                <Motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <div className="rounded-2xl  backdrop-blur-xl p-6 overflow-hidden">
                    

                    {/* Slider Container */}
                    <div className="relative h-84 overflow-hidden rounded-xl">
                      {relatedProjects.map((project, index) => {
                        const position = getSlidePosition(index);
                        const isCenter = position === 0;
                        const isSide = position === -1 || position === 1;

                        return (
                          <Motion.div
                            key={index}
                            initial={false}
                            animate={{
                              x: position === 0 ? 0 : position === -1 ? -130 : position === 1 ? 130 : 0,
                              scale: position === 0 ? 1 : isSide ? 0.78 : 0.65,
                              opacity: position === 0 ? 1 : isSide ? 0.45 : 0,
                              filter:
                                position === 0
                                  ? "blur(0px)"
                                  : isSide
                                    ? "blur(2px)"
                                    : "blur(5px)",
                              zIndex: position === 0 ? 30 : isSide ? 20 : 10,
                            }}
                            transition={{ duration: 0.45, ease: "easeInOut" }}
                            className="absolute left-1/2 top-1/2 h-[88%] w-[72%] max-w-65 -translate-x-1/2 -translate-y-1/2"
                            onClick={() => {
                              if (position === -1 || position === 1) {
                                setCurrentSlide(index);
                              }
                            }}
                            style={{ pointerEvents: position === null ? "none" : "auto" }}
                          >
                            <div className="h-full flex flex-col rounded-lg border border-white/10 bg-linear-to-br from-blue-500/10 to-cyan-500/10 overflow-hidden">
                              <div className="flex-1 overflow-hidden flex items-center justify-center">
                                <img
                                  src={project.previewA}
                                  alt={project.title}
                                  className="h-full w-full object-cover"
                                />
                              </div>

                              <div className="p-4 bg-black/45 backdrop-blur-sm">
                                <h4 className="text-sm font-bold text-white line-clamp-1">
                                  {project.title}
                                </h4>
                                <p className="mt-1 text-xs text-white/70 line-clamp-1">
                                  {project.tags[0]}
                                </p>
                                <p className="mt-2 text-xs font-medium text-blue-400">
                                  {project.metric}
                                </p>
                              </div>
                            </div>

                            {isCenter && (
                              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/20" />
                            )}
                          </Motion.div>
                        );
                      })}
                    </div>

                    {/* Arrow Controls - Centered on Y Axis */}
                    <button
                      type="button"
                      aria-label="Previous project"
                      onClick={prevSlide}
                      className="absolute left-3 top-1/2 z-40 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white/80 backdrop-blur-md transition hover:bg-black/65 hover:text-white"
                    >
                      <FaChevronLeft className="text-sm" />
                    </button>

                    <button
                      type="button"
                      aria-label="Next project"
                      onClick={nextSlide}
                      className="absolute right-3 top-1/2 z-40 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white/80 backdrop-blur-md transition hover:bg-black/65 hover:text-white"
                    >
                      <FaChevronRight className="text-sm" />
                    </button>

                    {/* Slide Counter */}
                    <div className="mt-4 text-center text-xs text-white/60 font-medium whitespace-nowrap">
                      {currentSlide + 1} / {totalSlides}
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex gap-1 mt-4 justify-center">
                      {relatedProjects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`h-2 rounded-full transition ${
                            index === currentSlide
                              ? "bg-white w-8"
                              : "bg-white/30 w-2 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </Motion.div>
              )}
            </div>
          </div>
        </Motion.section>

      {/* What We Offer Section */}
      {/* <Motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="relative mx-auto w-full max-w-7xl">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              What We Offer
            </h2>
            <p className="mt-4 text-base text-slate-300 md:text-lg">
              Comprehensive solutions tailored to your specific needs and goals.
            </p>
          </Motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.whatWeOffer.map((feature, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-white/10 bg-white/3 p-8 transition hover:border-white/25 hover:bg-white/8 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-white/50 group-hover:text-white/70 transition">
                  <FaCheckCircle className="text-sm" />
                  <span className="text-xs">Included</span>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </Motion.section> */}

      {/* Technologies Section */}
      {/* <Motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full overflow-hidden px-6 py-24 sm:px-10 lg:px-16 bg-white/2"
      >
        <div className="relative mx-auto w-full max-w-7xl">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Technologies We Use
            </h2>
            <p className="mt-4 text-base text-slate-300 md:text-lg">
              Modern, battle-tested tools and frameworks to build your solutions.
            </p>
          </Motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {service.technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/3 p-6 transition hover:border-white/25 hover:bg-white/8"
                >
                  <IconComponent className="text-3xl text-white group-hover:text-blue-400 transition" />
                  <p className="text-center text-sm font-medium text-slate-300 group-hover:text-white transition">
                    {tech.name}
                  </p>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </Motion.section> */}

      

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <Motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full overflow-hidden px-6 py-24 sm:px-10 lg:px-16 bg-white/2"
        >
          <div className="relative mx-auto w-full max-w-7xl">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Related Projects
              </h2>
              <p className="mt-4 text-base text-slate-300 md:text-lg">
                See how we've applied our expertise to similar challenges.
              </p>
            </Motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-xl border border-white/10 bg-white/3 transition hover:border-white/25 hover:bg-white/8"
                >
                  {/* Project Image Preview */}
                  <div className="relative h-48 overflow-hidden bg-linear-to-br from-blue-500/10 via-transparent to-cyan-500/10 flex items-center justify-center">
                    <div className="flex gap-3">
                      <img
                        src={project.previewA}
                        alt={project.title}
                        className="h-24 w-24 rounded-lg object-cover opacity-80 group-hover:opacity-100 transition"
                      />
                      <img
                        src={project.previewB}
                        alt={project.title}
                        className="h-24 w-24 rounded-lg object-cover opacity-80 group-hover:opacity-100 transition"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metric */}
                    <p className="text-xs font-medium text-blue-400">
                      {project.metric}
                    </p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </Motion.section>
      )}

      {/* Final CTA Section */}
      <Motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="relative mx-auto w-full max-w-4xl">
          {/* Animated background gradient */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 via-transparent to-cyan-500/10 blur-3xl" />

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl p-12 text-center sm:p-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to get started?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
              Let's discuss how we can help you achieve your goals with our {service.name.toLowerCase()} services.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <button
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-black font-medium transition hover:bg-white/90 shadow-lg"
              >
                Start Your Project
                <FaArrowRight />
              </button>
              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-8 py-4 text-white font-medium transition hover:border-white/50 hover:bg-white/5"
              >
                Explore Other Services
              </button>
            </div>
          </Motion.div>
        </div>
      </Motion.section>
    </div>
  );
}
