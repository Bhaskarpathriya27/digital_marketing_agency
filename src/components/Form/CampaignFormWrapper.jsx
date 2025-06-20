"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarStepper from "./SidebarStepper";
import StepForm from "./StepForm";

const totalSteps = 6;
// const totalSteps = 8;

export default function CampaignFormWrapper() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    objectives: [],
    services: [],
    leadProducts: "",
    creativeAgency: "",
    monthlyBudget: "",
    additionalInfo: "",
    keyCompetitors: "",
    locations: [],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    attachment: null,
    ageRange: [18, 40],
    genders: [],
    languages: [],
    interests: [],
    platforms: [],
    otherPlatforms: "",
    totalBudget: "",
    currency: "₹",
    dailyBudget: "",
    runContinuously: false,
    startDate: null,
    endDate: null,
    hasCreatives: null,
    mediaFiles: [],
    copyFiles: [],
    needDesign: false,
    creativeBrief: "",
    hasLandingPage: null,
    landingPageUrl: "",
    needLandingPageDesign: false,
    landingPageBrief: "",
    leadMethod: "",
    crmDetails: "",
    captureFields: [],
    deliveryPrefs: {
      email: "",
      whatsapp: "",
      sheetLink: "",
      webhook: "",
    },
    specialNotes: "",
    competitorUrls: [""],
    companyLogo: null,
    brandGuidelines: null,
    campaignSamples: null,
    adReports: null,
  });

  const containerRef = useRef(null);

  const handleNext = () =>
    setStep((prev) => Math.min(prev + 1, totalSteps - 1));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));
  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [step]);

  return (
    <div className="flex md:flex-row flex-col h-full bg-[#181818] text-neutral-900 relative rounded-xl shadow-xl overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-[4px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 z-50 rounded-r-full"
        animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        transition={{ duration: 0.4 }}
      />

      <SidebarStepper step={step} />

      {/* Right Section with Background Effects */}
      <div
        ref={containerRef}
        className="flex-1 relative overflow-y-auto px-12 py-16 text-white bg-gradient-to-br from-[#1e293b] to-[#0f172a]"
        data-lenis-prevent
      >
        {/* Floating Blobs */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full z-0"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-600/10 blur-2xl rounded-full z-0"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <StepForm
                step={step}
                formData={formData}
                updateField={updateField}
                onNext={handleNext}
                onBack={handleBack}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
