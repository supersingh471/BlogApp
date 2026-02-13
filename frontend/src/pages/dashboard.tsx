/*import axios from "axios";
import { Heading } from "../components/Header";
import { useEffect, useState, useCallback, useMemo } from "react";
import { BlogList } from "../components/BlogList";
import FormHeader from "../components/FormHeader";
import Panel from "../components/Panel";

type Blog = {
  id: number;
  title: string;
  content: string;
  author: {
    firstName: string;
  };
  createdAt: string | number;
};

export default function Dashboard() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [open, setOpen] = useState(false);
	const [blogs, setBlogs] = useState<Blog[]>([]);

	const token = useMemo(() => localStorage.getItem("token"), []);

	const fetchBlogs = useCallback(async () => {
		try {
			const response = await axios.get("http://localhost:3000/api/v1/post/posts", {
			headers: { Authorization: `Bearer ${token}` }
		});
		setBlogs(response.data.posts);
		} catch (error: any) {
			console.error("failed to fetch blogs", error.message);
		}
	}, [token]);

	//Publish button to post blogs
	const publish = useCallback(async () => {
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
		//setOpen(false); //close the form after publishing
		}catch (error: any) {
			console.error("failed to post blog:", error);
		}
	}, [title, content, token, fetchBlogs]);

	//reset Blog list after new post
	useEffect(() => {
		fetchBlogs();
	}, []);
	
	return (
	<div className="min-h-screen w-full bg-[linear-gradient(to_bottom,#F8B4F0,#C7F9F8)] backdrop-blur-md">
			<div className="p-7 text-3xl font-semibold"><Heading title="DevBlog"/></div>

		<div className="flex mt-10 h-full w-full">
			{/*Create post form
			{
				open ? (
					<Panel
					title={title}
					content={content}
					setTitle={setTitle}
					setContent={setContent}
					open={open}
					onShow={() => setOpen(false)}
					publish={publish}
					/>
				) : (
					<FormHeader
					open={open}
					onShow={() => setOpen(true)}
					/>
				)
			}		
			{/*Blog List
			<div className="grid grid-cols-2 gap-4 w-220 h-150 ml-10 mt-5 p-5 shadow-[0_0_20px_rgba(168,85,247,0.3)] rounded-xl" style={{ background: 'radial-gradient(circle at 0% 0%, #9B7BD5 0%, #B8A3E6 30%, transparent 60%), radial-gradient(circle at 100% 100%, #5B8FE8 0%, #8FB9F0 30%, transparent 60%), radial-gradient(ellipse at 100% 0%, #A88FD5 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, #7AACF7 0%, transparent 55%), #D5C9F0' }}>
				<BlogList blogs={blogs}/>
			</div>
		</div>
		
	</div>
	);
}
	*/