import { catRouter } from "@/api/cat/catRouter";
import { catImageRouter } from "@/api/catImages/catImageRouter";
import { userRouter } from "@/api/user/userRouter";
import express, { type Router } from "express";

const router: Router = express.Router();
router.use("/users", userRouter);
router.use("/cats", catRouter);
router.use("/catsImage", catImageRouter);

export default router;
