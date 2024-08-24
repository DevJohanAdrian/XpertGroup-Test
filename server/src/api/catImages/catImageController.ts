import { catImageService } from "@/api/catImages/catImageService";
import { handleServiceResponse } from "@/common/utils/httpHandlers";
import type { Request, RequestHandler, Response } from "express";

class CatImageController {
  /**
   * Get cat image by id
   *
   * @param {*} req
   * @param {*} res
   * @returns A cat image
   */
  public getCatImageById: RequestHandler = async (req: Request, res: Response) => {
    console.log("holaimage", req.params.breed_id);
    const id = req.params.breed_id as string;
    const serviceResponse = await catImageService.getCatImageById(id);
    return handleServiceResponse(serviceResponse, res);
  };
}

export const catController = new CatImageController();
