"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import {
  Users2,
  Megaphone,
  UserPlus,
  HeartHandshake,
  ThumbsUp,
  GaugeCircle,
  Lightbulb,
} from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function InfluencerMarketingPage() {
  const { setIsModalOpen } = useModal();

  const creatorTiers = [
    {
      title: "Nano Influencers",
      desc: "Real people, real trust. High engagement from creators with under 10K followers.",
      icon: UserPlus,
    },
    {
      title: "Micro Influencers",
      desc: "Reach niche audiences with authentic creators who influence purchase behavior.",
      icon: Megaphone,
    },
    {
      title: "Branded Content",
      desc: "Custom campaigns with storytelling, product placements, and community engagement.",
      icon: Lightbulb,
    },
    {
      title: "Celebrity Shoutouts",
      desc: "Massive visibility and brand credibility via known personalities.",
      icon: HeartHandshake,
    },
  ];

  const benefits = [
    {
      title: "Higher Engagement",
      desc: "People trust people — influencer content generates 8x more engagement.",
      icon: ThumbsUp,
    },
    {
      title: "Faster Trust Building",
      desc: "Leverage established audience rapport and personal brand loyalty.",
      icon: Users2,
    },
    {
      title: "Cost-Efficient Scaling",
      desc: "Run distributed campaigns without the overhead of traditional ads.",
      icon: GaugeCircle,
    },
    {
      title: "Wider Brand Awareness",
      desc: "Reach new eyeballs and demographics with every creator partnership.",
      icon: Megaphone,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative py-28 px-6 md:px-16 bg-[#181818] text-white overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-[#ddd6fe]/20 rounded-full blur-2xl z-0"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-28 h-28 bg-[#c4b5fd]/20 rounded-full blur-xl z-0"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Build <span className="text-[#8b5cf6]">Trust at Scale</span> with
              Influencer Marketing
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Elevate your brand through voices that matter — from
              micro-creators to celebrities who connect with your audience.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              We manage the strategy, partnerships, and performance so you gain
              reach, relevance, and results.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#8b5cf6] text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Get Influencer Plan{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              x: [0, 10, -10, 10, 0],
              y: [0, -5, 5, -5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#ddd6fe]/10 border border-[#c4b5fd]/20">
              <Users2 size={120} className="text-[#8b5cf6]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-16 bg-[#111] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#8b5cf6]">Influencers</span> Shape
              Decisions
            </h2>
            <p className="text-gray-400 mb-5">
              Today’s buyers rely on trusted voices — not ads. Our influencer
              campaigns drive engagement, trust, and traffic through authentic
              content.
            </p>
            <p className="text-gray-400">
              Whether it's YouTube, Instagram, or niche platforms, we connect
              you with the right creators who inspire action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#ddd6fe]/10 border border-[#c4b5fd]/20 p-12 rounded-3xl text-center text-[#8b5cf6] font-semibold text-xl"
          >
            Influence is the new currency. Let your brand go viral — the trusted
            way.
          </motion.div>
        </div>
      </section>

      {/* Creator Tiers */}
      <section className="py-28 px-6 md:px-16 bg-[#181818] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Power of <span className="text-[#8b5cf6]">Influence</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We collaborate with trusted creators across tiers — local to
            celebrity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {creatorTiers.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1f1f1f] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#8b5cf6]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30">
                <item.icon className="text-[#8b5cf6] w-6 h-6" />
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

      {/* Benefits */}
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Influencer Marketing{" "}
            <span className="text-[#8b5cf6]">Works</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Authenticity. Reach. Impact. Here’s why brands trust creators.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#8b5cf6]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30">
                <item.icon className="text-[#8b5cf6] w-6 h-6" />
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
            className="bg-[#8b5cf6] text-white px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
          >
            Enquire Now <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
          </button>
        </div>
      </section>
    </>
  );
}
