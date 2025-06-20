"use client";

import { forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { PenTool, Layers, Zap } from "lucide-react";

const AGENCY_OPTIONS = [
  {
    label: "Yes, I have an onboarded creative agency",
    icon: Layers,
    color: "ring-indigo-500 bg-indigo-900/40",
  },
  {
    label: "No, I need a creative agency",
    icon: PenTool,
    color: "ring-purple-500 bg-purple-900/40",
  },
  {
    label: "No, I will arrange for the advertising content and creatives",
    icon: Zap,
    color: "ring-yellow-500 bg-yellow-900/30",
  },
];

const BUDGET_OPTIONS = [
  "Less than Rs. 60,000",
  "Rs. 60,000 to Rs. 1,00,000",
  "Rs. 1,00,000 to 3,00,000",
  "More than 3,00,000",
];

const Step3 = forwardRef(({ formData, updateField }, ref) => {
  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!formData.leadProducts || formData.leadProducts.trim() === "") {
        toast.error("Please enter products/services to generate leads.");
        return { valid: false };
      }
      if (!formData.creativeAgency) {
        toast.error("Please select your creative agency preference.");
        return { valid: false };
      }
      if (!formData.monthlyBudget) {
        toast.error("Please select your monthly budget.");
        return { valid: false };
      }
      return { valid: true };
    },
  }));

  return (
    <motion.div
      className="space-y-14 text-white max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Textarea Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 mb-2">
          Online Lead Generation
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Please list the products / services for which you want to generate
          leads <span className="text-red-500">*</span>
        </p>
        <textarea
          rows={5}
          placeholder="e.g. Home Loans, Laptops, Travel Packages"
          value={formData.leadProducts || ""}
          onChange={(e) => updateField("leadProducts", e.target.value)}
          className="w-full bg-white/5 backdrop-blur-md border border-gray-700 rounded-xl px-5 py-4 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-inner transition"
        />
      </div>

      {/* Creative Agency Cards */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Do you have a creative agency for advertising content and creatives?{" "}
          <span className="text-red-500">*</span>
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {AGENCY_OPTIONS.map(({ label, icon: Icon, color }) => {
            const selected = formData.creativeAgency === label;
            return (
              <button
                key={label}
                onClick={() => updateField("creativeAgency", label)}
                className={`group relative text-left px-5 py-4 rounded-2xl border bg-[#1f1f1f] transition-all duration-300 hover:shadow-md hover:border-white/30 flex gap-4 items-center ${
                  selected ? `ring-2 ${color}` : "border-gray-700"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white/80" />
                </div>
                <span className="text-sm text-gray-200 font-medium">
                  {label}
                </span>
                {selected && (
                  <span className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-70" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget Radio Buttons */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          What is your digital advertising budget per month?{" "}
          <span className="text-red-500">*</span>
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {BUDGET_OPTIONS.map((option) => {
            const selected = formData.monthlyBudget === option;
            return (
              <label
                key={option}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all border cursor-pointer ${
                  selected
                    ? "border-emerald-400 bg-emerald-800/20 ring-2 ring-emerald-500"
                    : "border-gray-700 hover:border-emerald-400 bg-[#1f1f1f]"
                }`}
              >
                <input
                  type="radio"
                  name="monthlyBudget"
                  value={option}
                  checked={selected}
                  onChange={() => updateField("monthlyBudget", option)}
                  className="accent-emerald-500 w-4 h-4"
                />
                <span className="text-sm text-gray-200">{option}</span>
              </label>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
});

export default Step3;
