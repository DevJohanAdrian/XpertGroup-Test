import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import { commonValidations } from "@/common/utils/commonValidation";


extendZodWithOpenApi(z);

export type CatImage = z.infer<typeof CatImageSchema>;


const Weight = z.object({
  imperial: z.string(),
  metric: z.string()
})
const Breeds = z.object({
  weight: Weight , 
  id: z.string(),
  name: z.string(),
  cfa_url: z.string(),
  vetstreet_url: z.string(),
  vcahospitals_url: z.string(),
  temperament: z.string(),
  origin: z.string(),
  country_codes: z.string(),
  country_code: z.string(),
  description: z.string(),
  life_span: z.string(),
  indoor: z.number(),
  lap: z.number(),
  alt_names: z.string(),
  adaptability: z.number(),
  affection_level: z.number(),
  child_friendly: z.number(),
  dog_friendly: z.number(),
  energy_level: z.number(),
  grooming: z.number(),
  health_issues: z.number(),
  intelligence: z.number(),
  shedding_level: z.number(),
  social_needs: z.number(),
  stranger_friendly: z.number(),
  vocalisation: z.number(),
  experimental: z.number(),
  hairless: z.number(),
  natural: z.number(),
  rare: z.number(),
  rex: z.number(),
  suppressed_tail: z.number(),
  short_legs: z.number(),
  wikipedia_url: z.string(),
  hypoallergenic: z.number(),
  reference_image_id: z.string()
})

export const CatImageSchema = z.object({
  breeds: z.array(Breeds),
  id: z.string(),
  url: z.string(),
  width: z.number(),
  height: z.number(),
});

// // Input Validation for 'GET users/:id' endpoint
export const GetCatImageSchema = z.object({
  params: z.object({ breed_id: commonValidations.id }),
});
