"use client";

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Briefcase,
  DollarSign,
  Headset,
  UserCheck,
  Settings,
  UserRoundSearch,
} from "lucide-react";

const roles = [
  { title: "Tele-Calling Teams", icon: Headset },
  { title: "Student Counsellors", icon: UserCheck },
  { title: "Educational Agents", icon: GraduationCap },
  { title: "Admission Managers", icon: Users },
  { title: "Marketing Managers", icon: Briefcase },
  { title: "Finance Teams", icon: DollarSign },
  { title: "Administrative Staff", icon: Settings },
  { title: "Students", icon: UserRoundSearch },
];

export default function TeamAccessSection() {
  return (
    <section className="relative py-28 px-6 md:px-16 bg-[#181818] overflow-hidden">
      {/* 🔆 Glow Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600 opacity-10 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500 opacity-10 rounded-full blur-[140px] z-0" />

      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          An End-to-End Admissions CRM for <br />
          <span className="text-[#0ea5e9]">All Your Teams and Prospects</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 0px 20px rgba(14, 165, 233, 0.2)",
            }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 group hover:bg-white/10"
          >
            <div className="bg-cyan-500/10 p-3 rounded-xl shadow-md transition-all group-hover:scale-110">
              <role.icon className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300" />
            </div>
            <span className="font-medium text-white-100 text-base">
              {role.title}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
