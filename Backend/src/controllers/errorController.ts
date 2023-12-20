import { NextFunction, Request, Response } from "express";

const sendErrorDev = (err: any, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: any, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    if (err.name === "SequelizeUniqueConstraintError") {
      const fieldWithPath = err.errors[0]?.path || "unknown";
      const field = fieldWithPath.replace(/_UNIQUE$/, "");

      // Handle unique constraint violation error
      res.status(400).json({
        status: "fail",
        message: `Duplicate entry. The field '${field}' must be unique.`,
      });
    } else {
      res.status(500).json({
        status: "error",
        message: "Something went rong",
      });
    }
  }
};

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error: any = Object.assign(err);

    sendErrorProd(error, res);
  }
};

export default globalErrorHandler;
