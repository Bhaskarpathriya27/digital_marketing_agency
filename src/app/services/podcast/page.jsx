"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import {
  Mic2,
  Music,
  UploadCloud,
  Settings2,
  SignalHigh,
  Users2,
  Headphones,
} from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function PodcastMarketingPage() {
  const { setIsModalOpen } = useModal();

  const podcastServices = [
    {
      title: "Podcast Launch",
      desc: "We help you develop your concept, brand voice, and launch plan from scratch.",
      icon: Mic2,
    },
    {
      title: "Recording & Editing",
      desc: "Studio-quality production, editing, cleanup, and mastering every episode.",
      icon: Music,
    },
    {
      title: "Publishing & Distribution",
      desc: "Get listed on Spotify, Apple, Amazon, Google Podcasts, and more.",
      icon: UploadCloud,
    },
    {
      title: "Marketing & Growth",
      desc: "Custom campaigns to grow subscribers, reviews, and your audience.",
      icon: SignalHigh,
    },
  ];

  const podcastBenefits = [
    {
      title: "Full-Service Setup",
      desc: "Everything from logo, intro music, to launch strategy handled for you.",
      icon: Settings2,
    },
    {
      title: "Industry Experts",
      desc: "Experienced editors, show producers, and audio engineers on board.",
      icon: Users2,
    },
    {
      title: "Engaged Listeners",
      desc: "Build a community with high retention and meaningful interactions.",
      icon: Headphones,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-28 px-6 md:px-16 bg-[#181818] text-white overflow-hidden relative">
        <motion.div
          className="absolute top-12 left-12 w-40 h-40 bg-[#4ade80]/20 rounded-full blur-2xl z-0"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#86efac]/10 rounded-full blur-xl z-0"
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
              Launch a <span className="text-[#4ade80]">Podcast</span> That
              Builds Authority
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              From concept to distribution — we make podcasting effortless,
              professional, and powerful for your brand.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              We help businesses, coaches, and creators start, grow, and scale
              their voice through podcasting.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#4ade80] text-black px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Start Your Show{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#4ade80]/10 border border-[#86efac]/20">
              <Mic2 size={120} className="text-[#4ade80]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            End-to-End <span className="text-[#4ade80]">Podcast Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Every stage of your podcast journey — we manage it all, so you can
            focus on your voice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {podcastServices.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1f1f1f] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#4ade80]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30">
                <item.icon className="text-[#4ade80] w-6 h-6" />
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

      {/* Benefits Section */}
      <section className="py-28 px-6 md:px-16 bg-[#181818] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Our <span className="text-[#4ade80]">Podcasts Perform</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technical excellence, strategic marketing, and content that builds
            loyalty.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {podcastBenefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#4ade80]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30">
                <item.icon className="text-[#4ade80] w-6 h-6" />
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
            className="bg-[#4ade80] text-black px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
          >
            Enquire Now <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
          </button>
        </div>
      </section>
    </>
  );
}
