import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { CatSchema, GetCatSchema } from "@/api/cat/catModel";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";
import { catController } from "./catController";

export const catRegistry = new OpenAPIRegistry();
export const catRouter: Router = express.Router();

catRegistry.register("Cat", CatSchema);

catRegistry.registerPath({
  method: "get",
  path: "/cats/breeds",
  tags: ["Cat"],
  responses: createApiResponse(z.null(), "Success"),
});

catRouter.get("/breeds", catController.getBreeds);

catRegistry.registerPath({
  method: "get",
  path: "/cats/breeds/{breed_id}",
  tags: ["Cat"],
  // request: { params: GetCatSchema.shape.params },
  responses: createApiResponse(z.null(), "Success"),
});

catRouter.get("/breeds/:breed_id", catController.getBreedById);

catRegistry.registerPath({
  method: "get",
  path: "/cats/breeds/search",
  tags: ["Cat"],
  responses: createApiResponse(z.null(), "Success"),
});

catRouter.get("/breedsQuery/search", catController.searchBreeds);
