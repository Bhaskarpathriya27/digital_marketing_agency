"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BarChart3,
  Search,
  Globe,
  Video,
  Users2,
  LayoutTemplate,
  Brush,
  Film,
  Mic2,
  Sparkles,
  Code2,
  Database,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Boost visibility and conversions through targeted multi-channel strategies.",
    icon: BarChart3,
    link: "/services/digital-marketing",
    hoverColor: "from-[#fef3c7] to-[#fde68a]",
  },
  {
    title: "Google AdWords",
    description:
      "Smart bidding, extensions, and optimized ads that deliver measurable results.",
    icon: Search,
    link: "/services/google-adwords",
    hoverColor: "from-[#e0f2fe] to-[#bae6fd]",
  },
  {
    title: "Web Traffic",
    description:
      "Drive traffic using SEO, social campaigns, and performance insights.",
    icon: Globe,
    link: "/services/web-traffic",
    hoverColor: "from-[#d1fae5] to-[#a7f3d0]",
  },
  {
    title: "Video Marketing",
    description:
      "Explain your brand with short reels, product promos, and animations.",
    icon: Video,
    link: "/services/video-marketing",
    hoverColor: "from-[#fce7f3] to-[#fbcfe8]",
  },
  {
    title: "Influencer Marketing",
    description:
      "Leverage creators to build trust and widen your organic brand presence.",
    icon: Users2,
    link: "/services/influencer-marketing",
    hoverColor: "from-[#ede9fe] to-[#ddd6fe]",
  },
  {
    title: "Landing Page",
    description:
      "Pixel-perfect landing pages that convert, A/B tested and CTA-optimized.",
    icon: LayoutTemplate,
    link: "/services/landing-page",
    hoverColor: "from-[#dbeafe] to-[#bfdbfe]",
  },
  {
    title: "Digital Creatives",
    description:
      "Visually powerful graphics, banners, and social assets designed for clicks.",
    icon: Brush,
    link: "/services/digital-creatives",
    hoverColor: "from-[#ffedd5] to-[#fed7aa]",
  },
  {
    title: "Digital Videos",
    description:
      "Motion graphics and video ads that keep your brand top of mind.",
    icon: Film,
    link: "/services/digital-videos",
    hoverColor: "from-[#ffe4e6] to-[#fecdd3]",
  },
  {
    title: "Podcast",
    description:
      "Build authority through professional podcast production and distribution.",
    icon: Mic2,
    link: "/services/podcast",
    hoverColor: "from-[#e0e7ff] to-[#c7d2fe]",
  },
  {
    title: "Celebrity Videos",
    description:
      "Get brand shoutouts from public figures that build instant credibility.",
    icon: Sparkles,
    link: "/services/celebrity-videos",
    hoverColor: "from-[#fef9c3] to-[#fef08a]",
  },
  {
    title: "Real Estate Web Dev",
    description:
      "Feature-rich property sites with CRM integrations and map search.",
    icon: Code2,
    link: "/services/real-estate-web",
    hoverColor: "from-[#dcfce7] to-[#bbf7d0]",
  },
  {
    title: "Real Estate Software",
    description:
      "Agent portals, dashboards, and automation tools tailored to the real estate industry.",
    icon: Database,
    link: "/services/real-estate-software",
    hoverColor: "from-[#e0f2fe] to-[#bae6fd]",
  },
];

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1.2,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 28 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4.2, spacing: 32 },
      },
    },
  });

  return (
    <section className="bg-[#111] py-24 px-6" id="services">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          Our Digital Services
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Performance-first services crafted to scale your business.
        </p>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Link href={service.link} className="group block">
              <div
                className={`w-[300px] h-[480px] mx-auto p-6 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-500 bg-[#1c1c1e] text-white hover:bg-gradient-to-br ${service.hoverColor}`}
              >
                {/* Icon + Title Swap */}
                <div className="relative w-full h-28 mb-4 flex flex-col items-center justify-center transition-all duration-500">
                  <motion.div
                    className="text-cyan-400 transition-transform duration-500"
                    animate={{ y: -10 }}
                    whileHover={{ y: 20 }}
                  >
                    <service.icon size={42} />
                  </motion.div>

                  <motion.h3
                    className="text-2xl group-hover:text-black  font-bold mt-4 transition-transform duration-500"
                    animate={{ y: 10 }}
                    whileHover={{ y: -20 }}
                  >
                    {service.title}
                  </motion.h3>
                </div>
                {/* Description Centered */}
                <div className="flex justify-center items-center h-[120px] px-4">
                  <p className="text-sm text-gray-300 group-hover:text-black leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>

                <div className="flex-grow" />

                <button className="mt-6 px-5 py-2 rounded-full text-sm font-semibold border border-cyan-400 text-cyan-400 group-hover:bg-white group-hover:border-white group-hover:text-black transition-all">
                  Explore
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
