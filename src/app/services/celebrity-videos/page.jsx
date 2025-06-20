"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import {
  Sparkles,
  Users2,
  Video,
  MessageCircle,
  ShieldCheck,
  Globe,
  Handshake,
} from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function CelebrityVideosPage() {
  const { setIsModalOpen } = useModal();

  const services = [
    {
      title: "Celebrity Shoutouts",
      desc: "Get personalized videos from influencers & celebs endorsing your brand.",
      icon: Sparkles,
    },
    {
      title: "Scripted Messages",
      desc: "We'll help write compelling, brand-aligned scripts for your video shoutout.",
      icon: MessageCircle,
    },
    {
      title: "High-Quality Video Delivery",
      desc: "HD/4K videos with branding, background music, and your call-to-action.",
      icon: Video,
    },
    {
      title: "Usage Rights",
      desc: "Commercial usage rights for ads, reels, landing pages, and campaigns.",
      icon: ShieldCheck,
    },
  ];

  const benefits = [
    {
      title: "Instant Trust",
      desc: "Celeb faces instantly establish credibility and remove hesitation from new users.",
      icon: Users2,
    },
    {
      title: "Boost Engagement",
      desc: "People stop scrolling when they see someone familiar — it's science and strategy.",
      icon: Handshake,
    },
    {
      title: "Global Influence",
      desc: "Whether regional stars or global icons, we help you reach the perfect audience.",
      icon: Globe,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-28 px-6 md:px-16 bg-[#181818] text-white overflow-hidden relative">
        <motion.div
          className="absolute top-12 left-12 w-40 h-40 bg-[#fde047]/20 rounded-full blur-2xl z-0"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute top-12 left-12 w-40 h-40 bg-[#fde047]/20 rounded-full blur-2xl z-0"
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
              Get <span className="text-[#fde047]">Celebrity Videos</span> That
              Sell
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              We connect your brand with well-known personalities to drive
              trust, buzz, and conversions.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              From shoutouts to full scripted promos, we manage it all — the
              celebrity, the shoot, the output.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#fde047] text-black px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Book a Celebrity{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#fde047]/10 border border-[#fde047]/20">
              <Sparkles size={120} className="text-[#fde047]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#fde047]">Celebrity Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We manage outreach, creative, delivery, and compliance for every
            celeb engagement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1f1f1f] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#fde047]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#fde047]/10 border border-[#fde047]/30">
                <item.icon className="text-[#fde047] w-6 h-6" />
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

      {/* Why It Works */}
      <section className="py-28 px-6 md:px-16 bg-[#181818] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-[#fde047]">Celebs Convert</span>
          </h2>
          <p className="text-gray-400 text-lg">
            When the right face meets your message — results follow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#fde047]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#fde047]/10 border border-[#fde047]/30">
                <item.icon className="text-[#fde047] w-6 h-6" />
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
            className="bg-[#fde047] text-black px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
          >
            Enquire Now <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
          </button>
        </div>
      </section>
    </>
  );
}
