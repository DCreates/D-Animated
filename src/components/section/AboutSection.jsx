import React, { useEffect, useRef, useState } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

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
  // Parallax background
  const { scrollY } = useScroll();
  const bg1 = useTransform(scrollY, [0, 600], [0, 60]);
  const bg2 = useTransform(scrollY, [0, 600], [0, -40]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-16"
    >

      {/* Soft Parallax Backgrounds */}
      <Motion.div
        style={{ y: bg1 }}
        // className="absolute -left-44 -top-44 h-[620px] w-[620px] rounded-full bg-blue-600/20 blur-[170px]"
      />
      <Motion.div
        style={{ y: bg2 }}
        // className="absolute -bottom-44 -right-44 h-[620px] w-[620px] rounded-full bg-cyan-500/20 blur-[170px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-start">

        {/* LEFT SIDE */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="mb-5 inline-flex items-center rounded-full border border-y-cyan-300 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/95 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
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
          <button
            onClick={scrollToServices}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white px-5 py-2.5 text-sm font-bold tracking-[0.10em] text-black backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)] transition hover:bg-white/20 hover:text-amber-50"
          >
            Explore Us
          </button>

        </Motion.div>

        {/* RIGHT SIDE (STATS GRID) */}
        <div className="gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-2">

          <img src="/images/bgr.jpg" alt="D Create Logo" className="w-full rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl" />
          

        </div>
      </div>
    </section>
  );
}   