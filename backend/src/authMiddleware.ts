import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "./config";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface JwtUserPayload extends JwtPayload {
  userId: number;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const token = req.cookies.token;

	if(!token) {
		return res.status(400).json({
			message: "Unautorized"
		})
	}
	

	try{
		const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;	

		req.user = decoded;
		next();
	}catch(error) {
		return res.status(401).json({
        message: "Invalid or expired token"
    });
	}

}

export default authMiddleware;