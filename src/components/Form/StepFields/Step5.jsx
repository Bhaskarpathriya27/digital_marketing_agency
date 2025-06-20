"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { UploadCloud, FileText } from "lucide-react";

const Step5 = forwardRef(({ formData, updateField }, ref) => {
  const [file, setFile] = useState(formData.attachment || null);

  useImperativeHandle(ref, () => ({
    validate: () => {
      const { firstName, lastName, email, phone, company, website } = formData;

      if (!firstName || !lastName || !email || !phone || !company) {
        toast.error("Please fill in all required contact fields.");
        return { valid: false };
      }
      return { valid: true };
    },
  }));

  const handleFileUpload = (e) => {
    const selected = e.target.files[0];
    if (selected.size > 2 * 1024 * 1024) {
      toast.error("File exceeds 2MB limit.");
      return;
    }
    setFile(selected);
    updateField("attachment", selected);
  };

  return (
    <motion.div
      className="space-y-12 text-white max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { label: "First Name", key: "firstName", required: true },
          { label: "Last Name", key: "lastName", required: true },
          { label: "Email Address", key: "email", required: true },
          { label: "Phone Number", key: "phone", required: true },
          { label: "Company Name", key: "company", required: true },
          { label: "Website/URL", key: "website", required: false },
        ].map(({ label, key, required }) => (
          <div key={key}>
            <label className="block text-sm font-medium mb-1 text-white/80">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={key === "email" ? "email" : "text"}
              placeholder={label}
              value={formData[key] || ""}
              onChange={(e) => updateField(key, e.target.value)}
              className="w-full bg-white/5 backdrop-blur-md border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        ))}
      </div>

      {/* Upload Presentation */}
      <div>
        <label className="block text-sm font-medium mb-3 text-white/80">
          Upload company presentation or any other relevant file (max 2MB)
        </label>

        <div className="relative w-full border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer transition hover:border-emerald-500 bg-white/5 backdrop-blur-md">
          <input
            type="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            onChange={handleFileUpload}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center gap-2">
            <UploadCloud className="w-8 h-8 text-emerald-400" />
            <p className="text-sm text-gray-300">
              {file ? (
                <>
                  <FileText className="inline w-4 h-4 mr-1" />
                  {file.name}
                </>
              ) : (
                "Drop a file here or click to upload"
              )}
            </p>
            <p className="text-xs text-gray-400">Max size: 2MB</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default Step5;
