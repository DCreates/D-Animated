import { useParams, useNavigate } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaShieldAlt,
  FaStar,
  FaCogs,
  FaRocket,
  FaUsers,
  FaClipboardCheck,
  FaAward,
  FaLayerGroup,
  FaRegLightbulb,
  FaClock,
} from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
import { getServiceBySlug } from "../data/services";
import { projects } from "../data/projects";

const premiumSpring = { type: "spring", stiffness: 110, damping: 18, mass: 0.9 };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: premiumSpring },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardLift = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: premiumSpring },
};

const defaultQualityStats = [
  { label: "Quality Control", value: "99.9%", icon: FaShieldAlt },
  { label: "Client Satisfaction", value: "100%", icon: FaStar },
  { label: "On-Time Delivery", value: "24/7", icon: FaClock },
  { label: "Support Standard", value: "Premium", icon: FaAward },
];

const defaultServicePoints = [
  {
    title: "Strategic planning",
    desc: "A focused roadmap aligned with your goals, audience, and growth direction.",
    icon: FaRegLightbulb,
  },
  {
    title: "High-performance delivery",
    desc: "Fast, stable, and scalable execution designed for modern business needs.",
    icon: FaRocket,
  },
  {
    title: "Quality assurance",
    desc: "Testing, review, and refinement at every stage for a polished outcome.",
    icon: FaClipboardCheck,
  },
  {
    title: "Future-ready architecture",
    desc: "Built to grow with your business, brand, and digital operations.",
    icon: FaLayerGroup,
  },
];

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && (
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
          {desc}
        </p>
      )}
    </div>
  );
}


function StatCard({ item }) {
  const Icon = item.icon;
  return (
    <Motion.div
      variants={cardLift}
      className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/60">{item.label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
            {item.value}
          </p>
        </div>
        <div className="flex h-15 w-15 items-center text-2xl justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 transition-transform duration-300 group-hover:scale-105">
          <Icon />
        </div>
      </div>
    </Motion.div>
  );
}

function ServicePointCard({ item }) {
  const Icon = item.icon;

  return (
    <Motion.div
      variants={cardLift}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0f0f13] p-4 sm:p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#14141a]"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-1 bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-xl" />
      </div>

      {/* Icon */}
      <div className="relative z-10 mb-4 flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-xl bg-white/5 text-white/80 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
        <Icon className="text-2xl sm:text-3xl" />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-sm sm:text-lg font-semibold text-white">
        {item.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-2 text-xs sm:text-sm leading-6 text-white/60">
        {item.desc}
      </p>
    </Motion.div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);
  const [currentSlide, setCurrentSlide] = useState(0);

  const relatedProjects = useMemo(() => {
    if (!service?.relatedProjects?.length) return [];
    return projects.filter((project) =>
      service.relatedProjects.includes(project.title)
    );
  }, [service]);

  const qualityStats = service?.qualityStats?.length
    ? service.qualityStats
    : defaultQualityStats;

  const servicePoints = service?.servicePoints?.length
    ? service.servicePoints
    : defaultServicePoints;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    if (currentSlide >= relatedProjects.length) {
      setCurrentSlide(0);
    }
  }, [relatedProjects.length, currentSlide]);

  if (!service) {
    return <div className="min-h-screen bg-black" />;
  }

  const nextSlide = () => {
    if (!relatedProjects.length) return;
    setCurrentSlide((prev) => (prev === relatedProjects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!relatedProjects.length) return;
    setCurrentSlide((prev) => (prev === 0 ? relatedProjects.length - 1 : prev - 1));
  };

  const currentProject = relatedProjects[currentSlide];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };


  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] font-sans text-[#f5f5f7] selection:bg-white/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(88,80,255,0.18),transparent_55%),radial-gradient(ellipse_40%_30%_at_80%_20%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <nav className="fixed top-0 z-[100] w-full border-b border-white/[0.05] bg-black/45 backdrop-blur-3xl supports-[backdrop-filter]:bg-black/25">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-10">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/55 transition-all hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10">
              <FaArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
            </span>
            <span className="hidden sm:block">Back</span>
          </button>

          <div className="max-w-[50vw] truncate text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
            {service.name}
          </div>
        </div>
      </nav>

      <section className="relative px-4 pb-12 pt-28 md:px-10 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="relative z-10"
            >
              <Motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />
                  {service.category || "Premium Service"}
                </span>
              </Motion.div>

              <Motion.h1
                variants={fadeUp}
                className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl xl:text-[5.8rem] xl:leading-[0.95]"
              >
                {service.name}
              </Motion.h1>

              <Motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-xl"
              >
                {service.description}
              </Motion.p>

              <Motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_45px_rgba(255,255,255,0.18)]">
                  Start Project
                </button>
                <button className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-bold text-white backdrop-blur-xl transition-all hover:bg-white/10">
                  Explore Capabilities
                </button>
              </Motion.div>

              <Motion.div
                variants={fadeUp}
                className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
              >
                {qualityStats.map((item, idx) => (
                  <StatCard key={idx} item={item} />
                ))}
              </Motion.div>
            </Motion.div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_58%)] blur-2xl" />
              <Motion.div
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={premiumSpring}
                className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              >
                <div className="relative overflow-hidden rounded-[28px] bg-[#0b0b0f]">
                  {currentProject ? (
                    <AnimatePresence mode="wait">
                      <Motion.div
                        key={currentProject.title}
                        initial={{ opacity: 0, x: 30, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -30, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-[5/6]"
                      >
                        <img
                          src={currentProject.previewA}
                          alt={currentProject.title}
                          className="h-full w-full object-cover opacity-85"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.3)_48%,rgba(0,0,0,0.05)_100%)]" />

                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 sm:left-6 sm:right-6 sm:top-6">
                          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/70 backdrop-blur-xl sm:px-4">
                            Featured Result
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/80 backdrop-blur-xl sm:px-4">
                            Quality-Checked
                          </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
                          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[11px] font-semibold text-white/75 backdrop-blur-xl">
                            <FaShieldAlt className="text-emerald-400" />
                            Built with premium quality standards
                          </div>
                          <h3 className="text-2xl font-semibold text-white md:text-3xl">
                            {currentProject.title}
                          </h3>
                          <p className="mt-2 max-w-lg text-sm leading-6 text-white/60 md:text-base">
                            {currentProject.metric}
                          </p>
                        </div>
                      </Motion.div>
                    </AnimatePresence>
                  ) : (
                    <div className="flex aspect-[4/5] items-center justify-center p-10 text-center lg:aspect-[5/6]">
                      <div>
                        <FaLayerGroup className="mx-auto text-4xl text-white/25" />
                        <p className="mt-4 text-sm text-white/55">
                          No related projects found for this service yet.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between gap-3 px-2 pb-1">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                    {relatedProjects.length
                      ? `${currentSlide + 1} / ${relatedProjects.length}`
                      : "0 / 0"}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevSlide}
                      disabled={!relatedProjects.length}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={nextSlide}
                      disabled={!relatedProjects.length}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </Motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Service Details"
            title="What this service delivers"
            desc="A clearer breakdown of the value, process, and results behind this offering."
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {servicePoints.map((item, idx) => (
              <ServicePointCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Selected Work"
            title="Recent results that reflect this service"
            desc="A premium showcase of related projects, presented in a cleaner editorial style."
          />

          {relatedProjects.length ? (
            <>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                {relatedProjects.slice(0, 3).map((project, idx) => (
                  <Motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ ...premiumSpring, delay: idx * 0.08 }}
                    className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0c0c10] ${
                      idx === 0
                        ? "min-h-[360px] lg:col-span-7 lg:row-span-2"
                        : "min-h-[220px] lg:col-span-5"
                    }`}
                  >
                    <img
                      src={project.previewA}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.92),rgba(0,0,0,0.25),rgba(0,0,0,0.05))]" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                      <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white/75 backdrop-blur-xl">
                        {project.tags?.[0] || "Premium Work"}
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 md:text-base">
                        {project.metric}
                      </p>
                    </div>
                  </Motion.div>
                ))}
              </div>

              <div className="mt-5 flex justify-center md:justify-end">
                <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition-all hover:bg-white/10">
                  View all related work <FaArrowRight className="text-xs" />
                </button>
              </div>
            </>
          ) : (
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center text-white/55">
              No related projects have been linked to this service yet.
            </div>
          )}
        </div>
      </section>

      <section className="relative px-4 py-20 md:px-10 md:py-32 overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-blue-400/15 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-1/3 h-[300px] w-[300px] rounded-full bg-sky-400/25 blur-[120px]" />
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] md:rounded-[56px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-16 text-center shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
      >
        {/* Glass overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-60" />

        {/* Content */}
        <div className="relative z-10">
          
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white text-2xl shadow-inner shadow-white/10 backdrop-blur-md">
            <FaUsers />
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-3xl font-semibold tracking-tight text-white md:text-6xl leading-tight">
            Ready to build something{" "}
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              exceptional?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-xl">
            Let us transform your vision into a refined digital experience —
            crafted with precision, performance, and world-class design standards.
          </p>

          {/* Button */}
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group relative mt-10 inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 text-sm font-semibold text-black shadow-lg"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />

            <span className="relative z-10 flex items-center gap-2">
              Start a Conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Motion.button>
        </div>
      </Motion.div>
    </section>

      <div className="fixed bottom-5 left-0 right-0 z-[100] px-4 md:hidden">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/2 p-2 pl-5 shadow-2xl backdrop-blur-xl">
          <span className="text-xs font-semibold tracking-wide text-white/80">
            Ready to start?
          </span>
          <button 
          onClick={scrollToContact}
          className="h-10 rounded-full bg-white px-5 text-[11px] font-bold uppercase text-black transition hover:bg-transparent hover:text-white hover:border-white">
            Contact Us
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 22s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}