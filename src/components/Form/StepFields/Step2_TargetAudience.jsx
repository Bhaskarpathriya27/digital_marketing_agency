"use client";

import React, { useState, useImperativeHandle, forwardRef } from "react";
import Select from "react-select";
import { motion } from "framer-motion";
import {
  Globe,
  MapPin,
  User2,
  Languages,
  HeartHandshake,
  BadgePercent,
} from "lucide-react";
import { Popover } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import AgeRangeSlider from "@/components/Shared/AgeRangeSlider";
import toast from "react-hot-toast";

const GENDERS = ["Male", "Female", "All"];
const LOCATIONS = ["India", "USA", "Canada", "UK", "Germany", "UAE"];
const LANGUAGES = ["English", "Hindi", "Spanish", "French", "Arabic"];
const INTERESTS = [
  { label: "Real Estate", icon: MapPin },
  { label: "Finance", icon: BadgePercent },
  { label: "Travel", icon: Globe },
  { label: "Fitness", icon: User2 },
  { label: "Education", icon: Languages },
  { label: "Tech", icon: HeartHandshake },
];

const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#1f1f1f",
    border: "1px solid #555",
    color: "#fff",
    boxShadow: state.isFocused ? "0 0 0 2px #7c3aed55" : "none",
    ".css-1dimb5e-singleValue": { color: "#fff" },
    ".css-1okebmr-indicatorSeparator": { backgroundColor: "#666" },
    ":hover": { borderColor: "#7c3aed" },
    padding: "2px 4px",
    minHeight: "38px",
    fontSize: "0.875rem",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#181818",
    color: "#fff",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#7c3aed22",
    color: "#fff",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#fff",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#a78bfa",
    ":hover": { backgroundColor: "#4c1d95", color: "white" },
  }),
};

const Step2_TargetAudience = forwardRef(({ formData, updateField }, ref) => {
  const [ageRange, setAgeRange] = useState(formData.ageRange || [20, 45]);
  const [error, setError] = useState("");

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!formData.locations || formData.locations.length === 0)
        return toast.error("Please select at least one location.");
      if (!formData.genders || formData.genders.length === 0)
        return toast.error("Please select gender preference.");
      if (!formData.languages || formData.languages.length === 0)
        return toast.error("Please select at least one language.");
      if (!formData.interests || formData.interests.length === 0)
        return toast.error("Please select at least one interest.");

      return { valid: true };
    },
  }));

  const handleMulti = (key, values) => {
    updateField(
      key,
      values.map((v) => v.value)
    );
  };

  const toggleInterest = (val) => {
    const curr = formData.interests || [];
    const updated = curr.includes(val)
      ? curr.filter((x) => x !== val)
      : [...curr, val];
    updateField("interests", updated);
    setError("");
  };

  return (
    <motion.div
      className="space-y-10 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Locations */}
      <div>
        <label className="form-label flex items-center gap-2 mb-2 text-purple-400">
          <MapPin className="w-4 h-4" />
          Target Locations
        </label>
        <Select
          isMulti
          options={LOCATIONS.map((x) => ({ value: x, label: x }))}
          value={(formData.locations || []).map((x) => ({
            value: x,
            label: x,
          }))}
          onChange={(vals) => handleMulti("locations", vals)}
          placeholder="Choose countries..."
          styles={customSelectStyles}
          className="z-[999]"
        />
      </div>

      {/* Age Range */}
      <div>
        <label className="form-label flex items-center gap-2 mb-3 text-indigo-400">
          <User2 className="w-4 h-4" />
          Age Group
        </label>
        <AgeRangeSlider
          value={ageRange}
          onChange={(val) => {
            setAgeRange(val);
            updateField("ageRange", val);
          }}
        />
      </div>

      {/* Genders */}
      <div className="flex items-center gap-2 mb-2">
        <label className="form-label flex items-center gap-2 text-rose-400">
          <User2 className="w-4 h-4" />
          Gender
        </label>
        <Popover className="relative">
          <Popover.Button className="text-rose-400 hover:text-rose-600">
            <InformationCircleIcon className="h-4 w-4" />
          </Popover.Button>
          <Popover.Panel className="absolute z-10 mt-2 px-3 py-2 text-xs rounded bg-gray-900 border border-gray-700 shadow w-48 text-gray-300">
            Select one or more. If both Male & Female are selected, it's treated
            as All.
          </Popover.Panel>
        </Popover>
      </div>

      <div className="flex gap-3">
        {GENDERS.map((g) => {
          const selected = formData.genders || [];
          const active = selected.includes(g);
          return (
            <button
              key={g}
              type="button"
              onClick={() => {
                let updated = active
                  ? selected.filter((x) => x !== g)
                  : [...selected, g];

                if (
                  updated.includes("Male") &&
                  updated.includes("Female") &&
                  !updated.includes("All")
                ) {
                  updated = ["All"];
                }

                if (updated.includes("All") && updated.length > 1) {
                  updated = updated.filter((x) => x !== "All");
                }

                updateField("genders", updated);
                setError("");
              }}
              className={`text-xs px-4 py-1 rounded-full border font-medium transition ${
                {
                  true: "bg-rose-500 text-white border-rose-500",
                  false:
                    "bg-[#1f1f1f] border-gray-600 text-gray-300 hover:border-rose-300",
                }[active]
              }`}
            >
              {g}
            </button>
          );
        })}
      </div>

      {/* Languages */}
      <div>
        <label className="form-label flex items-center gap-2 mb-2 text-indigo-400">
          <Languages className="w-4 h-4" />
          Languages to Target
        </label>
        <Select
          isMulti
          options={LANGUAGES.map((x) => ({ value: x, label: x }))}
          value={(formData.languages || []).map((x) => ({
            value: x,
            label: x,
          }))}
          onChange={(vals) => handleMulti("languages", vals)}
          placeholder="Add languages..."
          styles={customSelectStyles}
        />
      </div>

      {/* Interests */}
      <div>
        <label className="form-label flex items-center gap-2 mb-2 text-emerald-400">
          <HeartHandshake className="w-4 h-4" />
          Interests / Behaviors
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {INTERESTS.map(({ label, icon: Icon }) => {
            const active = formData.interests?.includes(label);
            return (
              <button
                key={label}
                onClick={() => toggleInterest(label)}
                className={`group px-4 py-3 flex items-center gap-2 text-sm rounded-xl border transition-all duration-200 shadow-sm hover:shadow-md ${
                  active
                    ? "bg-emerald-800 text-white border-emerald-500"
                    : "bg-[#1f1f1f] text-gray-300 border-gray-700 hover:border-emerald-400"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    active ? "text-white" : "text-gray-400"
                  }`}
                />
                <span className="font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
});

export default Step2_TargetAudience;
