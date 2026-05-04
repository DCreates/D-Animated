import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowRight, Globe, Smartphone, Palette, TrendingUp, Cloud, Cpu, Sparkles, Gift, ShieldCheck, CreditCard, Layers, ChevronDown } from "lucide-react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function AboutUs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans overflow-hidden selection:bg-blue-500/30 selection:text-white">
      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(168,85,247,0.05),transparent)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      </div>

      {/* ================= HERO ================= */}
      <Motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative text-center px-6 pt-32 pb-32 md:pt-44 md:pb-40 max-w-7xl mx-auto"
      >
        <Motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10"
        >
          <Motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-xs text-zinc-400 tracking-wide">Digital Innovation Studio</span>
          </Motion.div>

          <Motion.h1
            variants={fadeUp}
            custom={1}
            className="text-[clamp(2.8rem,8vw,7.5rem)] font-extrabold tracking-[-0.04em] leading-[0.88] mb-8"
          >
            <span className="bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent">
              We Don't Just Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Digital Futures
            </span>
            <span className="text-blue-400">.</span>
          </Motion.h1>

          <Motion.p
            variants={fadeUp}
            custom={2}
            className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light"
          >
            Founded in 2022, we evolved from a creative studio into a full-scale
            digital transformation company delivering intelligent, scalable and
            modern business ecosystems worldwide.
          </Motion.p>

          <Motion.div variants={fadeUp} custom={3} className="mt-10 flex items-center justify-center gap-4">
            <button className="group px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-3.5 rounded-full font-semibold text-sm border border-white/10 text-zinc-300 hover:border-white/25 hover:text-white transition-all duration-500 backdrop-blur-sm">
              Our Work
            </button>
          </Motion.div>
        </Motion.div>

        {/* Scroll indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={20} className="text-zinc-600" />
          </Motion.div>
        </Motion.div>
      </Motion.section>

      {/* ================= COMPANY SNAPSHOT ================= */}
      <Motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="px-6 max-w-6xl mx-auto mb-32"
      >
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {[
            { value: "2022", label: "Founded" },
            { value: "10+", label: "Digital Solutions" },
            { value: "Global", label: "Client Reach" },
            { value: "AI", label: "Innovation Focus" },
          ].map((s, i) => (
            <Motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.2)" }}
              className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm text-center group transition-all duration-500 hover:bg-white/[0.04]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-4xl font-bold bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent relative z-10">
                {s.value}
              </h3>
              <p className="text-zinc-500 mt-3 text-[11px] uppercase tracking-[0.2em] font-medium relative z-10">
                {s.label}
              </p>
            </Motion.div>
          ))}
        </div>
      </Motion.section>

      {/* ================= LEADERS ================= */}
      <Motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="px-6 max-w-6xl mx-auto mb-40"
      >
        <Motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4 font-medium">Leadership</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.03em] bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Visionary Minds
          </h2>
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              role: "Co Founder & CEO",
              name: "Mr. Farhath Zimal",
              img: "/persons/founder.png",
              desc: "A visionary leader who blends innovation, creativity, and technical expertise to deliver powerful software solutions that drive business success.",
              edu: "BSc Hons (Cyber Security)",
              skills: ["Leadership", "Vision", "Strategy"],
            },
            {
              role: "Co Founder & CTO",
              name: "Mr. Faham",
              img: "/persons/manager.jpg",
              desc: "A dynamic leader who drives operational excellence and ensures every project is delivered with precision and impact.",
              edu: "BICT (Hons) in Network Technology",
              skills: ["Operations", "Execution", "Quality"],
            },
          ].map((p, i) => (
            <Motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="group rounded-[2rem] overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.12] transition-all duration-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <span className="text-[10px] text-blue-400 uppercase tracking-[0.25em] font-semibold">
                    {p.role}
                  </span>
                  <h2 className="text-3xl font-bold mt-1 tracking-[-0.02em]">{p.name}</h2>
                </div>
              </div>
              <div className="p-8 pt-6">
                <p className="text-zinc-400 leading-relaxed text-[15px] mb-5">{p.desc}</p>
                <p className="text-xs text-zinc-600 mb-4 font-mono">{p.edu}</p>
                <div className="flex gap-2 mb-6 flex-wrap">
                  {p.skills.map((skill, si) => (
                    <span
                      key={si}
                      className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="group/btn flex items-center gap-2 px-6 py-2.5 bg-white/[0.05] border border-white/10 text-zinc-300 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-500">
                  Download Resume
                  <Download size={14} className="group-hover/btn:translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.section>

      {/* ================= STORY / TIMELINE ================= */}
      <Motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="px-6 max-w-5xl mx-auto mb-40"
      >
        <Motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4 font-medium">Timeline</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.03em] bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Our Journey
          </h2>
        </Motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/20 to-transparent" />

          {[
            {
              year: "2022",
              title: "The Beginning",
              desc: "Started as a creative design studio focused on branding and visual identity for startups and SMEs.",
            },
            {
              year: "2023",
              title: "Digital Expansion",
              desc: "Expanded into web development, building high-performance digital platforms and modern UI systems.",
            },
            {
              year: "2024",
              title: "AI & Scale",
              desc: "Now delivering AI systems, cloud infrastructure, automation tools, and scalable digital ecosystems.",
            },
            {
              year: "Future",
              title: "Global Impact",
              desc: "Our mission is to help businesses scale globally through intelligent technology and innovation.",
            },
          ].map((item, i) => (
            <Motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 w-3 h-3 rounded-full bg-blue-500 border-[3px] border-black -translate-x-1/2 mt-2 z-10 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-[45%] ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                }`}
              >
                <span className="text-blue-400 text-sm font-mono font-semibold">{item.year}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.section>

      {/* ================= SERVICES ================= */}
      <Motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="px-6 max-w-6xl mx-auto mb-40"
      >
        <Motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4 font-medium">What We Do</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.03em] bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Our Services
          </h2>
        </Motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Globe, title: "Web Development", desc: "High-performance, scalable web applications built with modern frameworks and best practices." },
            { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform iOS & Android apps with seamless, delightful user experiences." },
            { icon: Palette, title: "UI/UX Design", desc: "Premium interface design focused on clarity, beauty, and conversion." },
            { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven marketing and business scaling strategies that deliver results." },
            { icon: Cloud, title: "Cloud Solutions", desc: "Secure, scalable cloud infrastructure for modern applications." },
            { icon: Cpu, title: "AI & Automation", desc: "Smart AI systems that automate workflows and unlock insights." },
            { icon: Gift, title: "Digital Experiences", desc: "Interactive digital products and immersive creative experiences." },
            { icon: Layers, title: "Business Systems", desc: "Enterprise-grade solutions for business process optimization." },
            { icon: CreditCard, title: "E-Commerce", desc: "Secure online stores with seamless payment integrations." },
          ].map((s, i) => (
            <Motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.15)" }}
              className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-500 cursor-default"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/15 transition-colors duration-500">
                  <s.icon size={18} className="text-blue-400" />
                </div>
                <h3 className="text-base font-semibold mb-2 tracking-[-0.01em]">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.section>

      {/* ================= VALUES ================= */}
      <Motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="px-6 max-w-6xl mx-auto mb-40"
      >
        <Motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4 font-medium">Foundation</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.03em] bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Core Values
          </h2>
        </Motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Sparkles,
              title: "Innovation",
              desc: "We push boundaries using cutting-edge technology to solve complex problems in elegant ways.",
              gradient: "from-blue-500/20 to-cyan-500/20",
            },
            {
              icon: ShieldCheck,
              title: "Excellence",
              desc: "We deliver premium quality in every project, obsessing over details that others overlook.",
              gradient: "from-purple-500/20 to-pink-500/20",
            },
            {
              icon: TrendingUp,
              title: "Scalability",
              desc: "We build systems designed for global growth, ensuring your technology evolves with your vision.",
              gradient: "from-amber-500/20 to-orange-500/20",
            },
          ].map((v, i) => (
            <Motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              className="group relative p-10 rounded-[2rem] bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-700 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <v.icon size={22} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-[-0.02em]">{v.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{v.desc}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.section>

      {/* ================= CTA ================= */}
      <Motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="px-6 max-w-4xl mx-auto text-center pb-40"
      >
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-[3rem] blur-3xl" />

          <div className="relative rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-16 md:p-20 overflow-hidden">
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <Motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-6 font-medium">
              Start Your Journey
            </Motion.p>
            <Motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-6xl font-bold tracking-[-0.03em] mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent leading-tight"
            >
              Let's Build Something
              <br />
              Powerful Together
            </Motion.h2>
            <Motion.p variants={fadeUp} custom={2} className="text-zinc-500 mb-10 max-w-lg mx-auto text-lg">
              Ready to transform your business with intelligent technology? Let's talk.
            </Motion.p>
            <Motion.div variants={fadeUp} custom={3}>
              <button className="group px-10 py-4 bg-white text-black rounded-full font-semibold text-sm flex items-center gap-3 mx-auto hover:bg-blue-500 hover:text-white transition-all duration-500 hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] hover:scale-105">
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Motion.div>
          </div>
        </div>
      </Motion.section>

      {/* ================= FOOTER ACCENT ================= */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="text-center py-10">
        <p className="text-zinc-700 text-xs tracking-[0.2em] uppercase">
          © 2024 — Crafted with precision
        </p>
      </div>
    </div>
  );
}