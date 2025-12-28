	import axios from "axios";
	import { Heading } from "../components/Header";
	import { useEffect, useState } from "react";

	export default function Dashboard() {
		const [title, setTitle] = useState("");
		const [content, setContent] = useState("");

		const [blogs, setBlogs] = useState<any[]>([]);
		const token = localStorage.getItem("token");

		const fetchBlogs = async () => {
			try {
				const response = await axios.get("http://localhost:3000/api/v1/post/posts", {
				headers: { Authorization: `Bearer ${token}` }
			});
			setBlogs(response.data.posts);
			} catch (error: any) {
				console.error("failed to fetch blogs", error.message);
			}
		};

		const publish = async () => {
			try {
				await axios.post("http://localhost:3000/api/v1/post/posts", {
					title,
					content
				},
			{
				headers: { Authorization: `Bearer ${token}`}
			});
			fetchBlogs();
			//clear form
			setTitle("");
			setContent("");
			}catch (error: any) {
				console.error("failed to post blog:", error);
			}
		};

		useEffect(() => {
			fetchBlogs();
		}, []);
		
		return (
		<div className="min-h-screen w-full bg-[linear-gradient(to_bottom,#F8B4F0,#C7F9F8)] backdrop-blur-md">
				<div className="p-7 text-3xl font-semibold"><Heading title="DevBlog"/></div>
				
			<div className="flex mt-10 h-140 w-full">
				<div className="mt-5 h-120 w-100 ml-20 p-5 shadow-[0_0_20px_rgba(168,85,247,0.3)] rounded-xl" style={{ background: 'radial-gradient(circle at 0% 0%, #9B7BD5 0%, #B8A3E6 30%, transparent 60%), radial-gradient(circle at 100% 100%, #5B8FE8 0%, #8FB9F0 30%, transparent 60%), radial-gradient(ellipse at 100% 0%, #A88FD5 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, #7AACF7 0%, transparent 55%), #D5C9F0' }}>
				<div className="flex flex-col h-110 w-90 bg-[#E0D3ED] shadow-[0_0_20px_rgba(168,85,247,0.3)] rounded-md">
					<div className="flex justify-between text-xl font-semibold p-4"><Heading title="Create New Post"/><svg className="w-[55px] h-[55px] fill-[#0a0a0a]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
					<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path></svg>
					</div>
					<input onChange={(e) => {
						setTitle(e.target.value);
					}} className="pl-2 h-10 w-80 ml-5 bg-[#F3F0FA] rounded-md focus:outline-none" type="text" placeholder="Title"/>
					<textarea onChange={(e) => {
						setContent(e.target.value);
					}} className="mt-8 mx-5 pl-2 h-45 bg-[#F3F0FA] rounded-md focus:outline-none" placeholder="Content"></textarea>
					<button onClick={publish} className="flex items-center h-12 w-80 mt-10 mx-5 bg-[linear-gradient(to_right,#A855F7,#9333EA,#7C3AED)] rounded-md text-white text-md font-semibold cursor-pointer">
						<span className="flex-1 text-center">-- Publish Post</span>
					<svg className="pr-4 w-9 h-9 fill-[#f3f0f0]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
					<path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg>
					</button>
				</div>
				</div>

				<div className="grid grid-cols-2 gap-4 w-220 h-120 ml-10 mt-5 p-5 shadow-[0_0_20px_rgba(168,85,247,0.3)] rounded-xl" style={{ background: 'radial-gradient(circle at 0% 0%, #9B7BD5 0%, #B8A3E6 30%, transparent 60%), radial-gradient(circle at 100% 100%, #5B8FE8 0%, #8FB9F0 30%, transparent 60%), radial-gradient(ellipse at 100% 0%, #A88FD5 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, #7AACF7 0%, transparent 55%), #D5C9F0' }}>
					{blogs.length > 0 ? (
						blogs.map((blog: any) => (
						<div key={blog.id} className="h-full p-5 bg-[linear-gradient(to_bottom,#F49EE6,#DDFCFB)] shadow-[0_0_20px_rgba(168,85,247,0.3)] rounded-md cursor-pointer transition-all duration-300 ease-out
						hover:-translate-y-1
						hover:scale-[1.02]
						hover:shadow-2xl">
							<h2 className="text-xl font-semibold">{blog.title}</h2>
							<p className="mt-2 text-gray-700">{blog.content}</p>
							{/*<span className="mt-3 text-sm text-gray-500">{blog.author} . {blog.createdAt}</span>*/}
						</div>
					))
					) : (<p className="text-2xl font-semibold text-gray-800">No blogs yet</p>)}
						
			</div>
			</div>
			
		</div>
		);
	}
	