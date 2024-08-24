import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { GetUserSchema, LoginSchema, RegisterSchema } from "@/api/user/userModel";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";
import { userController } from "./userController";

export const userRegistry = new OpenAPIRegistry();
export const userRouter: Router = express.Router();

userRegistry.register("User", LoginSchema);

// userRegistry.registerPath({
//   method: "get",
//   path: "/users",
//   tags: ["User"],
//   responses: createApiResponse(z.array(UserSchema), "Success"),
// });

// userRouter.get("/", userController.getUsers);

// userRegistry.registerPath({
//   method: "get",
//   path: "/users/{id}",
//   tags: ["User"],
//   request: { params: GetUserSchema.shape.params },
//   responses: createApiResponse(UserSchema, "Success"),
// });

// userRouter.get("/:id", validateRequest(GetUserSchema), userController.getUser);

userRegistry.registerPath({
  method: "get",
  path: "/register",
  tags: ["User"],
  responses: createApiResponse(RegisterSchema, "Success"),
});
userRouter.post("/register", userController.registerUser);

userRegistry.registerPath({
  method: "get",
  path: "/login",
  tags: ["User"],
  responses: createApiResponse(LoginSchema, "Success"),
});
userRouter.post("/login", userController.loginUser);

userRegistry.registerPath({
  method: "get",
  path: "/protected",
  tags: ["User"],
  responses: createApiResponse(LoginSchema, "Success"),
});
userRouter.get("/protected", userController.getUserProfile);
