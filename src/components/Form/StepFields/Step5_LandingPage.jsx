"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Link, PenLine } from "lucide-react";

export default function Step5_LandingPage({ formData, updateField }) {
  const [hasLanding, setHasLanding] = useState(formData.hasLandingPage ?? null);
  const [needLandingDesign, setNeedLandingDesign] = useState(
    formData.needLandingPageDesign || false
  );
  const [brief, setBrief] = useState(formData.landingPageBrief || "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* 🔗 Do you have a landing page? */}
      <div>
        <label className="form-label text-purple-600 font-medium mb-2 block">
          Do you have a landing page?
        </label>
        <div className="flex gap-3">
          {["Yes", "No"].map((option) => {
            const isActive = hasLanding === option;
            return (
              <button
                key={option}
                onClick={() => {
                  setHasLanding(option);
                  updateField("hasLandingPage", option);
                }}
                className={`px-4 py-1 rounded-full text-sm border transition font-medium ${
                  isActive
                    ? "bg-purple-600 text-white border-purple-600 shadow"
                    : "bg-white text-gray-700 border-gray-300 hover:border-purple-300"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* ✅ If YES – URL input */}
      <AnimatePresence mode="wait">
        {hasLanding === "Yes" && (
          <motion.div
            key="landing-yes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-3"
          >
            <label className="form-label flex items-center gap-2 text-indigo-600 mb-1">
              <Link className="w-4 h-4" />
              Landing Page URL
            </label>
            <input
              type="url"
              placeholder="https://your-landing-page.com"
              value={formData.landingPageUrl || ""}
              onChange={(e) => updateField("landingPageUrl", e.target.value)}
              className="input-light w-full"
            />
          </motion.div>
        )}

        {/* ❌ If NO – Need design toggle & brief */}
        {hasLanding === "No" && (
          <motion.div
            key="landing-no"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="form-label text-pink-600 font-medium mb-2 block">
                Do you need a landing page designed?
              </label>
              <div className="flex gap-3">
                {["Yes", "No"].map((option) => {
                  const isActive = needLandingDesign === (option === "Yes");
                  return (
                    <button
                      key={option}
                      onClick={() => {
                        const val = option === "Yes";
                        setNeedLandingDesign(val);
                        updateField("needLandingPageDesign", val);
                      }}
                      className={`px-4 py-1 rounded-full text-sm border transition font-medium ${
                        isActive
                          ? "bg-pink-600 text-white border-pink-600 shadow"
                          : "bg-white text-gray-700 border-gray-300 hover:border-pink-300"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {needLandingDesign && (
              <div>
                <label className="form-label flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <PenLine className="w-4 h-4" />
                  Describe what you want on the landing page
                </label>
                <textarea
                  rows={4}
                  placeholder="Write about layout, content, CTAs..."
                  className="input-light w-full resize-none"
                  value={brief}
                  onChange={(e) => {
                    setBrief(e.target.value);
                    updateField("landingPageBrief", e.target.value);
                  }}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
