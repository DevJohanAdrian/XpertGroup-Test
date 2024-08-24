import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { CatImageSchema, GetCatImageSchema } from "@/api/catImages/catImageModel";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";
import { catController } from "./catImageController";

export const catRegistry = new OpenAPIRegistry();
export const catImageRouter: Router = express.Router();

catRegistry.register("CatImage", CatImageSchema);

catRegistry.registerPath({
  method: "get",
  path: "/catsImage/images/{breed_id}",
  tags: ["CatImage"],
  // request: { params: GetCatSchema.shape.params },
  responses: createApiResponse(z.null(), "Success"),
});

catImageRouter.get("/images/:breed_id", validateRequest(GetCatImageSchema), catController.getCatImageById);
