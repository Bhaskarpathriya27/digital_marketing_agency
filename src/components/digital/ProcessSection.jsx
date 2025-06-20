"use client";

import { motion } from "framer-motion";
import { Target, Layers3, Rocket, Settings2 } from "lucide-react";

const steps = [
  {
    title: "Foundation",
    icon: Layers3,
    description:
      "Our digital marketing strategy for real estate begins with a strategic groundwork. Unlike other social media marketing companies for real estate that work on a rigid formula, our online marketing services help you delve deep into your brand’s essence and market landscape. We love laying a solid foundation for the best digital strategies that achieve your business goals.",
  },
  {
    title: "Integration",
    icon: Settings2,
    description:
      "We are crazy about everything digital. Our online marketing for commercial real estate creates agile digital campaigns. We deliver responsive web designs and result-backed social media initiatives. Our team ensures seamless integration of the latest technologies and creative concepts to elevate your brand’s online presence.",
  },
  {
    title: "Precision Execution",
    icon: Rocket,
    description:
      "Executing campaigns with precision and expertise is our passion. Our digital marketing services for real estate carefully deliver measurable results that you’d be proud of. RealtyDigi continuously optimizes performance, ensuring your marketing efforts yield maximum impact and ROI.",
  },
  {
    title: "Adaptive Optimization",
    icon: Target,
    description:
      "Our realtor online advertising process includes adaptive optimization. We monitor campaign performance in real time, rely on rich data insights, and refine strategies to enhance your digital footprint across platforms.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden bg-[#181818] text-white">
      <div className="absolute -top-24 left-12 w-72 h-72 bg-[#facc15]/10 blur-3xl rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#facc15]/10 blur-2xl rounded-full z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Our Process <br />
          <span className="text-[#facc15]">
            Let’s give your thoughts a shape
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start gap-6 p-6 rounded-2xl bg-[#1f1f1f] shadow-md border border-[#facc15]/10 hover:shadow-lg transition-all"
            >
              <div className="min-w-[64px] min-h-[64px] rounded-full flex items-center justify-center bg-[#facc15]/10 border border-[#facc15]/30">
                <step.icon size={32} className="text-[#facc15]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
