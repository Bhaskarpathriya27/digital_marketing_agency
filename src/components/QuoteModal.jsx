"use client";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import CampaignFormWrapper from "./Form/CampaignFormWrapper";
import { useEffect, useState } from "react";

export default function QuoteModal({ isOpen, onClose }) {
  const [show, setShow] = useState(false);
  const [pulseDone, setPulseDone] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setPulseDone(false);
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        setPulseDone(true); // show modal after pulse
      }, 600);
    } else {
      setTimeout(() => setShow(false), 700);
      setPulseDone(false);
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <AnimatePresence>
        {show && (
          <>
            {/* 🔥 Background overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* ✨ Ring Burst Animation */}
            {!pulseDone && (
              <motion.div
                key="ring"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 20, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="fixed left-1/2 top-1/2 z-50 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg"
              />
            )}

            {/* 🌌 Actual Modal */}
            {pulseDone && (
              <div className="fixed inset-0 flex items-center justify-center overflow-y-auto z-50">
                <motion.div
                  key="modal"
                  initial={{ scale: 0.9, opacity: 0, y: 80 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="w-full h-[95vh] m-4 max-w-[1380px] rounded-2xl overflow-y-auto bg-[rgba(18,18,18,0.85)] border border-white/10 backdrop-blur-xl relative shadow-[0_0_60px_rgba(0,255,255,0.1)]"
                >
                  <button
                    onClick={onClose}
                    className="absolute top-10 right-5 z-50 text-white hover:text-red-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <CampaignFormWrapper />
                </motion.div>
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
