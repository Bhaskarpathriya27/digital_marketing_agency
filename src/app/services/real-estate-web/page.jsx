"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import {
  LayoutTemplate,
  Code,
  Star,
  Globe,
  TrendingUp,
  MonitorSmartphone,
  Award,
  Users,
  ShieldCheck,
} from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function RealEstateWebPage() {
  const { setIsModalOpen } = useModal();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-28 px-6 md:px-16 bg-[#181818] text-white overflow-hidden relative">
        <motion.div
          className="absolute top-12 left-12 w-40 h-40 bg-[#34d399]/20 rounded-full blur-2xl z-0"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#6ee7b7]/10 rounded-full blur-xl z-0"
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
              Real Estate <span className="text-[#34d399]">Web Design</span> &
              Development
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Launch your digital dreams like our 100+ real estate clients.
              Convert leads with a high-performance website built for agents,
              builders, and growth.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Drive ROI, build trust, and scale with a powerful digital
              presence.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#34d399] text-black px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Enquire Now{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#34d399]/10 border border-[#6ee7b7]/20">
              <LayoutTemplate size={120} className="text-[#34d399]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-[#34d399]">Us</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Make a strong first impression and convert more leads with our
            award-winning web design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            "Award-Winning Real Estate Website Design Experts",
            "Custom Web Page Design for Unique Needs",
            "Top Builders for Optimal Performance",
            "Innovative Site Design with Proven Results",
            "Comprehensive Development Services",
            "Engaging Homepages to Capture Leads",
            "20X Growth Track Record",
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1f1f1f] border border-white/5 rounded-2xl p-6 shadow hover:shadow-[#34d399]/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <Award className="w-6 h-6 text-[#34d399]" />
                <h4 className="font-semibold text-white text-md">{point}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-28 px-6 md:px-16 bg-[#181818] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Leading Expertise in{" "}
            <span className="text-[#34d399]">Real Estate Web Design</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            With over 100 clients, our sites are crafted for performance and
            style. We specialize in homepage layouts that convert, UX that
            delights, and branding that positions you competitively.
          </p>
        </div>
      </section>

      {/* Innovative Solutions */}
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Innovative{" "}
            <span className="text-[#34d399]">Web Design Solutions</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our real estate site designs are tailored to your brand, optimized
            for user experience, and enhanced with the latest web technologies.
            From interactive features to clean code, our team turns vision into
            conversion.
          </p>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-28 px-6 md:px-16 bg-[#181818] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Comprehensive{" "}
            <span className="text-[#34d399]">Development Services</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            From wireframing to launch, our development process ensures
            responsive, secure, and high-speed websites. Whether it’s CMS-based
            or custom coded — we build to last.
          </p>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proven Results & <span className="text-[#34d399]">20X Growth</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We’ve helped clients grow their digital presence and leads 20X with
            smart design, marketing-ready builds, and post-launch optimization.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-10 bg-[#34d399] text-black px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
          >
            Enquire Now <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
          </button>
        </div>
      </section>
    </>
  );
}
