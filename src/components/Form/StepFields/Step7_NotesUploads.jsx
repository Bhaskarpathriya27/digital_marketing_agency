"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash, Upload } from "lucide-react";

export default function Step7_NotesUploads({ formData, updateField }) {
  const [urls, setUrls] = useState(formData.competitorUrls || [""]);

  const handleUrlChange = (index, value) => {
    const updated = [...urls];
    updated[index] = value;
    setUrls(updated);
    updateField("competitorUrls", updated);
  };

  const addUrlField = () => {
    setUrls([...urls, ""]);
  };

  const removeUrl = (index) => {
    const updated = urls.filter((_, i) => i !== index);
    setUrls(updated);
    updateField("competitorUrls", updated);
  };

  const handleFileUpload = (key, file) => {
    updateField(key, file);
  };

  const filePreview = (file) =>
    file?.type?.startsWith("image/")
      ? URL.createObjectURL(file)
      : file?.name || "Uploaded";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      {/* 📝 Special Notes */}
      <div>
        <label className="form-label text-purple-700 font-medium mb-2 block">
          Special Notes / Goals / Offers
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your goals, offers, or instructions for our team"
          className="input-light w-full resize-none"
          value={formData.specialNotes || ""}
          onChange={(e) => updateField("specialNotes", e.target.value)}
        />
      </div>

      {/* 🔗 Competitor URLs */}
      <div className="space-y-2">
        <label className="form-label text-blue-700 font-medium mb-2 block">
          Competitor Pages / References
        </label>
        {urls.map((url, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="url"
              className="input-light flex-1"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => handleUrlChange(index, e.target.value)}
            />
            {urls.length > 1 && (
              <button
                onClick={() => removeUrl(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addUrlField}
          className="text-sm text-indigo-600 flex items-center gap-1 mt-1"
        >
          <Plus className="w-4 h-4" />
          Add another URL
        </button>
      </div>

      {/* 📎 Upload Files */}
      <div className="space-y-6">
        {[
          { label: "Company Logo", key: "companyLogo" },
          { label: "Brand Guidelines", key: "brandGuidelines" },
          { label: "Sample Campaign References", key: "campaignSamples" },
          { label: "Previous Ad Reports (Optional)", key: "adReports" },
        ].map(({ label, key }) => (
          <div key={key}>
            <label className="form-label text-emerald-600 font-medium mb-2 block">
              {label}
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
                <Upload className="w-4 h-4" />
                <span className="text-sm font-medium">Upload File</span>
                <input
                  type="file"
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={(e) => handleFileUpload(key, e.target.files[0])}
                  hidden
                />
              </label>

              {formData[key] && (
                <div className="text-xs text-gray-600 max-w-[200px] truncate">
                  {formData[key]?.type?.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(formData[key])}
                      alt="Preview"
                      className="h-10 rounded shadow"
                    />
                  ) : (
                    <span className="text-indigo-700">
                      {formData[key]?.name}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
