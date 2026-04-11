import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap, Command } from "lucide-react";
import { products } from "../data/products.js";

// Mock products data (replace with your import)


export default function PremiumUI() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % products.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getCard = (offset) => products[(index + offset + products.length) % products.length];

  return (
    <div className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* HEADER CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase">System Ready 2.0</span>
            </div>
            
            <h1 className="text-6xl md:text-[7rem] font-bold tracking-tighter mb-8 leading-[0.85] text-white">
              Built for <br /> the frontier<span className="text-blue-500">.</span>
            </h1>
            
            <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Standardized infrastructure for world-class engineering teams. 
              Precision tools for modern deployment.
            </p>
          </motion.div>

          {/* CAROUSEL UNIT */}
          <div className="relative w-full max-w-6xl flex flex-col items-center">
            
            <div className="flex items-center justify-center gap-4 md:gap-12 w-full">
              {/* SIDE CARDS (Desktop Only) */}
              <div className="hidden xl:block w-[300px] opacity-10 scale-90 blur-sm pointer-events-none transition-all duration-700">
                <StaticCard item={getCard(-1)} />
              </div>

              {/* ACTIVE FOCUS CARD */}
              <div className="w-full max-w-[500px] perspective-[2000px] z-10">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={index}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: direction * -40, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <InteractiveCard item={getCard(0)} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="hidden xl:block w-[300px] opacity-10 scale-90 blur-sm pointer-events-none transition-all duration-700">
                <StaticCard item={getCard(1)} />
              </div>
            </div>

            {/* CONTROLS (Desktop & Mobile optimized) */}
            <div className="flex items-center gap-6 mt-4">
              <button 
                onClick={prev} 
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-zinc-900/50 hover:bg-zinc-800 hover:border-white/20 transition-all backdrop-blur-md"
              >
                <ChevronLeft size={24} className="text-zinc-400 group-hover:text-white transition-colors" />
              </button>
              
              <div className="flex gap-2">
                {products.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 transition-all duration-500 rounded-full ${index === i ? "w-8 bg-blue-500" : "w-2 bg-zinc-800"}`} 
                  />
                ))}
              </div>

              <button 
                onClick={next} 
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-zinc-900/50 hover:bg-zinc-800 hover:border-white/20 transition-all backdrop-blur-md"
              >
                <ChevronRight size={24} className="text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER ACTION */}
      <section className="py-6 px-6 border-t border-white/[0.03] bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 tracking-tight">Ready to integrate?</h2>
          <p className="text-zinc-500 mb-10">Start your 14-day free trial. No credit card required.</p>
          
          <div className="flex flex-col sm:flex-row gap-3 p-1.5 bg-zinc-900/40 border border-white/10 rounded-2xl backdrop-blur-xl ring-1 ring-white/5 shadow-2xl">
            <input 
              type="email" 
              placeholder="work@email.com" 
              className="flex-grow bg-transparent px-5 py-3.5 text-sm focus:outline-none placeholder:text-zinc-500"
            />
            <button className="bg-white text-black text-sm font-bold px-8 py-3.5 rounded-xl hover:bg-blue-500 hover:text-white transition-all transform active:scale-95 shadow-xl">
              Get Full Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function InteractiveCard({ item }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glow, setGlow] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rX = (y / rect.height - 0.5) * -12;
    const rY = (x / rect.width - 0.5) * 12;
    
    setRotateX(rX);
    setRotateY(rY);
    setGlow({ x, y, opacity: 1 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setRotateX(0); setRotateY(0); setGlow({ ...glow, opacity: 0 }); }}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative w-full bg-[#0a0a0a] border border-white/10 rounded-[40px] p-10 md:p-12 shadow-[0_0_80px_-20px_rgba(0,0,0,1)] overflow-hidden group"
    >
      {/* MOUSE GLOW */}
      <div 
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${glow.x}px ${glow.y}px, rgba(59,130,246,0.08), transparent 80%)`,
          inset: 0,
          opacity: glow.opacity
        }}
      />

      <div className="relative z-10 flex flex-col h-105 md:h-115">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-500 bg-blue-500/10 px-2 py-1 rounded-md">
            {item.category}
          </span>
          <Command size={20} className="text-zinc-700 group-hover:text-blue-500 transition-colors" />
        </div>

        <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tighter leading-tight">
          {item.title}
        </h3>
        
        <p className="text-zinc-500 leading-relaxed text-base mb-6 font-normal">
          {item.description}
        </p>

        <div className="grid gap-4 mb-16">
          {item.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-4 text-sm text-zinc-400">
              <div className="h-[2px] w-3 bg-blue-500" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between mt-[-30px]">
          <div>
            <span className="block text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-2">Project Price</span>
            <div className="flex items-baseline gap-1">
              <span className="text-[20px] md:text-3xl font-bold text-white tracking-tighter">{item.price}</span>
            </div>
          </div>
          
          <button className="flex items-center justify-center h-9 px-4 gap-2 rounded-2xl bg-white text-black font-bold text-sm hover:bg-blue-500 hover:text-white transition-all group/btn">
            Provision
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function StaticCard({ item }) {
  return (
    <div className="w-full bg-zinc-900/10 border border-white/5 rounded-[40px] p-12">
       <div className="h-4 w-20 bg-zinc-800 rounded-md mb-12" />
       <h3 className="text-3xl font-bold text-zinc-800 mb-6">{item.title}</h3>
       <div className="space-y-4">
         <div className="h-1.5 w-full bg-zinc-900 rounded" />
         <div className="h-1.5 w-2/3 bg-zinc-900 rounded" />
       </div>
    </div>
  );
}