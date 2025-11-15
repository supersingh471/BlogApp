import { Router } from "express";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import authMiddleware from "../authMiddleware";

const prisma = new PrismaClient();
const router = Router();

router.post("/posts", authMiddleware, async (req: Request, res: Response) => {
	const {title, content} = req.body

	const blog = await prisma.posts.create({
		data: {
				title,
				content,
				authorId: req.userId!
		},
	}) 

	return res.status(200).json({
		message: "Blog posted",
		blog
	})
})

export default router;