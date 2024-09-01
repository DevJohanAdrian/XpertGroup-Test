import type { User as userZod } from "@/api/user/userModel";
import { UserDao } from "./userDao";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { StatusCodes } from "http-status-codes";
import  User from "./models/userMongoModel";

export class UserService {
  private userDao: UserDao;

  constructor(repository: UserDao = new UserDao()) {
    this.userDao = repository;
  }

  /**
   * Register a user
   * @param username
   * @param password
   * @returns
   */
  async registerUser(username: string, password: string): Promise<ServiceResponse<userZod | null>> {
    try {
      // Verify if user exists
      const userExists = await User.findOne({ username })
      if (userExists) {
        return ServiceResponse.failure("The user exist", null, StatusCodes.FORBIDDEN);
      }
      // create the user
      const user = await this.userDao.createUser(username, password )
      if (!user) {
        return ServiceResponse.failure("Error creating the user", null, StatusCodes.NOT_FOUND);
      }
      
      return ServiceResponse.success<userZod>("User save", {_id: user._id, username:user.username});
    } catch (ex) {
      const errorMessage = `Error saving the user:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while saving the user.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Login a user
   * @param username
   * @param password
   * @returns
   */
  async loginUser(username: string, password: string): Promise<ServiceResponse<userZod | null>> { 
    try {
      // Verify if user exists
      const user = await User.findOne({ username }).select('_id username');

      if (!user) {
        return ServiceResponse.failure("An error occurred finding the user.", null, StatusCodes.NOT_FOUND);
      }

      // Falta validacion de contraseña

      return ServiceResponse.success<userZod>("User authenticated", user);
    } catch (ex) {
      const errorMessage = `Error authenticating the user:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while authenticating the user.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getUserProfile( userId:string): Promise<ServiceResponse<userZod | null>> {
    try {
      // Verify if user exists
      const user = await User.findById(userId).select("_id username");

      if (!user) {
        return ServiceResponse.failure("An error occurred finding the user.", null, StatusCodes.NOT_FOUND);
      }

      return ServiceResponse.success<userZod>("This user is allow to view protected pages", user);
    } catch (ex) {
      const errorMessage = `Error authenticating the user:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while authenticating the user.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

export const userService = new UserService();
