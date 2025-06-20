"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Step8_ThankYou() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const router = useRouter();

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const toastId = toast.success("Redirecting you to homepage...", {
      duration: 5000,
      icon: "🚀",
    });

    const timeout = setTimeout(() => {
      router.push("/");
    }, 7000);

    const confettiTimeout = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(confettiTimeout);
      toast.dismiss(toastId);
    };
  }, [router]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className=" flex items-center justify-center px-4 py-10"
    >
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={200}
          recycle={false}
        />
      )}

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className=" text-white w-full max-w-xl rounded-3xl border border-white/10 px-10 py-12 text-center shadow-xl"
      >
        {/* Glowing Pulse Icon */}
        <div className="relative flex justify-center mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-20 h-20 bg-emerald-500/20 rounded-full"
            />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
              delay: 0.4,
            }}
            className="relative z-10 bg-emerald-500 rounded-full p-4"
          >
            <CheckCircle2 className="text-white w-10 h-10" />
          </motion.div>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-3xl font-bold mb-3"
        >
          Thank You!
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="text-gray-400 text-lg"
        >
          We’ve received your request and our team will get back to you shortly.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="text-sm text-gray-500 mt-2"
        >
          You’re one step closer to digital success <span>🚀</span>
        </motion.p>

        {/* Button Fallback */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
