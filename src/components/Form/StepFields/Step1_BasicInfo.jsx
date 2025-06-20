"use client";

import {
  MousePointerClick,
  Eye,
  Globe,
  Download,
  Users,
  Video,
  ShoppingBag,
  BadgePercent,
  LayoutDashboard,
  MonitorSmartphone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useImperativeHandle, forwardRef } from "react";
import toast from "react-hot-toast";

// 🎯 Updated Objectives
const objectives = [
  { label: "Lead Generation (Performance)", icon: MousePointerClick },
  { label: "Pay Per Click (Branding)", icon: Eye },
  { label: "Visit Your Website", icon: Globe },
  { label: "Call Per Action", icon: Users },
  { label: "App Download", icon: Download },
  { label: "Landing Page Creation", icon: LayoutDashboard },
  { label: "Website Creation", icon: MonitorSmartphone },
  { label: "Dynamic Page Creation", icon: BadgePercent },
  { label: "Facebook Ad", icon: Facebook },
  { label: "Instagram Reels", icon: Instagram },
  { label: "LinkedIn Ads", icon: Linkedin },
];

const Step1_BasicInfo = forwardRef(({ formData, updateField }, ref) => {
  const { objectives: selectedObjectives = [] } = formData;

  const toggleObjective = (label) => {
    const updated = selectedObjectives.includes(label)
      ? selectedObjectives.filter((obj) => obj !== label)
      : [...selectedObjectives, label];

    updateField("objectives", updated);
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!selectedObjectives || selectedObjectives.length === 0) {
        toast.error("Please select at least one objective.");
        return { valid: false };
      }
      return { valid: true };
    },
  }));

  return (
    <div className="space-y-10">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-white">
        What Would You Like to Achieve?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {objectives.map((item, index) => {
          const Icon = item.icon;
          const isActive = selectedObjectives.includes(item.label);

          return (
            <button
              key={index}
              onClick={() => toggleObjective(item.label)}
              className={`group relative rounded-2xl px-5 py-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10
                ${
                  isActive
                    ? "ring-2 ring-orange-400/80 scale-[1.03] shadow-xl"
                    : "hover:scale-[1.01]"
                }`}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-inner">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-white text-center leading-tight">
                {item.label}
              </span>

              {isActive && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-orange-400 animate-ping opacity-70" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
});

export default Step1_BasicInfo;
