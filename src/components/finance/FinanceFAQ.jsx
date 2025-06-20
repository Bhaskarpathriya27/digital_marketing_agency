"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is CRM Finance?",
    answer: (
      <>
        Finance CRM is a software solution that helps financial institutions
        manage customer relationships by tracking interactions, handling
        customer onboarding, centralizing customer data, and more. It is
        tailored to support the unique operational needs of finance businesses.
      </>
    ),
  },
  {
    question: "How can Finance CRM help?",
    answer: (
      <>
        Finance CRM streamlines both front-end and back-end processes such as
        lead management, customer onboarding, document collection, partner
        management, and multichannel engagement.
      </>
    ),
  },
  {
    question: "What is API integration in Finance CRM?",
    answer: (
      <>
        API integrations allow seamless connectivity with 100+ third-party
        tools, enhancing CRM functionality. Popular integrations include
        WhatsApp, DigiLocker, Perfios, and more.
      </>
    ),
  },
  {
    question: "Is the CRM easy to configure?",
    answer: (
      <>
        Yes, the CRM platform is fully no-code and easily customizable to suit
        your specific workflows. It is highly rated for user friendliness and
        ease of setup.
      </>
    ),
  },
];

export default function FinanceFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 md:px-16 bg-[#181818] text-white">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mt-2">
          All you need to know about CRM for finance
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
              className="bg-[#202020] border border-gray-700 rounded-xl shadow-md"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-white hover:bg-[#262626] transition"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-indigo-400" />
                  <span>{faq.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-indigo-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-400" />
                )}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-5 pb-5 text-sm text-gray-300 leading-relaxed"
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
