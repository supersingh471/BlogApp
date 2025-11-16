import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "./config";
import jwt, { JwtPayload } from "jsonwebtoken";

interface JwtUserPayload extends JwtPayload {
  userId: number;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	if(!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(400).json({
			message: "Error while logging"
		})
	}
	const token = authHeader.split(" ")[1];

	try{
		const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
		req.userId = decoded.userId;
		next();
	}catch(error) {
		return res.status(403).json({
        message: "Invalid or expired token"
    });
	}

}

export default authMiddleware;