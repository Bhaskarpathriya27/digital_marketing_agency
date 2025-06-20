"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useModal } from "@/context/ModalContext";
import {
  Search,
  MousePointerClick,
  BarChart2,
  Users,
  Layers,
  Zap,
  TrendingUp,
  ThumbsUp,
  Eye,
  DollarSign,
} from "lucide-react";

export default function GoogleAdwordsHero() {
  const { setIsModalOpen } = useModal();

  const steps = [
    {
      title: "Step 1: Research & Targeting",
      description:
        "We identify high-intent keywords and laser-targeted audience segments that align with your real estate goals.",
      icon: Search,
    },
    {
      title: "Step 2: Ad Copy & Creative",
      description:
        "Our team writes compelling ad copy and visuals that grab attention and increase click-through rates.",
      icon: MousePointerClick,
    },
    {
      title: "Step 3: Campaign Setup",
      description:
        "We build your AdWords campaigns from scratch or restructure for efficiency — including extensions and tracking.",
      icon: Layers,
    },
    {
      title: "Step 4: Ongoing Optimization",
      description:
        "Your campaign is continuously optimized for better ROI through bid adjustments, A/B tests, and audience refinement.",
      icon: BarChart2,
    },
    {
      title: "Step 5: Lead Tracking & Reporting",
      description:
        "We monitor conversions and provide detailed performance reports with transparent metrics that matter to you.",
      icon: Users,
    },
  ];

  const benefits = [
    {
      title: "Instant Visibility",
      desc: "Get in front of buyers & sellers searching on Google in real-time.",
      icon: Eye,
    },
    {
      title: "Cost Efficiency",
      desc: "Only pay for clicks that matter. Control budget & bids.",
      icon: DollarSign,
    },
    {
      title: "Quality Leads",
      desc: "Laser-focused targeting delivers high-converting prospects.",
      icon: TrendingUp,
    },
    {
      title: "Speed to Market",
      desc: "Go live in hours, not weeks. Run campaigns with agility.",
      icon: Zap,
    },
    {
      title: "Performance Tracking",
      desc: "Transparent reporting with actionable metrics.",
      icon: BarChart2,
    },
    {
      title: "Trusted Expertise",
      desc: "Certified AdWords strategists with real estate specialization.",
      icon: ThumbsUp,
    },
  ];

  return (
    <>
      <section className="min-h-screen flex items-center relative py-28 px-6 md:px-16 overflow-hidden text-white bg-[#181818]">
        {/* Soft glow accents */}
        <motion.div
          className="absolute top-16 left-10 w-36 h-36 bg-[#e0f2fe]/20 rounded-full blur-2xl z-0"
          animate={{ y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-24 h-24 bg-[#bae6fd]/20 rounded-full blur-xl z-0"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Drive Instant <span className="text-[#38bdf8]">Results</span> with
              Expert Google AdWords Campaigns
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Maximize visibility, clicks, and conversions with our
              performance-driven AdWords strategies tailored for the real estate
              sector.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              From keyword research to campaign management — we help you outrank
              competitors and capture high-intent leads at scale.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#38bdf8] text-black px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
              >
                Enquire Now{" "}
                <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
              </button>
            </div>
          </motion.div>

          {/* Right Icon Bubble */}
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
            <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#bae6fd]/10 border border-[#bae6fd]/20">
              <Search size={120} className="text-[#38bdf8]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About AdWords Section */}
      <section className="relative py-24 px-6 md:px-16 overflow-hidden bg-[#111] text-white">
        <div className="absolute -top-20 left-10 w-72 h-72 bg-[#bae6fd]/10 blur-2xl rounded-full z-0" />
        <div className="absolute -bottom-20 right-10 w-64 h-64 bg-[#e0f2fe]/10 blur-2xl rounded-full z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Google AdWords is a{" "}
              <span className="text-[#38bdf8]">Game-Changer</span> for Real
              Estate
            </h2>
            <p className="text-gray-400 mb-5">
              In a hyper-competitive digital market, your visibility can make or
              break your real estate business. Google AdWords allows you to
              target buyers and sellers precisely when they're searching — no
              guesswork, no wasted spend.
            </p>
            <p className="text-gray-400">
              Our team at RealtyDigi builds highly-optimized, ROI-focused
              campaigns that combine data, design, and copy to convert attention
              into leads. Whether it's location-based targeting, custom
              audiences, or remarketing — we help you get found, get leads, and
              grow faster.
            </p>
          </motion.div>

          {/* Right Visual or Vector Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full h-[300px] rounded-3xl bg-[#bae6fd]/10 border border-[#bae6fd]/20 flex items-center justify-center text-[#38bdf8] text-xl font-semibold">
              {/* Replace with icon/image if needed */}
              AdWords Reach Engine
            </div>
          </motion.div>
        </div>
      </section>

      {/* How AdWords Works Section */}
      <section className="relative py-28 px-6 md:px-16 bg-[#111] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#38bdf8]/10 blur-2xl rounded-full z-0" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#38bdf8]/10 blur-2xl rounded-full z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#38bdf8]">AdWords Process</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We simplify Google Ads into a strategic flow that delivers results
              for real estate businesses of all sizes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#181818] rounded-2xl border border-white/5 px-6 py-10 text-center shadow-md hover:shadow-[#38bdf8]/10 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[#38bdf8]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#38bdf8] text-black px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
            >
              Enquire Now{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 md:px-16 bg-[#181818] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#bae6fd]/10 blur-2xl rounded-full z-0" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#38bdf8]/10 blur-2xl rounded-full z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Run <span className="text-[#38bdf8]">Google Ads</span> with
              Us?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Every click counts — that’s why we build AdWords campaigns that
              don’t just bring traffic, but deliver measurable ROI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#1a1a1a] border border-white/5 rounded-2xl px-6 py-10 text-center shadow hover:shadow-[#38bdf8]/10 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20">
                  <item.icon className="text-[#38bdf8] w-6 h-6" />
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
              className="bg-[#38bdf8] text-black px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
            >
              Book My AdWords Plan{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
