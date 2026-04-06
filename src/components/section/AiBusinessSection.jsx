import { FaCheckCircle, FaExchangeAlt } from "react-icons/fa";

export default function AiBusinessSection() {
  const capabilityCards = [
    {
      title: "We Believe in Long-Term Trust",
      description:
        "Every project is built with transparency, accountability, and consistent communication from day one.",
      icon: null,
    },
    {
      title: "Security Is a Core Commitment",
      description:
        "From architecture to deployment, we protect your data and systems with secure-by-design practices.",
      icon: <FaCheckCircle className="mt-1 text-emerald-300" />,
    },
    {
      title: "Client Satisfaction Drives Our Delivery",
      description:
        "We focus on quality execution, measurable outcomes, and support that keeps clients confident.",
      icon: <FaExchangeAlt className="mt-1 text-sky-300" />,
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT SIDE - CARDS */}
        <div className="space-y-5">
          {capabilityCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/30"
            >
              <div className="flex items-start gap-3">
                {card.icon}
                <div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div>
          <p className="mb-3 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
            Our Core Beliefs
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Built on Security, Trusted by Clients
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            Our company belief is simple: deliver secure, reliable solutions that
            create real value and lasting client satisfaction. Every engagement is
            shaped around trust, performance, and professional execution.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-xl font-semibold text-white">98%</p>
              <p className="mt-1 text-slate-300">Client Satisfaction Focus</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-xl font-semibold text-white">24h</p>
              <p className="mt-1 text-slate-300">Support Response Standard</p>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/80 px-5 py-3 text-sm font-medium tracking-[0.18em] text-black backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)] transition hover:bg-white/20 hover:text-amber-50"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}