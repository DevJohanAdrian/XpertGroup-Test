import type { Cat } from "@/api/cat/catModel";
import apiAxionIntance from "@/config/axios";

// // Pasar a un archivo aparte
// const apiKey =
//   "live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP"; // Reemplaza con tu API key
// const apiAxionIntance = axios.create({
//   baseURL: "https://api.thecatapi.com/v1", // URL base de la API
//   headers: {
//     "x-api-key": apiKey, // Reemplaza 'x-api-key' con el nombre del encabezado correcto
//   },
// });

export class CatDao {
  /**
   * Get all breeds
   *
   * @param {*} req
   * @param {*} res
   * @returns A array of breeds
   */
  async getAllBreedsAsync(): Promise<Cat[]> {
    const response = await apiAxionIntance.get("/breeds");
    return response.data;
  }

  /**
   * Get all breed by id
   *
   * @param {number} id
   * @returns A single cat breed
   */
  async getBreedByIdAsync(breedId: string): Promise<Cat> {
    const response = await apiAxionIntance.get(`breeds/${breedId}`);
    return response.data;
  }

  /**
   * Get breed by search
   *
   * @param {query} query
   * @returns A single breed by filters
   */
  async searchBreedsAsync(query: string): Promise<Cat[]> {
    const response = await apiAxionIntance.get(`/breeds/search?q=${query}`);
    return response.data;
  }
}
