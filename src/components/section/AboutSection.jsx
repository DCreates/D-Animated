import React, { useEffect, useRef, useState } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

//////////////////// FORMAT ////////////////////
const formatNumber = (num, suffix) => {
  if (suffix) return num + suffix;
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M+";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K+";
  return num;
};

//////////////////// COUNTER (FIXED) ////////////////////
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
    <h3 ref={ref} className="text-3xl md:text-4xl font-bold text-white">
      {formatNumber(value, suffix)}
    </h3>
  );
};

//////////////////// MAIN COMPONENT ////////////////////
export default function AboutSection() {
  const navigate = useNavigate(); // ✅ FIXED: moved inside component

  const { scrollY } = useScroll();
  const bg1 = useTransform(scrollY, [0, 600], [0, 60]);
  const bg2 = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* BACKGROUND GLOW (FIXED - ENABLED) */}
      <Motion.div
        style={{ y: bg1 }}
        className="absolute -left-44 -top-44 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[150px]"
      />

      <Motion.div
        style={{ y: bg2 }}
        className="absolute -bottom-44 -right-44 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[150px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT CONTENT */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-xl">
            About D Create
          </p>

          <h2 className="text-5xl lg:text-[70px] font-bold tracking-tighter leading-[0.85] text-white mb-6">
            We build powerful digital experiences
          </h2>

          <p className="text-gray-300 text-lg leading-7 mb-4">
            At D Create, we specialize in modern web development, mobile apps,
            UI/UX design, and AI-powered digital solutions.
          </p>

          <p className="text-gray-400 text-lg leading-7">
            We help businesses grow with scalable systems, automation, and
            premium digital experiences built for performance.
          </p>

          {/* BUTTON FIXED */}
          <button
            onClick={() => navigate("/about")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black hover:bg-white/80 transition"
          >
            Explore Us
          </button>
        </Motion.div>

        {/* RIGHT SIDE IMAGE */}
        <Motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/images/bgr.jpg"
            alt="D Create"
            className="w-full rounded-2xl border border-white/20"
          />
        </Motion.div>
      </div>
    </section>
  );
}