import { Router } from "express";
import 	jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.post("/signup", async (req, res) => {

	const existingUser = await prisma.user.findUnique({
		where: {email: req.body.email}
	})

	if(existingUser) {
		return res.status(400).json({
			message: "User already exists"
		});
	}

	const user = await prisma.user.create({
		data: {
			email: req.body.email,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			password: req.body.password
		},
	});

	const userId = user.id;

	const token = jwt.sign({userId}, JWT_SECRET, {expiresIn: "1h"});

	res.status(201).json({
		message: "user created",
		token
	});
	console.log("Body:", req.body);

} )

//signin route
router.post("/signin", async (req, res) => {
	const userExists = await prisma.user.findUnique({
		where: {
			email: req.body.email,
			password: req.body.password
		}
	})

	if(!userExists) {
		return res.status(400).json({
			message: "User doesn't exist"
		})
	}

	const userId = userExists.id;

	const token = jwt.sign({userId}, JWT_SECRET);

	res.status(200).json({
		message: "User login successfull",
		token
	});

	console.log(req.body);
});

export default router;