import { newError} from "./ErrorHandler";
import { Request, Response, NextFunction } from "express";

 const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${(err as any).path}`;
        err =  newError(message, 400);
    }

    if (err.code === 11000) {
        const message = `Duplicate ${(err as any).keyValue} Entered`;
        err =  newError(message, 400);
    }

    if (err.name === "MongoError") {
        const message = `Something went wrong! Please try again later`;
        err =  newError(message, 400);
    }

    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid, Try again`;
        err =  newError(message, 400);
    }

    if (err.name === "TokenExpiredError") {
        const message = `Json Web Token is Expired, Try again`;
        err =  newError(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export { errorMiddleware };

