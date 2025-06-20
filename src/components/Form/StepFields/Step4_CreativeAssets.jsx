"use client";

import { forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Info, Users } from "lucide-react";

const Step4_AdditionalInfo = forwardRef(({ formData, updateField }, ref) => {
  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!formData.keyCompetitors || formData.keyCompetitors.trim() === "") {
        toast.error("Please enter your key competitors.");
        return { valid: false };
      }
      return { valid: true };
    },
  }));

  return (
    <motion.div
      className="space-y-12 text-white max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Additional Info (optional) */}
      <div>
        <label className="text-base font-semibold flex items-center gap-2 mb-2 text-white">
          <Info className="w-4 h-4 text-blue-400" />
          Any additional information you would like to provide?
        </label>
        <textarea
          rows={5}
          placeholder="e.g. Do not run ads on Sundays, avoid Hindi creatives..."
          value={formData.additionalInfo || ""}
          onChange={(e) => updateField("additionalInfo", e.target.value)}
          className="w-full bg-white/5 backdrop-blur-md border border-gray-700 rounded-xl px-5 py-4 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none shadow-inner"
        />
      </div>

      {/* Competitor Info (required) */}
      <div>
        <label className="text-base font-semibold flex items-center gap-2 mb-2 text-white">
          <Users className="w-4 h-4 text-rose-400" />
          Please enlist some of your key competitors (Online and Offline){" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="e.g. Tata Motors, Maruti Suzuki, Spinny"
          value={formData.keyCompetitors || ""}
          onChange={(e) => updateField("keyCompetitors", e.target.value)}
          className="w-full bg-white/5 backdrop-blur-md border border-gray-700 rounded-xl px-5 py-4 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none shadow-inner"
        />
      </div>
    </motion.div>
  );
});

export default Step4_AdditionalInfo;
