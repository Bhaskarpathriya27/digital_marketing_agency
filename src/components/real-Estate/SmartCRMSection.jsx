"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const crmFeatures = [
  {
    title: "Capture inquiries",
    desc: (
      <>
        Never miss out on property inquiries. Capture all offline and online
        opportunities to build your funnel.
        <ul className="list-disc pl-4 mt-2 space-y-1 text-sm text-gray-400">
          <li>Website queries</li>
          <li>Social Media</li>
          <li>Buyer Referrals</li>
          <li>Walk-in site visits</li>
          <li>Property marketplaces</li>
        </ul>
      </>
    ),
  },
  {
    title: "Segment leads intelligently",
    desc: (
      <>
        Segment your prospective home buyers based on various factors – property
        types, preferences, location, demographics, financial status, home loan
        status, and more. Use this info to personalize all future
        communications.
      </>
    ),
  },
  {
    title: "Reduce response times",
    desc: (
      <>
        Set up autoresponders on Email, WhatsApp, and SMS for inbound inquiries.
        Distribute leads to agents in real-time.
        <br />
        <br />
        Track all interactions like ad clicks, email opens, and website visits
        in one place.
      </>
    ),
  },
  {
    title: "Automate lead and task assignments",
    desc: (
      <>
        Automatically notify agents via text, email, or app when a lead is
        assigned or site visit is booked. Our CRM schedules tasks based on their
        calendar availability.
      </>
    ),
  },
  {
    title: "Help your agents work smartly",
    desc: (
      <>
        Help agents identify the best sales opportunities using lead quality and
        activity score. Let them focus on high-potential deals with smart lead
        prioritization.
      </>
    ),
  },
];

export default function SmartCRMSection() {
  const { setIsModalOpen } = useModal();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      {/* 🧠 Main CRM Section */}
      <section className="py-28 px-6 md:px-16 bg-[#181818] text-white relative overflow-hidden">
        <motion.div
          className="absolute w-[200px] h-[200px] bg-orange-400/20 rounded-full blur-2xl top-[60px] left-[-60px] z-0"
          animate={{ x: [0, 15, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Manage Real Estate Leads Efficiently
            </h2>
            <p className="text-gray-400 mt-2 text-base">
              Streamline your sales processes, respond inquiries instantly,
              automatically qualify leads for sales outreach, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <Image
                src="/real-estate/crm.svg"
                alt="Smart CRM Illustration"
                width={360}
                height={360}
                className="object-contain"
              />
            </motion.div>

            {/* Accordion */}
            <div className="space-y-4">
              {crmFeatures.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-[#2a2a2a] shadow-sm"
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between p-5 text-left text-white hover:bg-[#2a2a2a] transition"
                    >
                      <span className="font-semibold">{item.title}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-orange-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-orange-500" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="px-5 pb-5 text-gray-400 text-sm"
                        >
                          {item.desc}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA Panel */}
      <section className="py-12 px-6 md:px-16 bg-[#1e1e1e] border-t border-[#333]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-[#202020] p-8 border border-[#2a2a2a] shadow-inner">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-white">
              Ready to supercharge your real estate growth?
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Hit the button to connect with the best digital marketing agency
              for real estate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-medium px-6 py-2.5 rounded-full transition-all shadow-lg"
            >
              Get a Quote →
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
