import { Heading } from "../components/Header";

export default function Home () {

	return (
		<div className="flex bg-slate-900 min-h-screen overflow-x-hidden w-full text-white">
			<div className="w-75 m-2 p-3"><Heading title="DevBlog"/></div>
			<div className="bg-[#18181b] min-h-screen w-300 ml-auto p-4 m-2">Popular posts</div>
		</div>
	)
}