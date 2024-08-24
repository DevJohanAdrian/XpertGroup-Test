// import type { Request, RequestHandler, Response } from "express";

// import { userService } from "@/api/user/userService";
// import { handleServiceResponse } from "@/common/utils/httpHandlers";

// class UserController {
//   public getUsers: RequestHandler = async (_req: Request, res: Response) => {
//     const serviceResponse = await userService.findAll();
//     return handleServiceResponse(serviceResponse, res);
//   };

//   public getUser: RequestHandler = async (req: Request, res: Response) => {
//     const id = Number.parseInt(req.params.id as string, 10);
//     const serviceResponse = await userService.findById(id);
//     return handleServiceResponse(serviceResponse, res);
//   };
// }

// export const userController = new UserController();

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
    console.log("login entre");
    const username = req.body.username as string;
    const password = req.body.password as string;
    const serviceResponse = await userService.loginUser(username, password);
    return handleServiceResponse(serviceResponse, res);
  };

  getUserProfile = async (req: Request, res: Response) => {
    console.log("login entre");

    const user = await User.findById(req.user._id).select("-password");
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ success: false, message: "Usuario no encontrado" });
    }
  };
}

export const userController = new UserController();
