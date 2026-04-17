import { motion } from "framer-motion";
import { Download, ArrowRight, Globe, Smartphone, Palette, TrendingUp, Cloud, Cpu, Sparkles, Gift, ShieldCheck, CreditCard, Layers } from "lucide-react";


export default function AboutUs() {
  return (
    <div className="bg-[#010101] text-white min-h-screen font-sans overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.12),transparent_40%)]" />

      {/* ================= HERO ================= */}
      <section className="text-center px-6 pt-28 pb-24 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9] mb-6"
        >
          We Don’t Just Build
          <br />
          We Create Digital Futures<span className="text-blue-500">.</span>
        </motion.h1>
        <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Founded in 2022, we evolved from a creative studio into a full-scale digital transformation company delivering
          intelligent, scalable and modern business ecosystems worldwide.
        </p>
      </section>

      {/* ================= COMPANY SNAPSHOT ================= */}
      <section className="px-6 max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 text-center">
          {[
            { value: "2022", label: "Founded" },
            { value: "10+", label: "Digital Solutions" },
            { value: "Global", label: "Client Reach" },
            { value: "AI Driven", label: "Innovation Focus" }
          ].map((s, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-3xl font-bold text-blue-400">{s.value}</h3>
              <p className="text-zinc-400 mt-2 text-xs uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LEADERS ================= */}
      <section className="px-5 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-28">
        {[
          {
            role: "Co Founder",
            name: "Mr. Farhath Zimal",
            img: "/persons/founder.png",
            desc: "Our Founder Mr. Farhath Zimal is a visionary leader who blends innovation, creativity, and technical expertise to deliver powerful software solutions that drive business success.",
            edu: "BSc Hons (Cyber Security)",
            skills: "Leadership • Vision • Strategy"
          },
          {
            role: "Managing Director",
            name: "Mr. Faham",
            img: "/persons/manager.jpeg",
            desc: "Our Managing Director Mr. Faham is a dynamic leader who drives operational excellence and ensures every project is delivered with precision and impact.",
            edu: "BSc IT • PMP Certified",
            skills: "Operations • Execution • Quality"
          } 
          
        ].map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl">
            <img src={p.img} className="w-full h-[340px] object-cover" />
            <div className="p-8">
              <span className="text-xs text-blue-400 uppercase tracking-widest">{p.role}</span>
              <h2 className="text-3xl font-bold mt-2 mb-2">{p.name}</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">{p.desc}</p>
              <p className="text-sm text-zinc-500 mb-4">{p.edu}</p>
              <p className="text-xs text-zinc-600 mb-6">{p.skills}</p>
              <button className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-xl hover:bg-blue-500 hover:text-white transition">
                Download Resume <Download size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ================= STORY ================= */}
      <section className="px-6 max-w-5xl mx-auto mb-28">
        <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
          <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
          <p className="text-zinc-400 leading-relaxed mb-5">
            We started in 2022 as a creative design studio focused on branding and visual identity for startups and SMEs.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-5">
            We then expanded into web development, building high-performance digital platforms and modern UI systems.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-5">
            Today we deliver AI systems, cloud infrastructure, automation tools, and scalable digital ecosystems.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Our mission is to help businesses scale globally through intelligent technology.
          </p>
        </div>
      </section>

      {/* ================= SERVICES (WITH REAL ICONS) ================= */}
      <section className="px-6 max-w-6xl mx-auto mb-28">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
          {[
            { icon: Globe, title: "Web Development", desc: "High-performance, scalable web applications built with modern frameworks." },
            { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform iOS & Android apps with seamless UX." },
            { icon: Palette, title: "UI/UX Design", desc: "Premium interface design focused on user experience." },
            { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven marketing and business scaling strategies." },
            { icon: Cloud, title: "Cloud Solutions", desc: "Secure, scalable cloud infrastructure and deployment." },
            { icon: Cpu, title: "AI & Automation", desc: "Smart AI systems that automate business workflows." },
            { icon: Gift, title: "Digital Experiences", desc: "Interactive digital products and creative experiences." },
            { icon: ShieldCheck, title: "Business Systems", desc: "Enterprise-grade solutions for business optimization." },
            { icon: CreditCard, title: "E-Commerce Systems", desc: "Secure online stores and payment integrations." }
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition">
             <div className="flex gap-4 items-center mb-2">
                <div>
                    <s.icon className="text-blue-400 mb-2" size={20} />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold mb-1">{s.title}</h3>
                </div>
             </div>
              <p className="text-zinc-400 text-[10px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="px-6 max-w-6xl mx-auto mb-28">
        <h2 className="text-4xl font-bold text-center mb-12">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Innovation", desc: "We push boundaries using cutting-edge technology." },
            { title: "Excellence", desc: "We deliver premium quality in every project." },
            { title: "Scalability", desc: "We build systems designed for global growth." }
          ].map((v, i) => (
            <div key={i} className="p-5 rounded-3xl bg-white/[0.02] border border-white/10">
              <div className="flex gap-4 items-center">
                <div>
                     <ShieldCheck className="text-blue-400 mb-3" />
                </div>
                <div>
                     <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                </div>
              </div>
              <p className="text-zinc-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center pb-32">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Something Powerful Together</h2>
        <button className="px-10 py-4 bg-white text-black rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-blue-500 hover:text-white transition">
          Get Started <ArrowRight size={18} />
        </button>
      </section>

    </div>
  );
}