"use client";

import { forwardRef, useImperativeHandle } from "react";
import toast from "react-hot-toast";

const SERVICES = [
  "Online Lead Generation",
  "Search Engine Optimisation (SEO)",
  "WordPress Website",
  "E-Commerce Website (WordPress–WooCommerce / Shopify)",
];

const Step2 = forwardRef(({ formData, updateField }, ref) => {
  const toggleService = (service) => {
    const selected = formData.services || [];
    const updated = selected.includes(service)
      ? selected.filter((s) => s !== service)
      : [...selected, service];
    updateField("services", updated);
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!formData.services || formData.services.length === 0) {
        toast.error("Please select at least one service.");
        return { valid: false };
      }
      return { valid: true };
    },
  }));

  return (
    <div className="space-y-6 text-white max-w-xl mx-auto">
      <div>
        <label className="block text-xl font-semibold mb-1">
          Service Requirements
        </label>
        <p className="text-sm text-gray-400">
          Please select the services you are looking for{" "}
          <span className="text-red-500">*</span>
        </p>
      </div>

      <div className="space-y-4">
        {SERVICES.map((service) => {
          const active = formData.services?.includes(service);
          return (
            <label
              key={service}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={active}
                onChange={() => toggleService(service)}
                className="accent-orange-500 w-4 h-4"
              />
              <span className="text-sm text-gray-200">{service}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
});

export default Step2;
