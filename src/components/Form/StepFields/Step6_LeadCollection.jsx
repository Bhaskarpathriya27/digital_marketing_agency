"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Facebook,
  Phone,
  FileText,
  Globe,
  Link2,
  Mail,
  MessageSquarePlus,
  Plus,
} from "lucide-react";

const leadMethods = [
  { label: "Facebook Lead Form", icon: Facebook },
  { label: "Website Form", icon: Globe },
  { label: "WhatsApp", icon: MessageSquarePlus },
  { label: "Call Tracking", icon: Phone },
  { label: "Google Form", icon: FileText },
  { label: "CRM Integration", icon: Link2 },
];

const defaultFields = ["Name", "Email", "Phone", "City", "Budget"];

export default function Step6_LeadCollection({ formData, updateField }) {
  const [selectedMethod, setSelectedMethod] = useState(
    formData.leadMethod || ""
  );
  const [fields, setFields] = useState(formData.captureFields || []);
  const [customField, setCustomField] = useState("");
  const [delivery, setDelivery] = useState(formData.deliveryPrefs || {});

  const toggleField = (field) => {
    const newFields = fields.includes(field)
      ? fields.filter((f) => f !== field)
      : [...fields, field];
    setFields(newFields);
    updateField("captureFields", newFields);
  };

  const addCustomField = () => {
    const trimmed = customField.trim();
    if (trimmed && !fields.includes(trimmed)) {
      toggleField(trimmed);
      setCustomField("");
    }
  };

  const handleDeliveryChange = (key, val) => {
    const newDelivery = { ...delivery, [key]: val };
    setDelivery(newDelivery);
    updateField("deliveryPrefs", newDelivery);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      {/* 🎯 Lead Collection Method */}
      <div>
        <label className="form-label text-purple-600 font-medium mb-2 block">
          Preferred Lead Collection Method
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {leadMethods.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => {
                setSelectedMethod(label);
                updateField("leadMethod", label);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                selectedMethod === label
                  ? "bg-indigo-100 border-indigo-400 text-indigo-800 shadow"
                  : "bg-white text-gray-700 border-gray-200 hover:border-indigo-300"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {selectedMethod === "CRM Integration" && (
          <input
            type="text"
            placeholder="Enter CRM details..."
            className="input-light mt-4 w-full"
            value={formData.crmDetails || ""}
            onChange={(e) => updateField("crmDetails", e.target.value)}
          />
        )}
      </div>

      {/* 📋 Fields to Capture */}
      <div>
        <label className="form-label text-emerald-600 font-medium mb-2">
          Fields to Capture from Leads
        </label>
        <div className="flex flex-wrap gap-3">
          {defaultFields.map((field) => (
            <button
              key={field}
              onClick={() => toggleField(field)}
              className={`px-4 py-1 rounded-full text-sm border transition ${
                fields.includes(field)
                  ? "bg-emerald-500 text-white border-emerald-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-emerald-300"
              }`}
            >
              {field}
            </button>
          ))}
        </div>

        {/* ➕ Add custom field */}
        <div className="flex mt-3 gap-2">
          <input
            type="text"
            placeholder="Custom Question"
            className="input-light w-full"
            value={customField}
            onChange={(e) => setCustomField(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCustomField()}
          />
          <button
            onClick={addCustomField}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 text-sm"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>

      {/* 🚀 Lead Delivery Preferences */}
      <div className="space-y-5">
        <label className="form-label text-blue-600 font-medium mb-2">
          Lead Delivery Preferences
        </label>

        <div className="space-y-3">
          <input
            type="email"
            placeholder="Delivery Email"
            className="input-light w-full"
            value={delivery.email || ""}
            onChange={(e) => handleDeliveryChange("email", e.target.value)}
          />
          <input
            type="text"
            placeholder="WhatsApp Number"
            className="input-light w-full"
            value={delivery.whatsapp || ""}
            onChange={(e) => handleDeliveryChange("whatsapp", e.target.value)}
          />
          <input
            type="url"
            placeholder="Google Sheet Link"
            className="input-light w-full"
            value={delivery.sheetLink || ""}
            onChange={(e) => handleDeliveryChange("sheetLink", e.target.value)}
          />
          <input
            type="url"
            placeholder="API / Webhook URL"
            className="input-light w-full"
            value={delivery.webhook || ""}
            onChange={(e) => handleDeliveryChange("webhook", e.target.value)}
          />
        </div>
      </div>
    </motion.div>
  );
}
