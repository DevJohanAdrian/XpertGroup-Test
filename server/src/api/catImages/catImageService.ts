import { StatusCodes } from "http-status-codes";

import { CatImageDao } from "@/api/catImages/catImageDao";
import type { User } from "@/api/user/userModel";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";

export class CatImageService {
  private catImageDao: CatImageDao;

  constructor(repository: CatImageDao = new CatImageDao()) {
    this.catImageDao = repository;
  }

  /**
   * Get all breed by id
   *
   * @param {number} id
   * @returns A single cat breed
   */
  async getCatImageById(id: string): Promise<ServiceResponse<User | null>> {
    try {
      const image = await this.catImageDao.getCatImageByIdAsync(id);
      if (!image) {
        return ServiceResponse.failure("Cat image not found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<any>("Cat image found", image);
    } catch (ex) {
      const errorMessage = `Error finding the cat image with id ${id}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while finding the cat image.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

export const catImageService = new CatImageService();
