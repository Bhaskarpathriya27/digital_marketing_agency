"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is healthcare digital marketing?",
    answer: (
      <>
        Healthcare digital marketing involves using online strategies to promote
        healthcare services, engage patients, and manage your reputation.
        Partnering with a digital agency ensures your campaigns are effective
        and compliant with healthcare industry regulations.
      </>
    ),
  },
  {
    question: "Why is digital marketing important for healthcare providers?",
    answer: (
      <>
        It helps you reach your target audience more effectively and build trust
        online. A well-executed strategy from a healthcare marketing agency can
        increase your visibility, credibility, and patient conversions.
      </>
    ),
  },
  {
    question: "Why is healthcare SEO important?",
    answer: (
      <>
        SEO is essential to improve your website's visibility in search engine
        results. A specialized healthcare SEO agency helps ensure potential
        patients can find your services online before they find your
        competitors.
      </>
    ),
  },
  {
    question: "Why should I hire a healthcare lead generation company?",
    answer: (
      <>
        A healthcare lead generation company helps you attract more qualified
        leads by targeting the right audience with data-driven strategies. This
        allows you to grow your practice efficiently and consistently.
      </>
    ),
  },
  {
    question: "How can digital marketing help healthcare professionals?",
    answer: (
      <>
        Digital marketing helps healthcare professionals enhance their brand
        visibility, engage with patients, and build a trusted online presence.
        It also supports long-term growth by consistently generating leads and
        improving patient communication.
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-[#181818]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mt-2">
          Everything you need to know about digital marketing in healthcare
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, i) => {
          const [ref, { height }] = useMeasure();
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="border border-[#2d2d2d] rounded-xl overflow-hidden bg-[#1e1e1e]/80 backdrop-blur-md transition-all"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between p-5 text-left text-white font-medium hover:bg-[#2b2b2b] transition"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-emerald-400" />
                  <span>{item.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-emerald-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-emerald-400" />
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
                  className="px-5 pb-5 text-sm text-gray-300 leading-relaxed"
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
