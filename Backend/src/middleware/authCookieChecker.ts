import AppError from "../utils/AppError";

import { NextFunction, Request, Response } from "express";


const authCookieChecker = () => {
  return async (req: Request, res: Response, next: NextFunction) => {

    console.log(req.cookies)
    const auth = req.cookies.auth;

    if (auth !== "nfh6fgaWdj") {
      return next(new AppError("Unauthorized", 400));
    }
    next();
  };
};

export default authCookieChecker;

