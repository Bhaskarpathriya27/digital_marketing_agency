"use client";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

const roles = [
  {
    title: "Hospitals & Clinics",
    desc: "Streamline patient intake, admissions, engagement, and retention from one unified platform.",
    icon: "Hospital",
    color: "bg-orange-400/10 text-orange-400",
  },
  {
    title: "Fertility Clinics",
    desc: "Simplify appointments, automate manual tasks, and communicate effectively with patients.",
    icon: "HeartPulse",
    color: "bg-yellow-400/10 text-yellow-400",
  },
  {
    title: "Hospice & Palliative Care",
    desc: "Manage appointments for home visits and outpatient services with ease.",
    icon: "Syringe",
    color: "bg-blue-400/10 text-blue-400",
  },
  {
    title: "Diagnostic Centres",
    desc: "Onboard doctors, streamline daily operations, and track efficiency and outcomes.",
    icon: "Microscope",
    color: "bg-slate-400/10 text-slate-300",
  },
  {
    title: "Dental Clinics",
    desc: "Streamline patient flow, scheduling, retention, and reminders.",
    icon: "Stethoscope",
    color: "bg-teal-400/10 text-teal-300",
  },
  {
    title: "HealthTech Companies",
    desc: "Centralize inquiries, boost conversions, and enhance user experience across channels.",
    icon: "Building2",
    color: "bg-orange-400/10 text-orange-400",
  },
];

export default function TeamAccess() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#181818] relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Healthcare CRM for All Kinds of Practices – Big or Small
        </h2>
        <p className="text-gray-400 mt-3">
          Scalable tools for diverse healthcare providers across various
          specialties.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {roles.map((role, i) => {
          const Icon = LucideIcons[role.icon];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-6 pt-12 border border-[#2c2c2c] bg-[#1e1e1e] shadow-xl hover:shadow-emerald-500/10 transition-all group ${
                i % 2 === 0 ? "mt-0" : "mt-8"
              }`}
            >
              {/* Floating Icon */}
              <div
                className={`absolute -top-5 left-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-inner ${role.color}`}
              >
                {Icon && <Icon className="h-6 w-6" />}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-1">
                {role.title}
              </h3>
              <p className="text-sm text-gray-400">{role.desc}</p>

              {/* Glow ring on hover */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-emerald-400 group-hover:shadow-[0_0_0_4px_rgba(16,185,129,0.15)] transition-all pointer-events-none"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
