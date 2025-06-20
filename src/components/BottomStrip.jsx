"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import {
  RocketLaunchIcon,
  ChatBubbleLeftEllipsisIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { Icon: RocketLaunchIcon, label: "+ 100 successful projects" },
  { Icon: ChatBubbleLeftEllipsisIcon, label: "+ 40 happy customers" },
  { Icon: UsersIcon, label: "+ 20 enterprise clients" },
];
const logos = ["amazon", "dribbble", "notion", "netflix"];

export default function BottomStrip() {
  const marqueeControls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      marqueeControls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    }, 800);

    return () => clearTimeout(timeout);
  }, [marqueeControls]);

  return (
    <div className="mt-6 px-4 flex flex-col md:flex-row items-center gap-6">
      {/* 🟡 Stats Pills */}
      <div className="flex flex-wrap gap-4 flex-shrink-0">
        {stats.map(({ Icon, label }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="flex items-center space-x-2 px-4 py-3 border border-dark-subtext rounded-full bg-dark-card shadow-sm">
              <Icon className="w-5 h-5 text-dark-subtext" />
              <span className="text-dark-subtext font-medium uppercase text-sm">
                {label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔵 Logos Marquee Pill */}
      <div className="flex-1 overflow-hidden border border-dark-subtext px-8 rounded-full bg-dark-card shadow-sm">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={marqueeControls}
        >
          {[...logos, ...logos].map((name, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 relative px-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + (idx % logos.length) * 0.15,
                duration: 0.5,
              }}
            >
              <Image
                src={`/logos/${name}.png`}
                alt={name}
                className="w-14 filter brightness-0 invert"
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
