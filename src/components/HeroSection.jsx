"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { PlayIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";
import BottomStrip from "./BottomStrip";
import { useModal } from "@/context/ModalContext";
const cards = [
  // 1 Search Engine: crisp white fading into very light gray
  {
    title: "Search Engine",
    subtitle: "Optimization",
    imgSrc: "/mag.webp",
    rotation: "-40deg",
    imgRotation: "80",
    style: {
      background: "linear-gradient(135deg, #FFFFFF 0%, #F7F8FA 100%)",
      color: "#000",
      rotate: "-25deg",
    },
  },

  // 2 PPC: fire‑orange → sunset red
  {
    title: "Pay‑per‑click",
    subtitle: "Advertising",
    imgSrc: "/arrow2.png",
    rotation: "-30deg",
    imgRotation: "60",
    style: {
      background: "linear-gradient(135deg, #FF7A00 0%, #FF1A1A 100%)",
      color: "#FFF",
      rotate: "-30deg",
    },
  },
  {
    title: "Lead",
    subtitle: "Generation",
    imgSrc: "/magnet.png",
    rotation: "-30deg",
    imgRotation: "45",
    style: {
      background: "linear-gradient(135deg, #e51617 50%, #E3E8EF 100%)",
      color: "#FFF",
      rotate: "-25deg",
    },
  },
  // 3 Analytics: white → very pale silver (matches mic)
  {
    title: "Analytics and",
    subtitle: "Tracking",
    imgSrc: "/mic.webp",
    rotation: "-33deg",
    imgRotation: "45",
    style: {
      background: "linear-gradient(135deg, #FFFFFF 0%, #ECEEF1 100%)",
      color: "#000",
      rotate: "-25deg",
    },
  },
  // 5 Social: charcoal → pitch black
  {
    title: "Social Media",
    subtitle: "Marketing",
    imgSrc: "/dashboard.png",
    rotation: "-21deg",
    imgRotation: "80",
    style: {
      background: "linear-gradient(135deg, #38BDF8 0%, #1E3A8A 100%)", // light blue to indigo
      color: "#FFF",
      rotate: "-20deg",
    },
  },
];

const entryOffsets = [
  { y: -200 }, // 1st from above
  { x: -200 }, // 2nd from left
  { y: -200 }, // 3rd from above
  { x: 200 }, // 4th from right
  { y: -200 }, // 5th from above
];

export default function BottomSection() {
  const wrapper = useRef(null);
  const { isModalOpen, setIsModalOpen } = useModal();

  useEffect(() => {
    // horizontal parallax on cards
    const ctx = gsap.context(() => {
      gsap.to(wrapper.current, {
        xPercent: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top center",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  // calculate horizontal step so first card sits at 0, last at (100% - cardWidth)
  const CARD_W = 440; // must match FeatureCard w-[450px]
  const STEPS = cards.length - 1;
  const stepCalc = `calc((100% - ${CARD_W}px) / ${STEPS})`;

  return (
    <section className="relative overflow-hidden py-14 ">
      {/* <div
        className="absolute inset-0 z-0 opacity-20 bg-no-repeat bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/background2.jpg')",
        }}
      /> */}
      <div className="absolute w-[280px] h-[280px] bg-blue-600/20 rounded-full blur-[100px] top-[-50px] left-[-60px] animate-blob z-0" />
      <div className="absolute w-[220px] h-[220px] bg-purple-500/30 rounded-full blur-[80px] bottom-[50px] right-[-80px] animate-blob animation-delay-2000 z-0" />

      {/* Cards Container */}
      <div
        ref={wrapper}
        className="hidden md:block relative w-full h-[450px] mt-24"
      >
        {cards.map((c, i) => {
          const entry = entryOffsets[i] || { y: -200 };
          return (
            <motion.div
              key={i}
              // Start off-screen based on entryOffsets
              initial={{ opacity: 0, ...entry }}
              // Animate to natural position
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{
                delay: i * 0.3,
                type: "spring",
                stiffness: 120,
              }}
              className="absolute"
              style={{
                top: `${i * 40}px`,
                left: `calc(${i} * ${stepCalc})`,
                width: `${CARD_W}px`,
                height: "290px",
                transform: "translate(30px, 0px)",
              }}
            >
              <FeatureCard index={i} {...c} />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden flex flex-col items-center gap-8 mt-8 px-4">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="w-full"
          >
            <FeatureCard
              index={i}
              {...c}
              // Override rotation & desktop-only style
              rotation="0deg"
              style={{
                background: c.style?.background ?? c.bgColor,
                color: c.style?.color,
                rotate: "0deg",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* — Headline + CTA Buttons — */}
      {/* <div className="md:px-32 px-0 mt-10 md:mt-0">
        <div className="text-left px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="uppercase text-dark-subtext tracking-wide font-extralight text-3xl md:text-3xl">
              Empowering Growth
            </h1>
            <h1 className="uppercase font-bold text-4xl md:text-4xl text-dark-text mt-2">
              Unlocking Digital Solutions
            </h1>
          </div>
          <div className="flex justify-center space-x-4 mt-6 md:mt-0">
            <button
              className="flex items-center space-x-2 px-6 py-3 border border-dark-subtext rounded-full bg-dark-bg text-dark-text hover:bg-dark-card transition-all"
              onClick={() => setIsModalOpen(true)}
            >
              <span>Get started</span>
              <ArrowRightIcon className="w-5 h-5 text-dark-subtext" />
            </button>
          </div>
        </div>

        <BottomStrip />
      </div> */}
    </section>
  );
}
