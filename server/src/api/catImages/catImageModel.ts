import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { commonValidations } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export type CatImage = z.infer<typeof CatImageSchema>;
export const CatImageSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// // Input Validation for 'GET users/:id' endpoint
export const GetCatImageSchema = z.object({
  params: z.object({ breed_id: commonValidations.id }),
});
