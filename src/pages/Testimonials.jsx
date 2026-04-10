import { useState, useEffect } from "react";

export default function PremiumTestimonials() {
  const testimonials = [
    { id: 1, name: "Sophia Carter", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop", quote: "This platform transformed our workflow completely. The attention to detail and premium experience exceeded every expectation.", rating: 5 },
    { id: 2, name: "Daniel Brooks", role: "Startup Founder", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop", quote: "The interface feels incredibly polished and intuitive. It has the same level of refinement you would expect from Apple.", rating: 5 },
    { id: 3, name: "Emma Wilson", role: "Marketing Lead", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop", quote: "Beautiful, seamless, and thoughtfully crafted. Every interaction feels smooth and premium.", rating: 4 },
    { id: 4, name: "Michael Chen", role: "Product Designer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop", quote: "A stunning experience from start to finish. The visual design alone impressed our entire team.", rating: 5 },
    { id: 5, name: "Ava Martinez", role: "Business Consultant", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop", quote: "The clean design and elegant motion made our brand feel more premium instantly.", rating: 5 },
  ];

  const [active, setActive] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  return (
    <section className="min-h-screen bg-[#050505] flex items-center justify-center px-6 py-24 selection:bg-white/30">
      <div className="w-full max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 mb-6">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Voices of <span className="text-white/40">Innovation.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Partnering with world-class teams to redefine digital boundaries through precision and craft.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Image Stack */}
          <div className="lg:col-span-5 relative h-[400px] flex items-center justify-center overflow-hidden">
            {testimonials.map((item, index) => {
              const isActive = index === active;
              const offset = index - active;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActive(index);
                    setIsAutoPlaying(false);
                  }}
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `
                      translateX(${offset * 140}px)
                      scale(${isActive ? 1 : 0.85})
                    `,
                    zIndex: isActive ? 30 : 10,
                    opacity: Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.4,
                  }}
                >
                  <div className="rounded-3xl overflow-hidden shadow-xl border border-white/10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-64 h-80 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Content Card */}
          <div className="lg:col-span-7">
            <div className="relative p-8 md:p-12 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-3xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 blur-[100px] rounded-full" />
              
              <div key={active} className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                
                {/* Progress Bars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials.length)].map((_, i) => (
                    <div key={i} className="h-1 w-8 rounded-full bg-white/10 overflow-hidden">
                      <div className={`h-full bg-white transition-all duration-[5000ms] ease-linear ${i === active && isAutoPlaying ? 'w-full' : (i < active ? 'w-full' : 'w-0')}`} />
                    </div>
                  ))}
                </div>

                {/* Star Rating System */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonials[active].rating ? "text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" : "text-white/10"}`} 
                    />
                  ))}
                </div>

                <svg className="w-10 h-10 text-white/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H15.017C13.9124 7 13.017 7.89543 13.017 9V15L11.017 15V9C11.017 6.23858 13.2556 4 16.017 4H19.017C21.7784 4 24.017 6.23858 24.017 9V14C24.017 17.866 20.883 21 17.017 21H14.017ZM0 21L0 18C0 16.8954 0.89543 16 2 16H5V14C5 12.8954 4.10457 12 3 12H1C0.447715 12 0 11.5523 0 11V9C0 6.23858 2.23858 4 5 4H8C10.7614 4 13 6.23858 13 9V15L11 15V9C11 7.89543 10.1046 7 9 7H5C3.89543 7 3 7.89543 3 9V14C3 17.866 6.13401 21 10 21H0Z" />
                </svg>

                <p className="text-2xl md:text-3xl font-light text-white/90 leading-snug mb-10 tracking-tight">
                  {testimonials[active].quote}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium text-lg tracking-tight">{testimonials[active].name}</h4>
                    <p className="text-white/40 text-sm">{testimonials[active].role}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => { setActive(active === 0 ? testimonials.length - 1 : active - 1); setIsAutoPlaying(false); }}
                      className="p-4 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <ArrowLeftIcon className="w-5 h-5 text-white/60 group-hover:text-white" />
                    </button>
                    <button 
                      onClick={() => { setActive((active + 1) % testimonials.length); setIsAutoPlaying(false); }}
                      className="p-4 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <ArrowRightIcon className="w-5 h-5 text-white/60 group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Icon Components
function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ArrowLeftIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}