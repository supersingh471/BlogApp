import { useState } from "react";
import { GiPenguin } from "react-icons/gi";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"

export default function Signup() {
	const [email,setEmail] = useState("");
	const [firstName,setFirtName] = useState("");
	const [lastName,setLastName] = useState("");
	const [password,setPassword] = useState("");

	const navigate = useNavigate();

	const signup = async () => {
						try {
							const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
								email,
								firstName,
								lastName,
								password
							});
							localStorage.setItem("token", response.data.token);
							navigate("/Dashboard");
						}catch(error: any) {
							console.error("Signup failed:", error.response?.date || error.message);
							alert("Signup failed, Please try again");
						}
					};
	return (
		<div className="flex justify-between min-h-screen w-full bg-[linear-gradient(to_bottom,#FFFFFF,#F4F3FB)] backdrop-blur-md">
			
			<div className="h-130 w-110 mt-10 ml-20 p-4">
				<h1 className="flex text-2xl font-semibold gap-2 mr-5 cursor-pointer"><GiPenguin size={30}/>DevBlog</h1>
				<p className="font-semibold text-4xl text-gray-700 mt-20">Start Sharing</p>
				<p className="font-semibold text-4xl text-gray-700">what you learn.</p>
				<p className="text-lg mt-4 text-gray-700">Write. Reflect. Grow as a developer </p>
				<p className="text-lg text-gray-700">Join developers documenting their journey in tech</p>
			</div>

			<div className="flex flex-col mt-20 items-center h-135 w-100 mr-15 rounded-xl bg-white backdrop-blur-xl border border-gray-300 shadow-[0_20px_40px_rgba(147,112,219,0.15)]
 ">
				<div className="flex font-semibold text-3xl pt-8 text-gray-700">Create your account</div>
				<p className="text-lg text-gray-700">It takes less than a minute</p>
				
					<input onChange={(e) => {
						setEmail(e.target.value);
					}} className="bg-[#f0f3fbe0] hover:bg-[#ced2db] text-gray-700 p-2 w-80 py-1.5 mt-6 rounded-md focus:outline-none" type="text" placeholder="Email" />
					<input onChange={(e) => {
						setFirtName(e.target.value);
					}} className="bg-[#f0f3fbe0] hover:bg-[#ced2db] text-gray-700 p-2 w-80 py-1.5 mt-6 rounded-md focus:outline-none" type="text" placeholder="First Name" />
					<input onChange={(e) => {
						setLastName(e.target.value);
					}} className="bg-[#f0f3fbe0] hover:bg-[#ced2db] text-gray-700 p-2 w-80 py-1.5 mt-6 rounded-md focus:outline-none" type="text" placeholder="Last Name" />
					<input onChange={(e) => {
						setPassword(e.target.value);
					}} className="bg-[#f0f3fbe0] hover:bg-[#ced2db] text-gray-700 p-2 w-80 py-1.5 mt-6 rounded-md focus:outline-none" type="text" placeholder="Password" />

					<button onClick={signup} className="flex items-center justify-center h-10 w-80 mt-8 mx-5 text-lg bg-[#19191C] hover:bg-[#030407] rounded-md text-white text-md font-semibold cursor-pointer">
					Create Account
				</button>
				<div className="flex items-center gap-2 w-full px-12 py-2">
				<div className="flex-1 h-px bg-gray-400"></div>
				<span className="text-sm text-gray-600">or</span>
				<div className="flex-1 h-px bg-gray-400"></div>
				</div>
				<button className="flex items-center justify-center bg-[#f0f3fbe0] hover:bg-[#000000] hover:text-white h-10 w-80 p-2 gap-2 rounded-md cursor-pointer text-gray-700">
				<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>	
					Sign up with Google
				</button>
				<div className="mt-4 text-gray-700">Already have an account?
					<Link to={"/login"} className="text-gray-700"> Sign in</Link>
				</div>
			</div>
			
		</div>
	)
	
}