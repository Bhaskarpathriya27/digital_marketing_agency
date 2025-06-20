"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import {
  Video,
  Film,
  PlayCircle,
  Users,
  Star,
  Smile,
  MonitorPlay,
  ThumbsUp,
} from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function VideoMarketingPage() {
  const { setIsModalOpen } = useModal();

  const services = [
    {
      title: "Property Reels",
      desc: "Short-form vertical videos for Instagram & Facebook designed to go viral.",
      icon: PlayCircle,
    },
    {
      title: "Explainer Videos",
      desc: "Animated explainers that convey your services clearly and creatively.",
      icon: Film,
    },
    {
      title: "Drone Walkthroughs",
      desc: "Aerial views of properties shot with cinematic drone technology.",
      icon: MonitorPlay,
    },
    {
      title: "Client Testimonials",
      desc: "Authentic video stories that build trust and influence decisions.",
      icon: Users,
    },
  ];

  const benefits = [
    {
      title: "Higher Engagement",
      desc: "Video content gets 3x more engagement than static visuals.",
      icon: Smile,
    },
    {
      title: "Stronger Brand Recall",
      desc: "Memorable visuals stick longer in your audience’s mind.",
      icon: Star,
    },
    {
      title: "Improved SEO",
      desc: "Videos keep users on-site longer, helping you rank better.",
      icon: ThumbsUp,
    },
    {
      title: "Faster Conversions",
      desc: "Pages with video see 80% more conversion on average.",
      icon: Video,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center py-28 px-6 md:px-16 bg-[#181818] text-white overflow-hidden">
        <motion.div
          className="absolute top-10 left-16 w-36 h-36 bg-[#fbcfe8]/20 rounded-full blur-2xl z-0"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-24 h-24 bg-[#f9a8d4]/20 rounded-full blur-xl z-0"
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
              Captivate. Engage.{" "}
              <span className="text-[#ec4899]">Convert.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Amplify your real estate presence with short reels, walkthroughs,
              testimonials, and cinematic brand stories.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              From Instagram to YouTube, our video marketing solutions are
              designed to stop the scroll and start conversations.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#ec4899] text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Get Video Strategy{" "}
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
            <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#fbcfe8]/10 border border-[#f9a8d4]/20">
              <Video size={120} className="text-[#ec4899]" />
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
              <span className="text-[#ec4899]">Video</span> isn’t optional —
              it’s essential.
            </h2>
            <p className="text-gray-400 mb-5">
              Video content increases understanding of your brand and builds
              trust like no other format. It's not just a trend — it's the core
              of modern communication.
            </p>
            <p className="text-gray-400">
              We specialize in creating real estate-focused videos that tell
              your story, showcase properties, and drive clicks that convert.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#fbcfe8]/10 border border-[#f9a8d4]/20 p-12 rounded-3xl text-center text-[#ec4899] font-semibold text-xl"
          >
            Build a brand people can see, hear, and remember.
          </motion.div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-28 px-6 md:px-16 bg-[#181818] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Estate <span className="text-[#ec4899]">Video Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Choose your format — we’ll make it scroll-stopping.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1f1f1f] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#ec4899]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#ec4899]/10 border border-[#ec4899]/30">
                <item.icon className="text-[#ec4899] w-6 h-6" />
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
            Why <span className="text-[#ec4899]">Video Marketing</span> Works
          </h2>
          <p className="text-gray-400 text-lg">
            Drive performance with motion. It’s not just video — it’s your
            visual sales force.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#ec4899]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#ec4899]/10 border border-[#ec4899]/30">
                <item.icon className="text-[#ec4899] w-6 h-6" />
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
            className="bg-[#ec4899] text-white px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
          >
            Enquire Now <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
          </button>
        </div>
      </section>
    </>
  );
}
