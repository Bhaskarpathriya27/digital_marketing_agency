"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Linkedin,
  Info,
} from "lucide-react";
import { Popover } from "@headlessui/react";
import CustomDateField from "@/components/Shared/CustomDateField";
import { forwardRef, useImperativeHandle } from "react";
import toast from "react-hot-toast";

const PLATFORMS = [
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "Google", icon: Globe },
  { label: "LinkedIn", icon: Linkedin },
  { label: "YouTube", icon: Youtube },
  { label: "Others", icon: null },
];

const Step3_PlatformBudget = forwardRef(({ formData, updateField }, ref) => {
  const [currency, setCurrency] = useState(formData.currency || "₹");
  const [showDaily, setShowDaily] = useState(!!formData.dailyBudget);
  const [runAlways, setRunAlways] = useState(formData.runContinuously || false);

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!formData.platforms || formData.platforms.length === 0)
        return toast.error("Please select at least one platform.");
      if (!formData.totalBudget || Number(formData.totalBudget) <= 0)
        return toast.error("Total campaign budget is required.");
      if (
        showDaily &&
        (!formData.dailyBudget || Number(formData.dailyBudget) <= 0)
      )
        return toast.error("Enter a valid daily budget.");
      if (!runAlways && (!formData.startDate || !formData.endDate))
        return toast.error("Please select campaign start and end dates.");

      return { valid: true };
    },
  }));

  const togglePlatform = (platform) => {
    const selected = formData.platforms || [];
    if (selected.includes(platform)) {
      updateField(
        "platforms",
        selected.filter((p) => p !== platform)
      );
    } else {
      updateField("platforms", [...selected, platform]);
    }
  };

  return (
    <motion.div
      className="space-y-12 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="form-label text-sm text-purple-400 font-medium">
            Platforms
          </label>
          <Popover className="relative">
            <Popover.Button className="text-purple-400 hover:text-purple-200 text-xs font-medium">
              <Info className="w-4 h-4" />
            </Popover.Button>
            <Popover.Panel className="absolute z-10 mt-2 px-3 py-2 text-xs rounded bg-white border shadow w-56 text-gray-700">
              Select where you'd like to run this campaign. You can choose
              multiple.
            </Popover.Panel>
          </Popover>
        </div>

        <div className="flex flex-wrap gap-3">
          {PLATFORMS.map(({ label, icon: Icon }) => {
            const selected = formData.platforms?.includes(label);
            return (
              <button
                key={label}
                onClick={() => togglePlatform(label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  selected
                    ? "bg-purple-950 text-purple-300 border-purple-700 shadow-sm"
                    : "bg-[#1f1f1f] text-gray-300 border-gray-700 hover:border-purple-500"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {label}
              </button>
            );
          })}
        </div>

        {formData.platforms?.includes("Others") && (
          <input
            type="text"
            placeholder="Specify other platforms..."
            value={formData.otherPlatforms || ""}
            onChange={(e) => updateField("otherPlatforms", e.target.value)}
            className="bg-[#1f1f1f] text-gray-300 border border-gray-700 rounded w-full py-2 px-3 mt-3"
          />
        )}
      </div>

      <div className="space-y-4">
        <label className="form-label text-emerald-400 font-medium">
          Total Campaign Budget
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="number"
            placeholder="Amount"
            value={formData.totalBudget || ""}
            onChange={(e) => updateField("totalBudget", e.target.value)}
            className="bg-[#1f1f1f] text-gray-300 border border-gray-700 rounded w-40 py-2 px-3"
          />

          <div className="flex items-center bg-gray-800 rounded-full p-1">
            {["₹", "$"].map((cur) => (
              <button
                key={cur}
                onClick={() => {
                  setCurrency(cur);
                  updateField("currency", cur);
                }}
                className={`px-4 py-1 rounded-full text-sm transition font-medium ${
                  currency === cur
                    ? "bg-emerald-500 text-black"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <label className="form-label text-indigo-400 font-medium">
          Use Daily Budget?
        </label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setShowDaily(!showDaily);
              if (!showDaily) updateField("dailyBudget", "");
            }}
            className={`w-10 h-6 flex items-center rounded-full p-1 transition ${
              showDaily ? "bg-indigo-600" : "bg-gray-600"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                showDaily ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-sm text-gray-300 font-medium">
            Daily Budget
          </span>
        </div>

        {showDaily && (
          <input
            type="number"
            placeholder="Daily Budget"
            value={formData.dailyBudget || ""}
            onChange={(e) => updateField("dailyBudget", e.target.value)}
            className="bg-[#1f1f1f] text-gray-300 border border-gray-700 rounded w-48 py-2 px-3"
          />
        )}
      </div>

      <div className="space-y-4">
        <label className="form-label text-indigo-400 font-medium">
          Campaign Duration
        </label>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setRunAlways(!runAlways);
              updateField("runContinuously", !runAlways);
              if (!runAlways) {
                updateField("startDate", null);
                updateField("endDate", null);
              }
            }}
            className={`w-10 h-6 flex items-center rounded-full p-1 transition ${
              runAlways ? "bg-emerald-500" : "bg-gray-600"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                runAlways ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-sm text-gray-300 font-medium">
            Run Continuously?
          </span>
        </div>

        {!runAlways && (
          <div className="flex flex-col md:flex-row gap-4">
            <CustomDateField
              label="Start Date"
              value={formData.startDate}
              onChange={(val) => updateField("startDate", val)}
            />
            <CustomDateField
              label="End Date"
              value={formData.endDate}
              onChange={(val) => updateField("endDate", val)}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
});

export default Step3_PlatformBudget;
