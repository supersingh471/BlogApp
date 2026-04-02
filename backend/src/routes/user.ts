import { Router } from "express";
import 	jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import authMiddleware from "../authMiddleware";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
dotenv.config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
export const prisma = new PrismaClient({ adapter });
const router = Router();

router.post("/signup", async (req, res) => {
	try {
		const { email, firstName, lastName, password } = req.body;

		const existingUser = await prisma.user.findUnique({
			where: { email },
		})

		if(existingUser) {
			return res.status(400).json({
				message: "User already exists"
			});
		}

		if (!email || !password || !firstName || !lastName) {
  			return res.status(400).json({ 
				message: "All fields required" 
			});
		}

		const hashPassword = await bcrypt.hash(password, 10)
		
		const user = await prisma.user.create({
			data: {
				email,
				firstName,
				lastName,
				password: hashPassword
			},
		});

		const userId = user.id;

		const token = jwt.sign({userId}, JWT_SECRET, {expiresIn: "30m"});

		res.cookie("token", token, {
			httpOnly: true,
			secure: true,
			sameSite: "strict",
			maxAge: 30 * 60 * 1000,
		});

		res.status(201).json({
			message: "User Created Successfully",
			user: {
				userId,
				firstName: user.firstName,
				lastName: user.lastName
			},
		});

		console.log("Body:", req.body);
		} catch (error) {
			res.status(500).json({ message: "Server error"});
		}

	} )

//signin route
router.post("/signin", async (req, res) => {
	const { email, password } = req.body;
	
	const userExists = await prisma.user.findUnique({
		where: {
			email
		}
	})

	if (!userExists) {
		return res.status(400).json({
			message: "Invalid credentials"
		})
	}

	const isMatch = await bcrypt.compare(password, userExists.password);

	if(!isMatch) {
		return res.status(400).json({
			message: "Invalid credentials"
		})
	}

	const userId = userExists.id;

	const token = jwt.sign({userId}, JWT_SECRET, {expiresIn: "30m"});

	res.cookie("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: 30 * 60 * 1000
	})

	res.status(200).json({
		message: "Login successfull",
	});

	console.log(req.body);
});

//logout route

router.post("/logout", async (req, res) => {
	res.clearCookie("token");
	res.json({message: "Logout Successfully"});
	
});

//profile
router.get("/profile", authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.userId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });

  res.json(user);
});


export default router;