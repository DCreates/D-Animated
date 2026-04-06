import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

//////////////////// FORMAT ////////////////////
const formatNumber = (num, suffix) => {
  if (suffix) return num + suffix;
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M+";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K+";
  return num;
};

//////////////////// COUNTER ////////////////////
const Counter = ({ target, suffix }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const start = useRef(null);

  useEffect(() => {
    let observer;

    const animate = (time) => {
      if (!start.current) start.current = time;
      const progress = Math.min((time - start.current) / 1400, 1);
      const ease = progress * (2 - progress);
      setValue(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer?.disconnect();
  }, [target]);

  return (
    <h3
      ref={ref}
      className="text-3xl md:text-4xl font-bold text-white"
    >
      {formatNumber(value, suffix)}
    </h3>
  );
};

//////////////////// ABOUT ////////////////////
export default function AboutSection() {
  const stats = [
    { label: "Clients", value: 120, suffix: "+" },
    { label: "Satisfaction", value: 98, suffix: "%" },
    { label: "Partners", value: 25, suffix: "+" },
    { label: "Ratings", value: 4.9, suffix: "/5" },
  ];

  // Parallax background
  const { scrollY } = useScroll();
  const bg1 = useTransform(scrollY, [0, 600], [0, 60]);
  const bg2 = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-16"
    >

      {/* Soft Parallax Backgrounds */}
      <motion.div
        style={{ y: bg1 }}
        // className="absolute -left-44 -top-44 h-[620px] w-[620px] rounded-full bg-blue-600/20 blur-[170px]"
      />
      <motion.div
        style={{ y: bg2 }}
        // className="absolute -bottom-44 -right-44 h-[620px] w-[620px] rounded-full bg-cyan-500/20 blur-[170px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
            About D Create
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            We build powerful digital experiences
          </h2>

          <p className="mb-4 text-base leading-7 text-gray-300 md:text-lg">
            At D Create, we specialize in creating modern, scalable, and
            high-performance applications tailored for businesses. From web apps
            to AI-powered systems, we deliver impactful solutions.
          </p>

          <p className="text-base leading-7 text-gray-300 md:text-lg">
            Our team focuses on innovation, efficiency, and client success -
            ensuring every project delivers real-world value.
          </p>
        </motion.div>

        {/* RIGHT SIDE (STATS GRID) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-2">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative flex min-h-[142px] flex-col justify-center items-center rounded-2xl px-6 py-5 text-left backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
            >
              {/* subtle inner glow */}
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-50 transition" /> */}

              <Counter target={stat.value} suffix={stat.suffix} />

              <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}   