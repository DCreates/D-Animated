import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Motion = motion;

export default function IntroAnimation({ onFinish }) {
  const [phase, setPhase] = useState("outline");

  useEffect(() => {
    const fillTimer = setTimeout(() => {
      setPhase("fill");
    }, 850);

    const holdTimer = setTimeout(() => setPhase("hold"), 1800);
    const endTimer = setTimeout(() => onFinish(), 2500);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(holdTimer);
      clearTimeout(endTimer);
    };
  }, [onFinish]);

  const shouldShowFill = phase !== "outline";

  return (
    <Motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="relative">
        {/* <Motion.img
          src="/images/DCreates.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-16 w-auto -translate-x-1/2 -translate-y-1/2 object-contain sm:h-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: shouldShowOutline ? 1 : 0,
            scale: isOutline ? [1, 1.03, 1] : 1,
          }}
          transition={{
            opacity: { duration: 0.25, ease: "easeOut" },
            scale: { duration: 0.65, ease: "easeInOut" },
          }}
          style={{
            filter:
              "brightness(0) saturate(0) invert(1) drop-shadow(0 0 0.8px rgba(255,255,255,0.95)) drop-shadow(0 0 12px rgba(255,255,255,0.2))",
          }}
        /> */}

        <Motion.img
          layoutId="brand-logo"
          src="/images/d lg.svg"
          alt="Globus Logo"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: shouldShowFill ? 1 : 0, scale: 1 }}
          transition={{ opacity: { duration: 0.25 }, scale: { duration: 0.35 } }}
          className="relative h-8 w-auto object-contain sm:h-20"
        />
      </div>
    </Motion.div>
  );
}