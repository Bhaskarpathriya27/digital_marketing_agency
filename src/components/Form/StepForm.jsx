import { useRef, useState } from "react";
import Step1_BasicInfo from "./StepFields/Step1_BasicInfo";
import { motion } from "framer-motion";
import Step2_TargetAudience from "./StepFields/Step2_TargetAudience";
import Step3_PlatformBudget from "./StepFields/Step3_PlatformBudget";
import Step4_CreativeAssets from "./StepFields/Step4_CreativeAssets";
import Step5_LandingPage from "./StepFields/Step5_LandingPage";
import Step6_LeadCollection from "./StepFields/Step6_LeadCollection";
import Step7_NotesUploads from "./StepFields/Step7_NotesUploads";
import Step8_ThankYou from "./StepFields/Step8_ThankYou";
import Step2 from "./StepFields/Step2";
import Step3 from "./StepFields/Step3";
import Step4 from "./StepFields/Step4";
import Step6_ContactAndUpload from "./StepFields/Step5_LandingPage";
import Step5 from "./StepFields/Step5";

export default function StepForm({
  step,
  onNext,
  onBack,
  formData,
  updateField,
}) {
  const stepRefs = useRef([]);

  const handleNextStep = async () => {
    console.log("formData", formData);

    const validator = stepRefs.current[step];
    if (validator?.validate) {
      const result = await validator.validate();
      if (!result.valid) {
        return; // Don't move forward
      }
    }

    if (step === 4 && formData.objective !== "Lead Generation") {
      onNext();
      setTimeout(() => onNext(), 0);
    } else {
      onNext();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <motion.div
            key="step1"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Step1_BasicInfo
              ref={(el) => (stepRefs.current[0] = el)}
              formData={formData}
              updateField={updateField}
            />
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            key="step2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Step2
              ref={(el) => (stepRefs.current[1] = el)}
              formData={formData}
              updateField={updateField}
            />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step3"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Step3
              ref={(el) => (stepRefs.current[2] = el)}
              formData={formData}
              updateField={updateField}
            />
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Step4 formData={formData} updateField={updateField} />
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step5"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Step5 formData={formData} updateField={updateField} />
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Step8_ThankYou />
          </motion.div>
        );
      // case 5:
      //   // 👇 If objective is NOT "Lead Generation", skip Step 5
      //   if (formData.objective !== "Lead Generation") {
      //     onNext(); // Move to Step 6 (NotesUpload)
      //     return null;
      //   }

      //   return (
      //     <motion.div
      //       key="step6"
      //       initial={{ y: 30, opacity: 0 }}
      //       animate={{ y: 0, opacity: 1 }}
      //       exit={{ y: -30, opacity: 0 }}
      //       transition={{ duration: 0.4 }}
      //     >
      //       <Step6_LeadCollection
      //         formData={formData}
      //         updateField={updateField}
      //       />
      //     </motion.div>
      //   );

      // case 6:
      //   return (
      //     <motion.div
      //       key="step7"
      //       initial={{ y: 30, opacity: 0 }}
      //       animate={{ y: 0, opacity: 1 }}
      //       exit={{ y: -30, opacity: 0 }}
      //       transition={{ duration: 0.4 }}
      //     >
      //       <Step7_NotesUploads formData={formData} updateField={updateField} />
      //     </motion.div>
      //   );

      // case 7:
      //   return (
      //     <motion.div
      //       key="step8"
      //       initial={{ y: 30, opacity: 0 }}
      //       animate={{ y: 0, opacity: 1 }}
      //       exit={{ y: -30, opacity: 0 }}
      //       transition={{ duration: 0.4 }}
      //     >
      //       <Step8_ThankYou />
      //     </motion.div>
      //   );

      default:
        return <div className="text-gray-500">Coming soon...</div>;
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {renderStep()}

      {/* {step !== 7 && ( */}
      {step !== 5 && (
        <div className="flex justify-between pt-6 border-t border-gray-200">
          {/* ⬅️ BACK */}
          {step > 0 ? (
            <button
              onClick={() => {
                // 👇 Skip Step 5 when going back if not Lead Generation
                if (step === 6 && formData.objective !== "Lead Generation") {
                  onBack(); // Go to Step 4
                  setTimeout(() => onBack(), 0); // skip Step 5
                } else {
                  onBack();
                }
              }}
              className="text-sm text-white hover:text-gray-300"
            >
              ← Back
            </button>
          ) : (
            <span />
          )}

          {/* ➡️ NEXT */}
          <button
            onClick={handleNextStep}
            className="bg-white hover:bg-gray-300 px-5 py-2 rounded text-black text-sm transition"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
