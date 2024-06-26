import { Router } from "express";
import { UserRouter } from "./userRouter";

const routes = Router();

routes.use("/user", UserRouter);

export { routes };
