import { motion as Motion } from "framer-motion";
import { Fingerprint, UserRound, PartyPopper } from "lucide-react";

export default function AiBusinessSection() {
  const capabilityCards = [
    {
      title: "We Believe in Long-Term Trust",
      description:
        "Every project is built with transparency, accountability, and consistent communication from day one.",
      icon: UserRound,
    },
    {
      title: "Security Is a Core Commitment",
      description:
        "From architecture to deployment, we protect your data and systems with secure-by-design practices.",
      icon: Fingerprint,
    },
    {
      title: "Client Satisfaction Drives Our Delivery",
      description:
        "We focus on quality execution, measurable outcomes, and support that keeps clients confident.",
      icon: PartyPopper,
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-black px-6 py-24 text-white sm:px-10 lg:px-16 overflow-hidden">
      
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {capabilityCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-white/30 transition"
              >
                <div className="flex items-start gap-4">
                  
                  {/* ICON */}
                  <Motion.div
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative"
                  >
                    <div className="w-22 h-22 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition">
                      <Icon className="w-11 h-11 text-white/90" />
                    </div>
                  </Motion.div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {card.description}
                    </p>
                  </div>

                </div>
              </Motion.div>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-cyan-300/30 bg-white/10 px-5 py-2 text-xs font-medium tracking-[0.18em] text-white backdrop-blur-xl">
            Our Core Beliefs
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Built on Security, Trusted by Clients
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            Our company belief is simple: deliver secure, reliable solutions that
            create real value and lasting client satisfaction. Every engagement is
            shaped around trust, performance, and professional execution.
          </p>

          {/* STATS */}
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm hover:border-white/30 transition">
              <p className="text-2xl font-bold">98%</p>
              <p className="mt-1 text-slate-300">Client Satisfaction</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm hover:border-white/30 transition">
              <p className="text-2xl font-bold">24h</p>
              <p className="mt-1 text-slate-300">Support Response</p>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={scrollToContact}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-white hover:border-white"
          >
            Get in Touch
          </button>
        </div>

      </div>
    </section>
  );
}