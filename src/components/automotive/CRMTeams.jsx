"use client";

import { motion } from "framer-motion";
import {
  BuildingStorefrontIcon,
  MegaphoneIcon,
  UsersIcon,
  TruckIcon,
  ClipboardDocumentListIcon,
  CurrencyRupeeIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const teams = [
  {
    icon: <BuildingStorefrontIcon className="w-6 h-6 text-blue-700" />,
    title: "Showroom Executives",
    desc: "Prioritize leads and convert them faster!",
  },
  {
    icon: <MegaphoneIcon className="w-6 h-6 text-blue-700" />,
    title: "Marketing Executives",
    desc: "Engage and nurture would-be buyers effectively.",
  },
  {
    icon: <UsersIcon className="w-6 h-6 text-blue-700" />,
    title: "Showroom Managers",
    desc: "Improve inquiry-to-booking rates.",
  },
  {
    icon: <ClipboardDocumentListIcon className="w-6 h-6 text-blue-700" />,
    title: "Field Force Agents",
    desc: "Reduce canceled test drive bookings.",
  },
  {
    icon: <TruckIcon className="w-6 h-6 text-blue-700" />,
    title: "Dealership Owners",
    desc: "Reduce overheads and improve vehicle sales.",
  },
  {
    icon: <CurrencyRupeeIcon className="w-6 h-6 text-blue-700" />,
    title: "Vehicle Aggregators",
    desc: "Share qualified buyers and sellers.",
  },
  {
    icon: <CogIcon className="w-6 h-6 text-blue-700" />,
    title: "Manufacturers",
    desc: "Reduce inventory costs and streamline logistics.",
  },
];

export default function CRMTeams() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#f9fafb] text-gray-900 relative">
      <div className="max-w-7xl mx-auto mb-16 text-left">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          One CRM for All Automotive Teams
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 mt-3 max-w-2xl"
        >
          Drive performance across all departments with tailored CRM workflows
          and real-time lead tracking tools.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {teams.map((team, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-xl shadow-sm">
                {team.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {team.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600">{team.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
