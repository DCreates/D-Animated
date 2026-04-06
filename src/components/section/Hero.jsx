import { motion as Motion } from "framer-motion";
import { useState, useEffect } from "react";

const CounterDisplay = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 2000; // 2 seconds

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (typeof target === "number" && target % 1 === 0) {
        // For integers, count up
        setCount(Math.floor(progress * target));
      } else {
        // For decimals, show decimal value
        setCount(parseFloat((progress * target).toFixed(1)));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};


const TITLE_LINES = [
  "At D Creates,",
  "we engineer smart digital",
  "ecosystems.",
];

const lineVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariant = {
  hidden: {
    opacity: 0,
    y: 100,
    filter: "blur(3px)",
    textShadow: "0 0 0px rgba(255,255,255,0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    textShadow: [
      "0 0 0px rgba(255,255,255,0)",
      "0 0 14px rgba(255,255,255,0.9)",
      "0 0 6px rgba(255,255,255,0.45)",
      "0 0 0px rgba(255,255,255,0)",
    ],
    transition: { duration: 0.36, ease: "easeOut" },
  },
};

const stats = [
  { label: "Clients", value: 120, suffix: "+" },
  { label: "Satisfaction", value: 98, suffix: "%" },
  { label: "Partners", value: 25, suffix: "+" },
  { label: "Ratings", value: 4.9, suffix: "/5" },
];

export default function Hero({ introDone = true }) {
  const [visibleIndices, setVisibleIndices] = useState(new Set());

  const handleStatInView = (index) => {
    setVisibleIndices((prev) => new Set([...prev, index]));
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* 🔵 Background Glow Effect */}
      <div className="absolute inset-0">
        {/* <div className="absolute left-[-120px] top-[-120px] h-[620px] w-[620px] rounded-full bg-blue-700/25 blur-3xl" /> */}
        {/* <div className="absolute bottom-[-160px] right-[-120px] h-[560px] w-[560px] rounded-full bg-cyan-500/20 blur-3xl" /> */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_52%)]" />
      </div>

      {/* 🟢 Content */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 pb-20 pt-36 text-center sm:px-10"
      >
        {/* Rating */}
        <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.08em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
          {/* <span className="text-amber-300">★★★★★</span> */}

          <span>4.9 Client Satisfaction</span>
        </p>

        {/* Title */}
        <div className="relative inline-block overflow-hidden">
          {/* Base Text (dim) */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white/45 md:text-6xl lg:text-7xl">
            At D Creates,
            <br />
            we engineer smart digital ecosystems.
          </h1>

          {/* Animated Overlay */}
          <Motion.h1
            className="absolute inset-0 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
          >
            {TITLE_LINES.map((line, lineIndex) => (
              <Motion.span
                key={line}
                variants={lineVariant}
                className="block"
                transition={{ delayChildren: lineIndex * 0.2 }}
              >
                {line.split("").map((char, charIndex) => (
                  <Motion.span
                    key={`${lineIndex}-${charIndex}-${char}`}
                    variants={letterVariant}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </Motion.span>
                ))}
              </Motion.span>
            ))}
          </Motion.h1>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mb-10 mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          We design and build high-performance digital products across web, AI,
          and automation, helping teams move faster with clear architecture and
          polished execution.
        </p>

        {/* Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={scrollToContact}
            className="rounded-xl bg-white px-7 py-3.5 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Start a Project
          </button>

          <button
            onClick={scrollToServices}
            className="rounded-xl border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
          >
            View Case Studies
          </button>
        </div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 text-left text-sm text-slate-300 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              onViewportEnter={() => handleStatInView(index)}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="group relative flex min-h-36 flex-col justify-center items-center rounded-2xl px-6 py-5 text-left backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
            >
              <p className="text-xl font-semibold text-white">
                <CounterDisplay
                  target={stat.value}
                  suffix={stat.suffix}
                  isVisible={visibleIndices.has(index)}
                />
              </p>
              <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}
