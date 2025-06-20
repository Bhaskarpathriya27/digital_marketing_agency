"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question:
      "What makes us stand out from other real estate lead generation companies?",
    answer: (
      <>
        We are one of India's most experienced agencies in real estate digital
        marketing. With over a decade of industry expertise, a certified team,
        and more than 100 successful project campaigns, we bring unmatched
        reliability. Our focus on honest communication, tailored solutions, and
        consistent delivery sets us apart in a competitive market.
      </>
    ),
  },
  {
    question:
      "What makes Facebook an optimal choice in digital marketing for realtors?",
    answer: (
      <>
        Facebook users spend an average of 58 minutes daily, making it a prime
        platform for targeted advertising. Facebook ads—especially lead
        ads—enable real estate brands to capture qualified prospects
        efficiently. With its massive user base, the key lies in identifying
        quality leads with conversion potential.
      </>
    ),
  },
  {
    question: "Why should you go for real estate lead generation?",
    answer: (
      <>
        Real estate lead generation helps ensure your website and listings are
        easily discoverable by prospects searching online. Techniques like SEO,
        PPC ads, and social media marketing play a vital role in converting
        visitors into actual leads. Without it, marketing spend may not reach
        the right audience—resulting in missed opportunities and lower ROI.
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

export default function RealEstateFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-6 md:px-16 bg-[#181818]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mt-2">
          Real answers to common questions about real estate lead generation
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          const [ref, { height }] = useMeasure();

          return (
            <div
              key={i}
              className="border border-[#2f2f2f] rounded-xl overflow-hidden bg-[#1e1e1e] transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left text-white font-medium hover:bg-[#2a2a2a] transition"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-orange-500" />
                  <span>{item.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-orange-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-orange-500" />
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
                  className="px-5 pb-5 text-sm leading-relaxed text-gray-400"
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
