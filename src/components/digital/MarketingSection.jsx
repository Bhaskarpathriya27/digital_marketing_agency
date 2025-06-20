"use client";

import { motion } from "framer-motion";

export default function MarketingSection() {
  return (
    <section className="relative py-28 px-6 md:px-16 bg-[#111] text-white overflow-hidden">
      {/* Floating Accents */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#facc15]/10 blur-2xl rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#facc15]/10 blur-2xl rounded-full z-0" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Best{" "}
            <span className="text-[#facc15]">
              Real Estate Digital Marketing Services
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We provide buzzing digital marketing services for real estate
            agencies based anywhere on the globe. We breathe digital by being
            digital. Not just marketing, we’re a digital communication company
            that drives through the power of data.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mt-4">
            Our expertise lies in seamlessly integrating the latest digital
            innovations to amplify your agency’s online presence and drive
            unparalleled growth. Beyond conventional internet marketing for
            realtors, we are a dynamic digital agency firm that propels your
            real estate agency forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#facc15] mb-4">
            The Only Real Estate Digital Marketing Agency That Surpasses
            Expectations
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            Tangible goods or intangible services, whatever it is, our real
            estate-based digital marketing services deliver result-oriented
            marketing. Beat the odds with high-quality conversions and long-term
            collaborations with our top-notch real estate online marketing
            services for real estate.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mt-4">
            We excel in helping you surpass expectations by achieving
            high-quality conversions and fostering enduring mutually beneficial
            alliances.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#facc15] mb-4">
            Discover The ‘Why’ And Leave The ‘How’ To Us.
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            Grow exponentially with a real estate marketing agency that’s simply
            being digital by breathing digital. From the best real estate
            website marketing to the hottest social sites, discover the ‘Why’
            and leave the ‘How’ to us. Partner with us and get real estate
            marketing strategies to work like a charm for you.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mt-4">
            Whether it's optimizing your traffic ratios or mastering the latest
            trends on social media platforms, we are dedicated to catering to
            your needs. Our team is committed to crafting personalized
            strategies that align seamlessly with your goals and resonate
            powerfully with your target audience.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mt-4">
            Experience marketing solutions that work effortlessly to enhance
            your brand's presence and drive substantial growth in the
            competitive real estate market.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#facc15] mb-4">
            Streamline Lead Generation For Your Real Estate Agency Today
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            With more than 100 real estate business cards, brochures and
            websites created, our digital marketing strategies for real estate
            agencies work best for businesses of all sizes. Think of us when you
            think of monetizing. Activate cross-channel touch points with us.
            From plain efforts to multi-threaded campaigns, we do it all.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mt-4">
            When it comes to monetizing your business, we are your go-to
            partner, equipped with the expertise to maximize your revenue
            streams effectively.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mt-4">
            Partner with us to activate and synchronize cross-channel touch
            points, leveraging a cohesive approach across various digital
            platforms. Whether you require straightforward initiatives or
            intricate, multi-faceted campaigns, our comprehensive range of
            services is suited to your specific needs and surpasses your
            expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
