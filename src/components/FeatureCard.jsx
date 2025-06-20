"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function FeatureCard({
  title,
  subtitle,
  imgSrc,
  bgColor = "", // Tailwind classes (empty for custom)
  rotation,
  imgRotation,
  style = {}, // custom inline style (e.g. gradient)
}) {
  return (
    <motion.div
      className={`
        rounded-2xl shadow-2xl p-6
        w-full sm:w-[450px] sm:h-[180px]
        md:block flex justify-center cursor-pointer
        ${bgColor}
      `}
      style={{
        ...style, // your custom background / color / rotate
        // rotate: style.rotate || rotation,
        transform: `rotate(${rotation})`,
      }}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120 }}
      whileHover={{ y: -15, scale: 1.05 }}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-xl text-[#bababa] font-semibold">{subtitle}</p>
        </div>
        <button className="mt-4 text-lg font-medium flex items-center gap-2">
          <ArrowRightCircleIcon width={38} className="transform -rotate-45" />{" "}
          Learn More
        </button>
      </div>

      <div className=" relative md:absolute md:top-0 md:-right-12 md:w-64 md:h-48 w-28">
        <Image
          src={imgSrc}
          alt={title}
          width={180}
          height={180}
          className={`transform object-contain rotate-${imgRotation}`}
        />
      </div>
    </motion.div>
  );
}
