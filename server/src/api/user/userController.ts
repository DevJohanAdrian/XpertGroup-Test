

import { userService } from "@/api/user/userService";
import { handleServiceResponse } from "@/common/utils/httpHandlers";
import type { Request, Response } from "express";

class UserController {
  registerUser = async (req: Request, res: Response) => {
    const username = req.body.username as string;
    const password = req.body.password as string;
    const serviceResponse = await userService.registerUser(username, password);
    return handleServiceResponse(serviceResponse, res);
  };

  loginUser = async (req: Request, res: Response) => {
    const username = req.body.username as string;
    const password = req.body.password as string;
    const serviceResponse = await userService.loginUser(username, password);
    return handleServiceResponse(serviceResponse, res);
  };

  getUserProfile = async (req: Request, res: Response) => {
    const userId= req.params.userId;
    const serviceResponse = await userService.getUserProfile(userId);
    return handleServiceResponse(serviceResponse, res);
  };
}

export const userController = new UserController();
