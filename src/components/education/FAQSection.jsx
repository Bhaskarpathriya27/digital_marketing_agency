"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the education lead generation process?",
    answer: (
      <>
        As a leading education lead generation company, we aim to create a
        comprehensive view of your target market and establish a presence at
        every touchpoint. Our process includes:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Requirement Analysis:</strong> Crafting a precise and
            effective strategy for lead generation aligned with digital
            marketing goals.
          </li>
          <li>
            <strong>Building Engagement Portals:</strong> Designing and
            optimizing your website for maximum discoverability and impact.
          </li>
          <li>
            <strong>Capture and Nurture Demand:</strong> Enhancing your online
            reputation through targeted initiatives.
          </li>
          <li>
            <strong>Convert Traffic:</strong> Guiding potential leads through
            nurturing stages toward enrollment.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How to leverage education lead generation companies?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Define your goals and audience clearly.</li>
        <li>Select a reputable partner specialized in education.</li>
        <li>Set a budget aligned with expected ROI.</li>
        <li>Collaborate closely and provide detailed content.</li>
        <li>Optimize dedicated landing pages.</li>
        <li>Track performance and follow up promptly.</li>
        <li>Continuously test and refine strategies.</li>
        <li>Ensure compliance with privacy regulations.</li>
        <li>Evaluate ROI regularly to measure success.</li>
      </ul>
    ),
  },
  {
    question: "Why is SEO crucial for lead generation in higher education?",
    answer: (
      <>
        SEO is critical in education lead generation because it enhances
        visibility and boosts relevant website traffic. A specialized SEO agency
        optimizes for high-intent keywords, improves rankings, and draws in
        quality leads.
        <br />
        <br />
        It enables educational institutions to appear prominently in search
        results, making it easier for students to discover their offerings.
        Combined with content and digital marketing, SEO builds a strong online
        presence and competitive edge—ultimately driving more applications and
        enrollment.
      </>
    ),
  },
  {
    question: "What are excellent ways of education lead generation?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Content Marketing:</strong> Create value-rich blogs, e-books,
          webinars.
        </li>
        <li>
          <strong>SEO:</strong> Optimize site and content to boost rankings and
          organic reach.
        </li>
        <li>
          <strong>PPC Advertising:</strong> Run targeted ads on Google,
          LinkedIn, Instagram etc.
        </li>
        <li>
          <strong>Social Media Marketing:</strong> Actively post, engage, and
          run lead-gen ads.
        </li>
        <li>
          <strong>Remarketing:</strong> Re-engage users who left without
          converting.
        </li>
        <li>
          <strong>Community Engagement:</strong> Be present in niche forums and
          groups.
        </li>
        <li>
          <strong>Testimonials:</strong> Display real feedback to build trust.
        </li>
      </ul>
    ),
  },
  {
    question: "Why choose us for education lead generation?",
    answer: (
      <>
        We specialize in crafting tailored lead generation strategies for
        universities and institutions. With evolving platforms and audiences,
        our expert team ensures enhanced visibility, increased inquiries, and
        more conversions.
        <br />
        <br />
        We focus on data-driven campaigns aligned to your specific goals—helping
        educational brands effectively connect with and enroll their ideal
        students.
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
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mt-2">
          Everything you need to know about education lead generation
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
                  <HelpCircle className="h-5 w-5 text-[#0ea5e9]" />
                  <span>{item.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-[#0ea5e9]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#0ea5e9]" />
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
