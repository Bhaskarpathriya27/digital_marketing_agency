"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function FeatureCard({
  title,
  subtitle,
  imgSrc,
  bgColor = "",
  rotation = "0deg",
  imgRotation = "0",
  style = {},
}) {
  return (
    <motion.div
      className={`rounded-xl shadow-md p-6 w-[350px] h-[150px] flex flex-col relative cursor-pointer transition-all ${bgColor} justify-center`}
      style={{
        ...style,
        transform: `rotate(${rotation})`,
      }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
      }}
    >
      {/* Text Content */}

      {/* CTA + Image */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-[#cfcfcf] font-medium">{subtitle}</p>
        </div>
        <div
          className="w-36 h-36 absolute top-0 right-0
        "
        >
          <Image
            src={imgSrc}
            alt={title}
            fill
            className={`object-contain rotate-[${imgRotation}deg]`}
          />
        </div>
      </div>
    </motion.div>
  );
}
