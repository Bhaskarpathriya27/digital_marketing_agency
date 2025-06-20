// validation/step1Schema.ts
import * as z from "zod";

export const Step1Schema = z.object({
  objective: z.string().min(1, "Please select an objective"),
});
