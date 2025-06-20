"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import {
  Brush,
  Image as ImageIcon,
  Sparkles,
  MonitorSmartphone,
  GalleryThumbnails,
  Layers,
  PaintBucket,
} from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function DigitalCreativesPage() {
  const { setIsModalOpen } = useModal();

  const categories = [
    {
      title: "Performance Banners",
      desc: "Data-driven banners crafted for high CTR across platforms.",
      icon: ImageIcon,
    },
    {
      title: "Social Media Creatives",
      desc: "Branded carousels, static posts, and stories that tell and sell.",
      icon: GalleryThumbnails,
    },
    {
      title: "Display Ads",
      desc: "Responsive HTML5 display ads designed for dynamic retargeting.",
      icon: MonitorSmartphone,
    },
    {
      title: "Brand Visual Systems",
      desc: "Cohesive brand identity across digital touchpoints.",
      icon: Layers,
    },
  ];

  const qualities = [
    {
      title: "Tailored For Conversion",
      desc: "Every creative asset is crafted with a business goal in mind.",
      icon: Sparkles,
    },
    {
      title: "Platform-Perfect Sizes",
      desc: "Designed for every format — Instagram, Meta Ads, Google Display, LinkedIn, and more.",
      icon: MonitorSmartphone,
    },
    {
      title: "On-Brand Every Time",
      desc: "Our system ensures consistency across all assets for max brand recall.",
      icon: PaintBucket,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-28 px-6 md:px-16 bg-[#181818] text-white overflow-hidden relative">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-[#fcd34d]/20 rounded-full blur-2xl z-0"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#facc15]/10 rounded-full blur-xl z-0"
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
              Digital <span className="text-[#facc15]">Creatives</span> That
              Convert & Captivate
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              We design with purpose — blending performance strategy with art
              direction to create assets that drive clicks, not just likes.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              From banners to branded social kits, your creatives will stand out
              in a scroll-heavy world.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#facc15] text-black px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Get Creative Plan{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#facc15]/10 border border-[#fcd34d]/20">
              <Brush size={120} className="text-[#facc15]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Creative <span className="text-[#facc15]">Deliverables</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Beautiful, responsive, and built for performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {categories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1f1f1f] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#facc15]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#facc15]/10 border border-[#facc15]/30">
                <item.icon className="text-[#facc15] w-6 h-6" />
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

      {/* Quality Section */}
      <section className="py-28 px-6 md:px-16 bg-[#181818] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Our <span className="text-[#facc15]">Designs Work</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Every pixel has purpose — your brand deserves results that look good
            and perform great.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {qualities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#facc15]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#facc15]/10 border border-[#facc15]/30">
                <item.icon className="text-[#facc15] w-6 h-6" />
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
            className="bg-[#facc15] text-black px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
          >
            Enquire Now <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
          </button>
        </div>
      </section>
    </>
  );
}
