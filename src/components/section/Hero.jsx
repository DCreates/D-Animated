import { motion as Motion } from "framer-motion";

const TITLE_LINES = [
  "Innovative AI chatbot",
  "solutions tailored for business.",
];

const lineVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

export default function Hero({ introDone = true }) {
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center">
      {/* 🔵 Background Glow Effect */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      {/* 🟢 Content */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        {/* Rating */}
        <p className="text-sm text-gray-400 mb-4">★★★★★ 4.7 (1k+ Reviews)</p>

        {/* Title */}
        <div className="relative overflow-hidden inline-block">
          {/* Base Text (dim) */}
          <h1 className="text-4xl md:text-6xl font-bold text-white/50">
            Innovative AI chatbot <br />
            solutions tailored for business.
          </h1>

          {/* Animated Overlay */}
          <Motion.h1
            className="absolute top-0 left-0 text-4xl md:text-6xl font-bold text-white"
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
          >
            {TITLE_LINES.map((line, lineIndex) => (
              <Motion.span
                key={line}
                variants={lineVariant}
                className="block"
                transition={{ delayChildren: lineIndex * 0.2 }}
              >
                {line.split("").map((char, charIndex) => (
                  <Motion.span
                    key={`${lineIndex}-${charIndex}-${char}`}
                    variants={letterVariant}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </Motion.span>
                ))}
              </Motion.span>
            ))}
          </Motion.h1>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Our expertise is in integrating NLP into your applications, bots, and
          IoT devices, optimizing workflows, and improving efficiency.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
            Let’s Talk
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </Motion.div>
    </div>
  );
}
