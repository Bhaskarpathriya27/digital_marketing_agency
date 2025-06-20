"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import Lenis from "@studio-freight/lenis";
import {
  Globe,
  TrendingUp,
  Users,
  Search,
  Layers,
  BarChart,
} from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function WebTrafficPage() {
  const { setIsModalOpen } = useModal();

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const strategy = [
    {
      title: "SEO Foundations",
      desc: "On-page optimization, technical SEO, site speed, mobile-friendliness, and schema markup.",
      icon: Search,
    },
    {
      title: "Content Marketing",
      desc: "Create blogs, guides, and visuals that rank, share, and engage — built to attract ideal prospects.",
      icon: Layers,
    },
    {
      title: "Paid Traffic Boost",
      desc: "Targeted Google & Meta ads that drive qualified traffic to landing pages & listings.",
      icon: BarChart,
    },
    {
      title: "Local Optimization",
      desc: "Google Business Profiles, maps visibility, and review signals that dominate local search.",
      icon: Users,
    },
  ];

  const benefits = [
    {
      title: "Higher Quality Visitors",
      desc: "Attract prospects actively searching for real estate solutions.",
      icon: Globe,
    },
    {
      title: "Increased Dwell Time",
      desc: "Keep visitors engaged with content-rich and fast-loading pages.",
      icon: Layers,
    },
    {
      title: "More Inbound Leads",
      desc: "Drive more form submissions, WhatsApp messages, and call requests.",
      icon: Users,
    },
    {
      title: "Better SEO Rankings",
      desc: "Improve your visibility on Google and outrank competitors.",
      icon: TrendingUp,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen relative flex items-center py-28 px-6 md:px-16 bg-[#181818] text-white overflow-hidden">
        <motion.div
          className="absolute top-16 left-12 w-36 h-36 bg-[#6ee7b7]/20 rounded-full blur-2xl z-0"
          animate={{ y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 right-16 w-28 h-28 bg-[#a7f3d0]/20 rounded-full blur-xl z-0"
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
              Skyrocket Your Website{" "}
              <span className="text-[#34d399]">Traffic</span> & Lead Pipeline
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Fuel your growth with a blend of SEO, paid campaigns, and organic
              content strategies tailored for real estate.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Whether it's search engines or social channels, we help you
              attract the right visitors and convert them into quality leads.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#34d399] text-black px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Get My Traffic Plan{" "}
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
            <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#6ee7b7]/10 border border-[#a7f3d0]/20">
              <Globe size={120} className="text-[#34d399]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-16 bg-[#111] text-white relative overflow-hidden">
        <div className="absolute -top-16 left-0 w-64 h-64 bg-[#6ee7b7]/10 blur-2xl rounded-full z-0" />
        <div className="absolute -bottom-20 right-0 w-64 h-64 bg-[#a7f3d0]/10 blur-2xl rounded-full z-0" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Traffic That{" "}
              <span className="text-[#34d399]">Delivers Business</span>
            </h2>
            <p className="text-gray-400 mb-5">
              Web traffic is the fuel that drives brand discovery, trust, and
              lead flow. But not all traffic is equal — we help you get found by
              the right people, at the right time, on the right channel.
            </p>
            <p className="text-gray-400">
              At RealtyDigi, we blend SEO, SEM, and conversion-focused content
              to ensure your real estate website becomes a powerful lead magnet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-3xl bg-[#6ee7b7]/10 border border-[#a7f3d0]/20 p-12 text-center text-[#34d399] text-xl font-semibold"
          >
            Real Visitors. Real Leads. Real Estate Growth.
          </motion.div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-28 px-6 md:px-16 bg-[#181818] text-white overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#34d399]">Web Traffic Strategy</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A holistic, data-backed traffic system designed to increase
            discovery and conversions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {strategy.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#1f1f1f] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#34d399]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#34d399]/10 border border-[#34d399]/30">
                <item.icon className="text-[#34d399] w-6 h-6" />
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
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Web Traffic That <span className="text-[#34d399]">Converts</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Traffic is meaningless if it doesn’t generate leads. We focus on
            traffic that performs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#34d399]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#34d399]/10 border border-[#34d399]/30">
                <item.icon className="text-[#34d399] w-6 h-6" />
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
            className="bg-[#34d399] text-black px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
          >
            Enquire Now <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
          </button>
        </div>
      </section>
    </>
  );
}
