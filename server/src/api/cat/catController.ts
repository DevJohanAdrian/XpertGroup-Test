import type { Request, RequestHandler, Response } from "express";

import { catService } from "@/api/cat/catService";
import { handleServiceResponse } from "@/common/utils/httpHandlers";

class CatController {
  /**
   * Get all breeds
   *
   * @param {*} req
   * @param {*} res
   * @returns A list of cat breeds
   */
  public getBreeds: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await catService.getAllBreeds();
    return handleServiceResponse(serviceResponse, res);
  };

  /**
   * Get all breed by id
   *
   * @param {*} req
   * @param {*} res
   * @returns A single cat breed
   */
  public getBreedById: RequestHandler = async (req: Request, res: Response) => {
    const id = req.params.breed_id as string;
    const serviceResponse = await catService.getBreedById(id);
    return handleServiceResponse(serviceResponse, res);
  };

  /**
   * Get breed by search
   *
   * @param {*} req
   * @param {*} res
   * @returns A single breed by filters
   */
  public searchBreeds: RequestHandler = async (req: Request, res: Response) => {
    const query = req.query.q as string;
    const serviceResponse = await catService.searchBreeds(query);
    return handleServiceResponse(serviceResponse, res);
  };
}

export const catController = new CatController();
