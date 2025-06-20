"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "How can digital marketing help grow my business?",
    answer:
      "Digital marketing can increase your visibility, attract targeted leads, and drive more conversions using SEO, social media, PPC, and email campaigns.",
  },
  {
    question: "What is the difference between SEO and PPC?",
    answer:
      "SEO focuses on organic ranking and long-term visibility, while PPC allows instant traffic through paid ads. Combining both gives the best results.",
  },
  {
    question: "How long before I see results from digital marketing?",
    answer:
      "SEO typically shows results in 3–6 months, while PPC and social ads can generate traffic instantly. A full-funnel strategy improves long-term ROI.",
  },
  {
    question: "Do I need to be active on every social media platform?",
    answer:
      "No. It's better to focus on platforms where your target audience is most active. We help identify and prioritize them for you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    if (openIndex !== null && faqRefs.current[openIndex]) {
      faqRefs.current[openIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [openIndex]);

  return (
    <section className=" py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Get answers to the most common questions about our digital marketing
          services.
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-800">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="py-6 cursor-pointer"
            ref={(el) => (faqRefs.current[i] = el)}
          >
            <div
              className="flex items-start justify-between gap-4"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {faq.question}
              </h3>
              <span className="mt-1">
                {openIndex === i ? (
                  <MinusIcon className="w-5 h-5 text-indigo-400" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-indigo-400" />
                )}
              </span>
            </div>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
