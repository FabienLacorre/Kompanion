import { Router } from "express";

import { sendError } from "./sendError";
import { getAllUser } from "../controller/user/getAllUser";
import { getUserById } from "../controller/user/getUserById";
import { ApiError } from "../../utils/ApiError";
import { createBasicUser } from "../controller/user/createBasicUser";
import { login } from "../controller/user/login";

const UserRouter = Router();

UserRouter.get("/all", async (req, res) => {
  const users = await getAllUser();
  res.send(users);
});

UserRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await getUserById(Number(id));
    res.send(user);
  } catch (error) {
    sendError(res, error as ApiError);
  }
});

UserRouter.post("/create", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await createBasicUser({ email, password });
    res.send(user);
  } catch (error) {
    sendError(res, error as ApiError);
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await login({ email, password });
    res.send(user);
  } catch (error) {
    sendError(res, error as ApiError);
  }
});

export { UserRouter };
