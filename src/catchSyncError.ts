import { Request, Response, NextFunction } from "express";

 const catchSyncError = (propsFunc: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(propsFunc(req,res,next)).catch(next)
};

export {catchSyncError};