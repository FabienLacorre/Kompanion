import { ApiError } from "../../utils/ApiError";

export const sendError = (res: any, error: ApiError) => {
  res.status(error.status).send({
    message: error.message,
  });
};
