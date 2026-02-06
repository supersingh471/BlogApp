import { Heading } from "../components/Header"
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import { BsBell } from "react-icons/bs";




export default function Dashbaord1() {


	return (
		<div className="min-h-screen w-full bg-[linear-gradient(to_bottom,#F8F9FB,#F4F3FB)]">
			<header className="flex items-center h-18 bg-white border-b border-gray-300"><Heading title="DevBlog"/>
			<nav className="flex text-base gap-5">
				<Link to={"/"} className="text-blue-600 font-semibold">Home</Link>
				<Link to={"/"} className="font-semibold">Products</Link>
				<Link to={"/"} className="font-semibold">Resourses</Link>
			<div className="flex items-center gap-5 absolute right-8 top-4">	
				<button className="flex items-center gap-2 rounded-full w-50 h-10 p-4 text-gray-500 text-base border border-gray-300"><FiSearch size={14}/>Search</button>
				<span className="border p-2 rounded-full bg-gray-800">
					<svg className="w-4.5 h-4.5 fill-gray-300" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  					<path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
					</svg>
				</span>
				<BsMoon size={20} className="text-gray-600"/>
				<BsBell size={20} className="text-gray-700"/>
				<span className="flex items-center justify-center border w-9 h-9 font-bold bg-gray-300 rounded-full fill-[#B4BCFE]">
					VS
				</span>
			</div>	
			</nav>
			</header>
			<section className="w-full h-50 p-5 absolute left-25 mt-5">
			<p className="text-xl font-semibold text-gray-900">Build your community, start a project.</p>
				<div className="flex gap-5 ">
					<button className="flex items-center h-20 w-50 mt-5 gap-5 rounded-xl font-semibold text-gray-600 bg-white border border-gray-300 hover:border-[#7873db]">
						<span className="ml-5 px-2 py-2 rounded-lg border-[#b3b0f1] border bg-[#eef2ff]">
						<svg fill="none" viewBox="0 0 24 24" width="24" height="24">
						<path fill="#3f36ed" d="M17.75 11.5a.75.75 0 0 0 1.5 0h-1.5ZM13 21.75a.75.75 0 0 0 0-1.5v1.5Zm2.5-14a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 5.5a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM17.75 21a.75.75 0 0 0 1.5 0h-1.5Zm1.5-6a.75.75 0 0 0-1.5 0h1.5Zm-3.75 2.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-14-15h8v-1.5h-8v1.5ZM17.75 6v5.5h1.5V6h-1.5ZM13 20.25H7.5v1.5H13v-1.5ZM5.25 18V6h-1.5v12h1.5Zm2.25 2.25A2.25 2.25 0 0 1 5.25 18h-1.5a3.75 3.75 0 0 0 3.75 3.75v-1.5Zm8-16.5A2.25 2.25 0 0 1 17.75 6h1.5a3.75 3.75 0 0 0-3.75-3.75v1.5Zm-8-1.5A3.75 3.75 0 0 0 3.75 6h1.5A2.25 2.25 0 0 1 7.5 3.75v-1.5Zm8 4h-8v1.5h8v-1.5Zm-2 4h-6v1.5h6v-1.5ZM19.25 21v-3h-1.5v3h1.5Zm0-3v-3h-1.5v3h1.5Zm-3.75.75h3v-1.5h-3v1.5Zm3 0h3v-1.5h-3v1.5Z"></path>
						</svg>
						</span>
						New docs</button>
					<button className="flex items-center h-20 w-50 mt-5 gap-5 rounded-xl font-semibold text-gray-600 bg-white border border-gray-300 hover:border-[#6bce8f]">
					<span className="ml-5 px-2 py-2 rounded-lg border-[#9bf7b7] border bg-[#f0fdf4]">
					<svg fill="none" viewBox="0 0 24 24" width="24" height="24">
					<path stroke="green" d="M8.25 3.91H6c-1.66 0-3 1.336-3 3v2.5m5.25-5.5H18c1.66 0 3 1.34 3 3v2.5M8.25 3.91v5.5m4.25 10.68H6c-1.66 0-3-1.34-3-3V9.41m18 0v2.84m0-2.84H8.25M3 9.41h5.25M18.5 15v6m3-3h-6" stroke-linecap="round" stroke-width="1.5"></path>
						</svg></span>
						New blog</button>
				</div>

				<section className="flex flex-col relative w-300 h-20 gap-1 border-b border-b-gray-300 mt-15">
					<p className="text-lg text-gray-800 font-semibold">Your docs</p>
					<p className="text-base text-gray-600">Create a beautiful documentation for your product.</p>
					
						<button className="flex items-center justify-center gap-2 w-40 h-8 mt-4 border border-gray-300 rounded-full absolute right-2 hover:bg-slate-100/80 cursor-pointer">Expand section
							<span>
								<svg fill="none" viewBox="0 0 16 16" width="16" height="16">
									<path stroke="currentColor" d="M8 9.412V14m0 0-2.118-2.118M8 14l2.118-2.118M8 6.588V2m0 0L5.882 4.118M8 2l2.118 2.118" stroke-linecap="round" stroke-linejoin="round">
									</path>
								</svg>
							</span>
						</button>
					
				</section>

				<section className="flex flex-col relative w-300 h-20 gap-1 border-b border-b-gray-300 mt-15">
					<p className="text-lg text-gray-800 font-semibold">Your blogs</p>
					<p className="text-base text-gray-600">Create and manage your blogs.</p>
					
						<button className="flex items-center justify-center gap-2 w-40 h-8 mt-4 border border-gray-300 rounded-full absolute right-2 hover:bg-slate-100/80 cursor-pointer">Expand section
							<span>
								<svg fill="none" viewBox="0 0 16 16" width="16" height="16">
									<path stroke="currentColor" d="M8 9.412V14m0 0-2.118-2.118M8 14l2.118-2.118M8 6.588V2m0 0L5.882 4.118M8 2l2.118 2.118" stroke-linecap="round" stroke-linejoin="round">
									</path>
								</svg>
							</span>
						</button>
					
				</section>
			</section>

			
		</div>
	)
}