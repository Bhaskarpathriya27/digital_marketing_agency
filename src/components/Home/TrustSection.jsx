"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion";

function FloatingSphere() {
  const ref = useRef();

  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.x = mouse.y * Math.PI;
      ref.current.rotation.y = mouse.x * Math.PI;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} scale={1.2} ref={ref}>
      <MeshDistortMaterial
        color="#3B82F6" // Tailwind's blue-500
        distort={0.5}
        speed={1}
        roughness={0.4}
      />
    </Sphere>
  );
}

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* 🔵 Blue radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-[700px] h-[700px] bg-gradient-to-br from-blue-700/30 to-blue-900/10 rounded-full blur-[180px] opacity-50 z-0" />

      {/* 🌐 Interactive Sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-[400px] h-[400px] z-0 pointer-events-none opacity-80">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} />
          <FloatingSphere />
        </Canvas>
      </div>

      {/* 🧠 Content */}
      <motion.div
        className="relative max-w-5xl mx-auto px-4 text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          Your Trusted Partner in{" "}
          <span className="text-blue-400">Digital Marketing</span>,
          <br />
          Driving Business Success
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-400">
          Our proven strategies and expert team consistently deliver impactful
          results — helping businesses thrive in the ever-evolving digital
          landscape.
        </p>
      </motion.div>
    </section>
  );
}
