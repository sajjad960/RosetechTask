import express, { NextFunction, Request, Response } from "express";
import cookieParser from 'cookie-parser';

const app = express();

//Security packages
import cors from "cors";

//For Routers Import
import studentsRouter from "./routes/studentsRouter";

//For Error Import
import AppError from "./utils/AppError";
import globalErrorHandler from "./controllers/errorController";

// cors security
app.use(
  cors({
    origin: "*",
  })
);
// Parse Body And Cookie
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());


//Test Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("hello from middleware");
  next();
});

//Routes
const prefix = "/api/v1";

app.use(`${prefix}/students`, studentsRouter);

//If app not found any api route
app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

//handling global error
app.use(globalErrorHandler);

export default app;
