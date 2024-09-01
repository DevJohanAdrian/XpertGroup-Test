import { z } from "zod";
import mongoose from 'mongoose';

export const commonValidations = {
  id: z.string(),
  // .refine((data) => !Number.isNaN(Number(data)), "ID must be a numeric value")
  // .transform(Number)
  // .refine((num) => num > 0, "ID must be a positive number"),
  // ... other common validations
};


export const objectIdSchema = z.custom((val) => {
  return mongoose.Types.ObjectId.isValid(val);
}, {
  message: "Invalid ObjectId"
});