import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { GetUserSchema, UserSchema, PostRegisterUserSchema } from "@/api/user/userModel";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";
import { userController } from "./userController";

export const userRegistry = new OpenAPIRegistry();
export const userRouter: Router = express.Router();

userRegistry.register("User", UserSchema);

userRegistry.registerPath({
  method: "post",
  path: "/api/v1/users/register",
  tags: ["User"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: PostRegisterUserSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(UserSchema, "Success"),
});
userRouter.post("/register", validateRequest(PostRegisterUserSchema), userController.registerUser);

userRegistry.registerPath({
  method: "post",
  path: "/api/v1/users/login",
  tags: ["User"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: PostRegisterUserSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(UserSchema, "Success"),
});
userRouter.post("/login", validateRequest(UserSchema), userController.loginUser);

userRegistry.registerPath({
  method: "get",
  path: "/api/v1/users/protected",
  tags: ["User"],
  responses: createApiResponse(UserSchema, "Success"),
});
userRouter.get("/protected", userController.getUserProfile);
