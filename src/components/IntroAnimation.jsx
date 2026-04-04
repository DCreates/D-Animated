import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Motion = motion;

export default function IntroAnimation({ onFinish }) {
  const [move, setMove] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMove(true), 1200);
    const t2 = setTimeout(() => onFinish(), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <Motion.h1
        initial={{ scale: 1.8, opacity: 0 }}
        animate={
          move
            ? {
                x: "-35vw",
                y: "-45vh",
                scale: 0.5,
              }
            : {
                scale: 1,
                opacity: 1,
              }
        }
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 18,
        }}
        className="text-white text-5xl font-bold"
      >
       <img
          src="/images/l2.png"
          alt="Globus Logo"
          className="h-15 w-auto object-contain"
        />
      </Motion.h1>
    </div>
  );
}