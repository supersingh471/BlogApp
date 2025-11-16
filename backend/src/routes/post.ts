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
});

router.get("/posts", authMiddleware, async (req, res) => {
	const Id = Number(req.query.id);

	try{
		if(Id) {
			const postItem = await prisma.posts.findFirst({where: {id: Id, authorId: req.userId}});
			if(!postItem) {
				return res.status(400).json({
					message: "Post not found"
				});
			}

			return res.status(200).json({
				post: postItem
			})
		}
	}catch(e) {
		return res.status(400).json({
			message: "Invalid id"
		})
	}
});

router.put("/posts", authMiddleware, async (req, res) => {
	const { title, content } = req.body;
	const Id = Number(req.query.id);

	try{
		const updatePost = await prisma.posts.updateMany({
			where: {
				id: Id,
				authorId: req.userId
			},
			data: {
				title,
				content
			}
		})

		if(!updatePost) {
				return res.status(400).json({
					message: "Blog not found or unauthorized"
				})
			}
		
		return res.status(200).json({
			message: "Blog updated",
			updatePost
		})
	}catch(e) {
		res.status(500).json({
			message: "Internal server error while updating"
		})
	}
});

router.delete("/posts/:id", authMiddleware, async (req, res) => {
	const Id = Number(req.params.id);

	if(!Id) {
		return res.status(400).json({
			message: "Invalid post ID"
		})
	}

	try{
		if(Id) {
			const deletedPost = await prisma.posts.deleteMany({
				where: {
					id: Id,
					authorId: req.userId
				},
			})

			if(deletedPost.count === 0) {
				return res.status(404).json({
					message: "No post found or unauthorized"
				})
			}

			return res.status(200).json({
			message: "Post deleted successfully",
			deletedPost
		})
		}

	}catch(e) {
			console.error(e)
			return res.status(500).json({
				message: "Internal server error while deleting"
			})
	}
});

export default router;