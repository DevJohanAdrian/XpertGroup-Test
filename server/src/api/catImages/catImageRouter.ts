import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { CatImageSchema, GetCatImageSchema } from "@/api/catImages/catImageModel";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";
import { catController } from "./catImageController";

export const catImageRegistry = new OpenAPIRegistry();
export const catImageRouter: Router = express.Router();

catImageRegistry.register("CatImage", CatImageSchema);

catImageRegistry.registerPath({
  method: "get",
  path: "/api/v1/catsImage/images/{breed_id}",
  tags: ["CatImage"],
  request: { params: GetCatImageSchema.shape.params },
  responses: createApiResponse(z.null(CatImageSchema), "Success"),
});

catImageRouter.get("/images/:breed_id", validateRequest(GetCatImageSchema), catController.getCatImageById);
