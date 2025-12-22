import { Heading } from "../components/Header";

export default function Signup() {

	return (
		<div className="min-h-screen w-full bg-[linear-gradient(to_bottom,#F8B4F0,#C7F9F8)] backdrop-blur-md">
			<div className="p-7 text-3xl font-semibold"><Heading title="DevBlog"/></div>
			<div className="flex flex-col items-center h-130 w-90 mr-30 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.65),rgba(245,240,255,0.55))] backdrop-blur border border-white/35 shadow-[0_20px_40px_rgba(147,112,219,0.15)]
 ml-auto">
				<div className="flex text-3xl pt-8"><Heading title="Create your account"/></div>
				<p className="">It takes less than a minute</p>
			</div>
		</div>
	)
	
}