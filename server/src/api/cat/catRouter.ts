import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { CatSchema, GetCatsQuerySchema, GetCatSchema } from "@/api/cat/catModel";
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
  path: "/api/v1/cats/breeds",
  tags: ["Cat"],
  responses: createApiResponse(z.null(), "Success"),
});

catRouter.get("/breeds", catController.getBreeds);

catRegistry.registerPath({
  method: "get",
  path: "/api/v1/cats/breeds/{breed_id}",
  tags: ["Cat"],
  request: { params: GetCatSchema.shape.params },
  responses: createApiResponse(z.null(), "Success"),
});

catRouter.get("/breeds/:breed_id", validateRequest(GetCatSchema), catController.getBreedById);

catRegistry.registerPath({
  method: "get",
  path: "/api/v1/cats/breedsQuery/search",
  tags: ["Cat"],
  request: {
    query: GetCatsQuerySchema.shape.query
  },
  responses: createApiResponse(z.null(), "Success"),
});

catRouter.get("/breedsQuery/search", validateRequest( GetCatsQuerySchema), catController.searchBreeds);
