import cors from "cors";
import "dotenv/config";
import "express-async-errors";
import express, { NextFunction } from "express";
import { AppError } from "./errors";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors());
app.use(router);

app.use((err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal Server Error - ${err.message}` 
    });
});

export { app }