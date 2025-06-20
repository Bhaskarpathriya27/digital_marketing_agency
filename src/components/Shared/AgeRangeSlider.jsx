"use client";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: "#7e22ce", // Tailwind purple-700
  height: 6,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid #7e22ce",
    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
    "&:hover": {
      boxShadow: "0 0 0 5px rgba(126, 34, 206, 0.1)",
    },
    "&.Mui-active": {
      boxShadow: "0 0 0 6px rgba(126, 34, 206, 0.2)",
    },
  },
  "& .MuiSlider-track": {
    height: 6,
    border: "none",
    backgroundColor: "#9333ea", // darker purple
  },
  "& .MuiSlider-rail": {
    opacity: 0.3,
    height: 6,
    backgroundColor: "#d4d4d8",
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "transparent",
    color: "#333",
    fontSize: 12,
    fontWeight: 500,
    top: -6,
    "&::before": {
      display: "none",
    },
  },
}));

export default function AgeRangeSlider({ value, onChange }) {
  return (
    <div className="w-full">
      <IOSSlider
        value={value}
        onChange={(e, newValue) => onChange(newValue)}
        valueLabelDisplay="auto"
        min={18}
        max={65}
        disableSwap
        mindistance={2} // ✅ Correct location
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{value[0]}</span>
        <span>{value[1]}+</span>
      </div>
    </div>
  );
}
