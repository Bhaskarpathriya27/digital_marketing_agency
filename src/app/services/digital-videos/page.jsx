"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import {
  Film,
  Video,
  PlayCircle,
  BadgeCheck,
  Users,
  Layers3,
  Sparkles,
} from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function DigitalVideosPage() {
  const { setIsModalOpen } = useModal();

  const videoTypes = [
    {
      title: "Promo Videos",
      desc: "Grab attention fast with short, punchy videos that promote offers and new services.",
      icon: PlayCircle,
    },
    {
      title: "Explainer Animations",
      desc: "Turn complexity into clarity with animated explainers crafted for conversions.",
      icon: Sparkles,
    },
    {
      title: "Testimonial Reels",
      desc: "Build trust with authentic customer testimonials, edited for social traction.",
      icon: Users,
    },
    {
      title: "Brand Films",
      desc: "Visually stunning storytelling aligned with your brand voice and vision.",
      icon: Layers3,
    },
  ];

  const benefits = [
    {
      title: "Scroll-Stopping Designs",
      desc: "We optimize for first-frame impact — keeping eyes on your message from the first second.",
      icon: Video,
    },
    {
      title: "Multi-Platform Delivery",
      desc: "Videos are delivered in platform-optimized sizes — Reels, YouTube, Ads, and Stories.",
      icon: Film,
    },
    {
      title: "Trusted By Brands",
      desc: "Our videos have been used by agencies, startups, and global brands for key campaigns.",
      icon: BadgeCheck,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-28 px-6 md:px-16 bg-[#181818] text-white overflow-hidden relative">
        <motion.div
          className="absolute top-12 left-12 w-40 h-40 bg-[#a78bfa]/20 rounded-full blur-2xl z-0"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#c4b5fd]/10 rounded-full blur-xl z-0"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Powerful <span className="text-[#a78bfa]">Digital Videos</span>{" "}
              that Tell & Sell
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Cut through the noise with short-form, scroll-stopping video
              content — made to perform across platforms.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              We specialize in branded animations, product explainers, and
              campaign teasers that don’t just look great — they convert.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#a78bfa] text-black px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Request Sample Reel{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#a78bfa]/10 border border-[#c4b5fd]/20">
              <Film size={120} className="text-[#a78bfa]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types of Videos */}
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#a78bfa]">Video Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            From strategy to scripts to final edit — we handle the whole
            journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {videoTypes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1f1f1f] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#a78bfa]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30">
                <item.icon className="text-[#a78bfa] w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Our Videos Work */}
      <section className="py-28 px-6 md:px-16 bg-[#181818] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Our <span className="text-[#a78bfa]">Videos Perform</span>
          </h2>
          <p className="text-gray-400 text-lg">
            It’s not just about aesthetics — it’s about results, engagement, and
            brand love.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#a78bfa]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30">
                <item.icon className="text-[#a78bfa] w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#a78bfa] text-black px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
          >
            Enquire Now <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
          </button>
        </div>
      </section>
    </>
  );
}
