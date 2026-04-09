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

const TITLE_LINES = ["D Creates,", "Where Innovation Meets Excellence."];

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
    y: 80,
    filter: "blur(6px)",
    textShadow: "0 0 0px rgba(255,255,255,0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    textShadow: [
      "0 0 0px rgba(255,255,255,0)",
      "0 0 18px rgba(255,255,255,1)",
      "0 0 8px rgba(255,255,255,0.6)",
      "0 0 0px rgba(255,255,255,0)", // 👈 ends CLEAN (no shine)
    ],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stats = [
  { label: "User Active", value: 380, suffix: "+" },
  { label: "Trusted by Company", value: 230, suffix: "+" },
  { label: "Transaction", value: 230, suffix: "M+", prefix: "$" },
];

export default function Hero({ introDone = true }) {
  const [visibleIndices, setVisibleIndices] = useState(new Set());

  const handleStatInView = (index) => {
    setVisibleIndices((prev) => new Set([...prev, index]));
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black/50 text-white"
    >
      {/* 🔵 Background Glow Effect */}
      <div className="absolute inset-0">
        {/* <div className="absolute left-[-120px] top-[-120px] h-[620px] w-[620px] rounded-full bg-blue-700/25 blur-3xl" /> */}
        {/* <div className="absolute bottom-[-160px] right-[-120px] h-[560px] w-[560px] rounded-full bg-cyan-500/20 blur-3xl" /> */}
        <img
          src="/images/globe.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-260 w-360 -translate-x-1/2 -translate-y-2/5 object-contain opacity-55"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_52%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[15%] bg-linear-to-b from-transparent to-black" />
      </div>

      {/* 🟢 Content */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-start px-4 pb-8 pt-24 text-center sm:px-10 sm:pb-20 sm:pt-36"
      >
        <div className="flex w-full flex-1 flex-col items-center gap-8">
          <div className="flex w-full flex-1 flex-col items-center justify-center">
            {/* Rating */}
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-medium tracking-[0.08em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)] sm:mb-8 sm:px-4 sm:py-2 sm:text-xs">
              {/* <span className="text-amber-300">★★★★★</span> */}

              <span>100% Client Satisfaction</span>
            </p>

            {/* Title */}
            <div className="relative inline-block w-full overflow-hidden text-center">
              <Motion.h1 className="relative inline-block text-center">
                {/* First Line - D Creates */}
                <Motion.div
                  variants={lineVariant}
                  initial="hidden"
                  animate={introDone ? "visible" : "hidden"}
                  transition={{ delayChildren: 0, staggerChildren: 0.05 }}
                  className="block font-bold text-5xl md:text-7xl lg:text-8xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {"D Creates".split("").map((char, i) => (
                    <Motion.span
                      key={i}
                      variants={letterVariant}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </Motion.span>
                  ))}
                </Motion.div>

                {/* Second Line - Cursive */}
                <Motion.div
                  variants={lineVariant}
                  initial="hidden"
                  animate={introDone ? "visible" : "hidden"}
                  transition={{ delayChildren: 0.8, staggerChildren: 0.05 }}
                  className="mt-6 block text-5xl md:text-6xl lg:text-6xl"
                  style={{ fontFamily: "'Eagle-lake'" }}
                >
                  {"Where Innovation Meets Excellence.".split("").map(
                    (char, i) => (
                      <Motion.span
                        key={i}
                        variants={letterVariant}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </Motion.span>
                    )
                  )}
                </Motion.div>
              </Motion.h1>
            </div>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-300 md:text-lg">
              We design and build high-performance digital products across web,
              AI, and automation, helping teams move faster with clear
              architecture and polished execution.
            </p>
            {/* Buttons */}
            <div className="flex w-full max-w-sm flex-row justify-center gap-3 sm:max-w-none sm:gap-4 pt-10">
              <button className="rounded-xl bg-white px-7 py-3.5 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-slate-100 md:w-20/100">
                Start a Project
              </button>

              <button className="rounded-xl border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10">
                View Case Studies
              </button>
            </div>
          </div>

          <div className="mt-auto flex w-full flex-col items-center gap-8 pb-2 pt-2">
            

            <div className="w-full">
              <div className="grid grid-cols-3 rounded-md text-center text-sm text-slate-300 sm:mt-0 sm:divide-x sm:divide-white/15">
                {stats.map((stat, index) => (
                  <Motion.div
                    key={index}
                    onViewportEnter={() => handleStatInView(index)}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center gap-0.5 px-1 py-2 text-center sm:flex-row sm:gap-2 sm:px-5 sm:py-3"
                  >
                    <p className="text-xl font-bold text-white sm:text-6xl text-center justify-center align-middle">
                      {stat.prefix || ""}
                      <CounterDisplay
                        target={stat.value}
                        suffix={stat.suffix}
                        isVisible={visibleIndices.has(index)}
                      />
                    </p>
                    <p className="text-[10px] leading-tight text-slate-300 sm:text-sm">
                      {stat.label}
                    </p>
                  </Motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
