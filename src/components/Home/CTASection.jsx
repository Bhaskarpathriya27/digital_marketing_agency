"use client";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useModal } from "@/context/ModalContext";

export default function CTASection() {
  const { setIsModalOpen } = useModal();
  return (
    <section className="relative overflow-hidden py-24 bg-[#0f051d]">
      {/* CRAZY Animated Gradient Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-30 blur-[150px] rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-30 blur-[120px] rounded-full bottom-[-80px] right-[-100px] animate-spin-slow" />
        <div className="absolute w-[350px] h-[350px] bg-yellow-400 opacity-20 blur-[100px] rounded-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-bounce" />
      </div>

      {/* CTA Content */}
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
          Let’s Drive Real Leads To Your Business 🚀
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Whether you're launching a new product or scaling an existing service
          — our proven marketing strategies bring targeted traffic and real
          conversions.
        </p>

        <motion.button
          whileHover={{
            scale: 1.08,
            rotate: [0, 2, -2, 0], // works now
            backgroundColor: "#9333EA",
            boxShadow: "0px 10px 30px rgba(147, 51, 234, 0.5)",
          }}
          onClick={() => setIsModalOpen(true)}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="inline-flex items-center cursor-pointer gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-md hover:shadow-purple-500/30"
        >
          <EnvelopeIcon className="w-5 h-5" />
          Let’s Talk Leads
        </motion.button>
      </motion.div>
    </section>
  );
}
