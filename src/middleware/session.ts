import { Request, Response, NextFunction, Router } from "express";
import { Resp } from "../resp/resp";

export const backendSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV !== "development") {
    if (!req.session.user) {
      res.clearCookie("user");
      res.json(Resp.backendCheckSessionFail);
      return;
    }
  } else {
    req.session.user = { account: "admin" };
  }
  next();
};
