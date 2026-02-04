import { useState } from "react";
import { Heading } from "../components/Header";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const signin = async () => {
					try {
						const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
							email,
							password
						});
						localStorage.setItem("token", response.data.token);
						navigate("/Dashboard");
					}catch(error: any) {
						console.error("Login failed:", error.response?.data || error.message);
						alert("Login failed, please try again");
					}
				};

	return (
		<div className="flex justify-between min-h-screen w-full bg-radial-[at_25%_25%] from-[#306BD0] to-[#1C134E] to-75% backdrop-blur-md">
			<div className="h-130 w-110 mt-10 ml-20 p-4">
				<span className="text-3xl font-semibold text-white/70"><Heading title="DevBlog"/></span>
				<p className="font-semibold text-4xl text-white/70 mt-20">Welcome Back!</p>
				<p className="text-lg text-white/70">Log in to continue your journey</p>
			</div>
			
			<div className="flex flex-col mt-30 mr-40 items-center h-105 w-90 rounded-xl bg-[radial-gradient(#060C4B)] backdrop-blur-xl border border-white/40 shadow-[0_20px_40px_rgba(147,112,219,0.15)]">
				<span className="mt-6 text-center text-2xl font-semibold text-white/80">Login in to your account</span>	
				<p className="p-2 text-lg text-white/80">Please ensure your details.</p>

				<input onChange={(e) => {
					setEmail(e.target.value);
				}} className="bg-[#d0daed] text-gray-700 p-2 w-70 py-1.5 mt-6 rounded-md focus:outline-none" type="text" placeholder="Email" />
				<input onChange={(e) => {
					setPassword(e.target.value);
				}} className="bg-[#d0daed] text-gray-700 p-2 w-70 py-1.5 mt-6 rounded-md focus:outline-none" type="password" placeholder="Password" />

				<button onClick={signin} className="flex items-center h-10 w-70 mt-8 mx-5 bg-[linear-gradient(to_right,#306BD0,#306BD0)] rounded-md text-white text-md font-semibold cursor-pointer">
					<span className="flex-1 text-center text-lg">Log In</span>
				<svg className="pr-4 w-9 h-9 fill-[#f3f0f0]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
				<path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path></svg>
				</button>

				<div className="flex items-center gap-2 w-full px-12 py-2">
				<div className="flex-1 h-px bg-gray-400"></div>
				<span className="text-sm text-gray-600">or</span>
				<div className="flex-1 h-px bg-gray-400"></div>
				</div>
				<button className="flex items-center justify-center bg-[#d0daed] h-10 w-70 p-2 gap-2 rounded-md cursor-pointer text-gray-700">
				<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>	
					Log In with <span className="text-gray-900">Google</span>
				</button>

				<div className="mt-4 text-white/70 text-sm">Don't have an account?
					<Link to={"/signup"} className="text-white/70"> Sign up</Link>
				</div>
			</div>
			
		</div>
	)
}