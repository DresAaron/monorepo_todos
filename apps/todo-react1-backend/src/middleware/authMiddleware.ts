import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../models/user";
import { AuthedRequest } from "src/typings/express";

const authMiddleware = async (
  req: AuthedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret") as { userId: string };
    req.user = await UserModel.findById(decoded.userId).select(
      "-password_hash"
    );
    next();
  } catch (error) {
    res.status(403).json({ error: "Token is invalid or expired" });
  }
};

export default authMiddleware;
