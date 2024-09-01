import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import mongoose from 'mongoose';

import { commonValidations, objectIdSchema } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export type User = z.infer<typeof UserSchema>;

export const UserSchema = z.object({
  username: z.string(),
  // password: z.string().uuid(),
  _id:objectIdSchema
});

// Input Validation for 'GET users/:id' endpoint
export const GetUserSchema = z.object({
  params: z.object({ userId: z.string() }),
});

export const PostRegisterLoginUserSchema = z.object({
  body: z.object({ 
    username:  z.string(),
    password:  z.string()
   }),
});