// import axios from "axios";
import type { CatImage } from "@/api/catImages/catImageModel";
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
