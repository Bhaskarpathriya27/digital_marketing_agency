"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Megaphone,
  Users,
  Globe,
  Wrench,
} from "lucide-react";

const faqs = [
  {
    question: "What is Digital Marketing for Automotive Dealers?",
    icon: <Megaphone className="w-5 h-5 text-blue-500 shrink-0" />,
    answer: (
      <>
        Digital marketing for automotive dealers involves strategically using
        online channels to promote automotive products and services. This
        includes:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>SEO, social media, paid ads, and email campaigns</li>
          <li>Website optimization and content creation</li>
          <li>Reputation management and analytics</li>
        </ul>
        A robust digital marketing strategy connects with your audience and
        boosts your dealership’s visibility and sales.
      </>
    ),
  },
  {
    question: "Why is lead generation important for automotive dealers?",
    icon: <Users className="w-5 h-5 text-blue-500 shrink-0" />,
    answer: (
      <ul className="list-disc list-inside mt-1 space-y-1">
        <li>
          <strong>Customer Acquisition:</strong> Expands your audience reach.
        </li>
        <li>
          <strong>Sales Growth:</strong> More leads means more conversions.
        </li>
        <li>
          <strong>Cost-Effectiveness:</strong> Optimized campaigns bring better
          ROI.
        </li>
        <li>
          <strong>Targeted Marketing:</strong> Focused campaigns attract quality
          leads.
        </li>
        <li>
          <strong>Customer Relationships:</strong> Nurturing leads builds
          loyalty.
        </li>
      </ul>
    ),
  },
  {
    question: "Is SEO Important for the Automotive Industry?",
    icon: <Globe className="w-5 h-5 text-blue-500 shrink-0" />,
    answer: (
      <ul className="list-disc list-inside mt-1 space-y-1">
        <li>
          <strong>Visibility Boost:</strong> Appear higher in searches.
        </li>
        <li>
          <strong>Traffic Surge:</strong> Attract buyers actively searching
          online.
        </li>
        <li>
          <strong>Competitive Edge:</strong> Stand out with better optimization.
        </li>
        <li>
          <strong>Targeted Reach:</strong> Geo + demo specific targeting.
        </li>
        <li>
          <strong>Trust and Credibility:</strong> Higher rankings increase
          trust.
        </li>
      </ul>
    ),
  },
  {
    question:
      "Why is it Important to Hire an Automotive Digital Marketing Agency?",
    icon: <Wrench className="w-5 h-5 text-blue-500 shrink-0" />,
    answer: (
      <ul className="list-disc list-inside mt-1 space-y-1">
        <li>
          <strong>Industry Specialization:</strong> Tailored strategies that
          match your niche.
        </li>
        <li>
          <strong>Precision Targeting:</strong> Campaigns designed for ROI.
        </li>
        <li>
          <strong>Holistic Strategies:</strong> Multi-channel plans that work.
        </li>
        <li>
          <strong>Trend Adaptation:</strong> Stay ahead with evolving
          strategies.
        </li>
        <li>
          <strong>Cost-Efficient:</strong> Save resources and maximize results.
        </li>
      </ul>
    ),
  },
];

export default function AutomotiveFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 md:px-16 bg-[#181818] text-white">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mt-2">
          Everything you need to know about digital marketing for automotive
          dealers
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ borderRadius: 12 }}
              animate={{ borderRadius: isOpen ? 16 : 12 }}
              className="border border-slate-700 rounded-xl bg-[#1f2937] shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-white hover:bg-slate-800 transition"
              >
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <span>{faq.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-500" />
                )}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-5 pb-5 pt-1 text-gray-300 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
