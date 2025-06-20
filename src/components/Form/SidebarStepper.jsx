"use client";

// const steps = [
//   "Basic Campaign Info",
//   "Target Audience",
//   "Platform & Budget",
//   "Creative Assets",
//   "Landing Page or Destination URL",
//   "Lead Collection Setup",
//   "Additional Instructions / Notes",
//   "Summary",
// ];

const steps = [
  "Campaign Objective Selection",
  "Services You Need",
  "Lead Generation Preferences",
  "Key Notes & Competitors",
  "Your Contact & Documents",
];

export default function SidebarStepper({ step }) {
  return (
    <aside className="w-full md:w-80 px-6 py-4 md:py-10 bg-[#0f172a] relative text-white border-r border-white/10">
      {/* 🌀 Animated Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl animate-pulse" />
      </div>

      {/* 🧭 Header */}
      <div className="relative z-10 mb-10">
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          alt="Logo"
          className="w-6 h-6 mb-4"
        />
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Find Customer
        </h2>
        <p className="text-sm text-slate-400 mt-1 leading-5">
          Please select the customer and confirm their details.
        </p>
      </div>

      {/* 🧩 Stepper List */}
      <ul className="relative pl-6 space-y-7 z-10 hidden md:block">
        <div className="absolute left-7.5 top-4 h-full w-px bg-slate-100/40" />
        {steps.map((label, index) => {
          const isActive = index === step;
          return (
            <li key={index} className="relative flex items-start gap-3">
              <span
                className={`w-3.5 h-3.5 mt-1 rounded-full border-2 transition-all duration-200 ${
                  isActive
                    ? "bg-white border-white shadow-lg"
                    : "border-slate-500 bg-[#1e293b]"
                }`}
              />
              <span
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-slate-400"
                }`}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
