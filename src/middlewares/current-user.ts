import type { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}


export const currentUser = (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {

  //@ts-ignore
  if (!req.session?.jwt) {
    return next();
  }

  try{
    //@ts-ignore
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
    //@ts-ignore
    req.currentUser = payload;
  } catch (err) {}

  next();
}