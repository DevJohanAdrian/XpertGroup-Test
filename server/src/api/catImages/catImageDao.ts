// import axios from "axios";
import type { CatImage } from "@/api/catImages/catImageModel";
import apiAxionIntance from "@/config/axios";

export class CatImageDao {
  /**
   * Get all breed by id
   *
   * @param {number} id
   * @returns A single cat breed
   */
  async getCatImageByIdAsync(breedId: string): Promise<CatImage> {
    const response = await apiAxionIntance.get(`images/search?limit=8&breed_id=${breedId}`);
    return response.data;
  }
}
