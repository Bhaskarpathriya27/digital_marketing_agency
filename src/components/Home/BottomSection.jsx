"use client";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import FeatureCard from "../Shared/FeatureCard";

const cards = [
  {
    title: "SEO Services",
    subtitle: "Google Rankings",
    imgSrc: "/mag.webp",
    position: "top-left",
    style: {
      background: "linear-gradient(135deg, #FFFFFF 0%, #F7F8FA 100%)",
      color: "#000",
    },
  },
  {
    title: "PPC Advertising",
    subtitle: "Google & Meta Ads",
    imgSrc: "/arrow2.png",
    position: "top-right",
    style: {
      background: "linear-gradient(135deg, #FF7A00 0%, #FF1A1A 100%)",
      color: "#FFF",
    },
  },
  {
    title: "Lead Generation",
    subtitle: "Capture & Convert",
    imgSrc: "/magnet.png",
    position: "center",
    style: {
      background: "linear-gradient(135deg, #e51617 50%, #E3E8EF 100%)",
      color: "#FFF",
    },
  },
  {
    title: "Analytics & CRM",
    subtitle: "Tracking + Retarget",
    imgSrc: "/mic.webp",
    position: "bottom-left",
    style: {
      background: "linear-gradient(135deg, #FFFFFF 0%, #ECEEF1 100%)",
      color: "#000",
    },
  },
  {
    title: "Social Media Ads",
    subtitle: "Instagram, FB, etc.",
    imgSrc: "/dashboard.png",
    position: "bottom-right",
    style: {
      background: "linear-gradient(135deg, #38BDF8 0%, #1E3A8A 100%)",
      color: "#FFF",
    },
  },
];

export default function BottomSection() {
  const { setIsModalOpen } = useModal();

  const gridClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 scale-110",
  };

  return (
    <section className="relative py-24 overflow-hidden mx-auto">
      {/* Gradient blobs */}

      {/* Absolute layout container */}
      <div className="relative w-full h-[500px] max-w-7xl mx-auto">
        {/* Soft Glow Behind Center Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-yellow-400 opacity-20 blur-[120px] z-0"></div>

        {/* Feature Cards */}
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`absolute ${gridClasses[card.position]}`}
          >
            <FeatureCard
              title={card.title}
              subtitle={card.subtitle}
              imgSrc={card.imgSrc}
              style={card.style}
              index={i}
            />
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20 z-10 relative">
        <h2 className="text-white text-2xl font-semibold mb-4">
          Get expert help with Funnels, Ads & SEO — all under one roof.
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-white text-black font-semibold rounded-full transition hover:bg-gray-200"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
