"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import {
  LayoutTemplate,
  MousePointerClick,
  Rocket,
  FlaskConical,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function LandingPageMarketing() {
  const { setIsModalOpen } = useModal();

  const features = [
    {
      title: "Conversion-Optimized",
      desc: "Every section, button, and layout is A/B tested for maximum conversion.",
      icon: MousePointerClick,
    },
    {
      title: "Speed & SEO",
      desc: "Blazing-fast performance paired with SEO best practices built in.",
      icon: Rocket,
    },
    {
      title: "Custom Funnels",
      desc: "Pages tailored to your customer journey to move users toward the CTA.",
      icon: FlaskConical,
    },
    {
      title: "Security First",
      desc: "Secure forms and backend logic to protect your data and customer trust.",
      icon: ShieldCheck,
    },
  ];

  const benefits = [
    {
      title: "Clear CTA Focus",
      desc: "Your primary action is never missed. From scroll to submit, it's conversion-driven.",
      icon: Target,
    },
    {
      title: "User Experience",
      desc: "Mobile-first, accessible, and beautifully designed with microinteractions.",
      icon: LayoutTemplate,
    },
    {
      title: "Higher Lead Quality",
      desc: "By filtering intent early, your forms bring leads that convert faster.",
      icon: TrendingUp,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-28 px-6 md:px-16 bg-[#181818] text-white overflow-hidden relative">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-[#bfdbfe]/20 rounded-full blur-2xl z-0"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#bfdbfe]/10 rounded-full blur-xl z-0"
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
              Landing Pages That <span className="text-[#60a5fa]">Convert</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Get pixel-perfect pages designed for performance. Whether it’s
              lead generation, product sales, or appointment booking — your page
              will deliver.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              We craft custom layouts tailored to your audience behavior —
              because design isn’t just pretty, it’s purposeful.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#3b82f6] text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Let’s Design Yours{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#bfdbfe]/10 border border-[#bfdbfe]/20">
              <LayoutTemplate size={120} className="text-[#60a5fa]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#60a5fa]">Landing Page</span> Approach
          </h2>
          <p className="text-gray-400 text-lg">
            Beautiful isn’t enough. We build with intention — structure,
            psychology, and speed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1f1f1f] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#60a5fa]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#60a5fa]/10 border border-[#60a5fa]/30">
                <item.icon className="text-[#60a5fa] w-6 h-6" />
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
            Why Our Pages <span className="text-[#60a5fa]">Perform</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Results you can measure. Experience you can feel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#60a5fa]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#60a5fa]/10 border border-[#60a5fa]/30">
                <item.icon className="text-[#60a5fa] w-6 h-6" />
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
            className="bg-[#3b82f6] text-white px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
          >
            Enquire Now <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
          </button>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where <span className="text-[#60a5fa]">Landing Pages</span> Work
            Best
          </h2>
          <p className="text-gray-400 text-lg">
            Our pages are engineered for action. Here’s where they shine:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Lead Capture Pages",
              desc: "Optimized forms, fast load times, and no distractions to generate qualified leads.",
            },
            {
              title: "PPC Landing Pages",
              desc: "Laser-focused pages built specifically for your ad traffic — Google, Meta, or LinkedIn.",
            },
            {
              title: "Sales Pages",
              desc: "From features to benefits to testimonials, designed to convert visitors into customers.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1c1c1c] rounded-2xl p-8 text-left border border-[#3b82f6]/10 shadow hover:shadow-[#3b82f6]/10 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#60a5fa] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 md:px-16 bg-[#181818] text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Page is <span className="text-[#60a5fa]">One Click Away</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Let us build you a landing page that doesn't just look good, but
            performs where it matters — leads, clicks, and ROI.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#60a5fa] text-black px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
          >
            Get My Page Now{" "}
            <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
          </button>
        </motion.div>
      </section>
    </>
  );
}
