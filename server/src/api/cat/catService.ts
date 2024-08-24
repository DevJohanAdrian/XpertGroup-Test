import { StatusCodes } from "http-status-codes";

import { CatDao } from "@/api/cat/catDao";
import type { User } from "@/api/user/userModel";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";

export class CatService {
  private catDao: CatDao;

  constructor(repository: CatDao = new CatDao()) {
    this.catDao = repository;
  }

  /**
   * Get all breeds
   *
   * @param {*} req
   * @param {*} res
   * @returns A message
   */
  async getAllBreeds(): Promise<ServiceResponse<User[] | null>> {
    try {
      const breeds = await this.catDao.getAllBreedsAsync();
      if (!breeds || breeds.length === 0) {
        return ServiceResponse.failure("No cats breeds found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<any[]>("Breeds found", breeds);
    } catch (ex) {
      const errorMessage = `Error finding all cat breeds: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while retrieving cats.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Get all breed by id
   *
   * @param {number} id
   * @returns A single cat breed
   */
  async getBreedById(id: string): Promise<ServiceResponse<User | null>> {
    try {
      const breed = await this.catDao.getBreedByIdAsync(id);
      if (!breed) {
        return ServiceResponse.failure("Cat breed not found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<any>("Breeds found", breed);
    } catch (ex) {
      const errorMessage = `Error finding the cat breed with id ${id}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while finding the cat breed.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Get breed by search
   *
   * @param {query} query
   * @returns A single breed by filters
   */
  async searchBreeds(query: string): Promise<ServiceResponse<User | null>> {
    try {
      const breedResult = await this.catDao.searchBreedsAsync(query);
      if (!breedResult) {
        return ServiceResponse.failure("Cat breed not found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<any>("Breeds found", breedResult);
    } catch (ex) {
      const errorMessage = `Error searching the cat breed:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while searching the cat breed.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

export const catService = new CatService();
