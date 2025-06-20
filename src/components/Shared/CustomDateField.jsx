"use client";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalendarDays } from "lucide-react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function CustomDateField({ label, value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className="w-full relative">
        <DatePicker
          label={label}
          value={value ?? null}
          onChange={(newValue) => onChange(newValue)}
          slots={{
            openPickerIcon: () => (
              <CalendarDays className="text-gray-300 w-5 h-5" />
            ),
          }}
          slotProps={{
            textField: {
              variant: "filled",
              fullWidth: true,
              InputLabelProps: {
                style: {
                  color: "#d1d5db", // Tailwind's gray-300
                },
              },
              InputProps: {
                style: {
                  backgroundColor: "#1f1f1f",
                  color: "#f3f4f6",
                  borderRadius: "0.75rem",
                  fontSize: "0.875rem",
                },
              },
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#374151",
                  },
                  "&:hover fieldset": {
                    borderColor: "#60a5fa",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3b82f6",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "10px 14px",
                },
              },
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}
