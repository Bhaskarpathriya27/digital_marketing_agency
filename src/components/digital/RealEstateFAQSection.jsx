"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question:
      "What is real estate digital marketing and how can it benefit my business?",
    answer: (
      <>
        Real estate digital marketing involves using online strategies and tools
        to promote properties and real estate services. It encompasses a range
        of tactics such as search engine optimization (SEO), pay-per-click (PPC)
        advertising, social media marketing, and content creation. <br />
        <br />
        By using these strategies, you can increase your online visibility,
        attract more qualified leads, and ultimately close more sales. For real
        estate businesses, effective digital marketing can help you stand out in
        a competitive market.
      </>
    ),
  },
  {
    question:
      "How does a digital marketing strategy for real estate differ from other industries?",
    answer: (
      <>
        A digital marketing strategy for real estate is suited to the unique
        needs of the real estate market. It focuses on showcasing property
        listings, targeting potential buyers and sellers, and building a strong
        online presence for agents and agencies. <br />
        <br />
        This often involves strategies like creating compelling property
        listings with high-quality images, running targeted ad campaigns based
        on geographic and demographic data, and using local SEO to attract
        clients in specific areas.
      </>
    ),
  },
  {
    question: "What digital marketing services for real estate do you offer?",
    answer: (
      <>
        Our real estate digital marketing agency offers a comprehensive suite of
        services designed to meet the needs of the real estate sector. These
        include:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>SEO to improve your website's visibility</li>
          <li>PPC campaigns to drive targeted traffic</li>
          <li>Social media management to engage with potential clients</li>
          <li>Email marketing for nurturing leads</li>
          <li>Content creation to enhance your brand's authority</li>
          <li>Analytics and reporting to track campaign performance</li>
        </ul>
      </>
    ),
  },
  {
    question:
      "How can a real estate digital marketing agency help improve my online presence?",
    answer: (
      <>
        A real estate digital marketing agency can enhance your online presence
        by implementing a tailored digital marketing strategy that aligns with
        your business goals. <br />
        <br />
        We focus on optimizing your website for search engines, managing and
        executing effective advertising campaigns, and creating engaging content
        that resonates with your target audience. We also monitor and analyze
        your digital marketing efforts to ensure they are generating results and
        make adjustments as needed.
      </>
    ),
  },
];

function useMeasure() {
  const ref = useRef(null);
  const [bounds, setBounds] = useState({ height: 0 });

  useLayoutEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(([entry]) => {
        setBounds(entry.contentRect);
      });
      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return [ref, bounds];
}

export default function RealEstateFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-[#111] text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Real Estate Marketing FAQs
        </h2>
        <p className="text-gray-400 mt-2">
          Have questions about how digital marketing can transform your real
          estate brand?
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, i) => {
          const [ref, { height }] = useMeasure();
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="border border-[#334155] rounded-xl bg-[#1f2937] transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between p-5 text-left text-white font-medium hover:bg-[#2a3649] transition"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-[#facc15]" />
                  <span>{item.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-[#facc15]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#facc15]" />
                )}
              </button>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? height : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div
                  ref={ref}
                  className="px-5 pb-5 text-sm leading-relaxed text-gray-300"
                >
                  {item.answer}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
