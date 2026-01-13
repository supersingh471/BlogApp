import { Heading } from "./Header";

type FormTypes = {
	title: string;
	content: string;
	setTitle: (title: string) => void;
	setContent: (content: string) => void;
	open: boolean;
	onShow: () => void;
	onClick: () => void;
}

export default function CreatePostForm({ title, content, setTitle, setContent, onClick, onShow }: FormTypes) {
	return (
		<div className="mt-5 h-120 w-100 ml-20 p-5 shadow-[0_0_20px_rgba(168,85,247,0.3)] rounded-xl transition-all duration-500 ease-in-out" style={{ background: 'radial-gradient(circle at 0% 0%, #9B7BD5 0%, #B8A3E6 30%, transparent 60%), radial-gradient(circle at 100% 100%, #5B8FE8 0%, #8FB9F0 30%, transparent 60%), radial-gradient(ellipse at 100% 0%, #A88FD5 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, #7AACF7 0%, transparent 55%), #D5C9F0' }}>
			<div className="flex flex-col h-110 w-90 bg-[#E0D3ED] shadow-[0_0_20px_rgba(168,85,247,0.3)] rounded-md">
				<div className="flex justify-between text-xl font-semibold p-4">
					<Heading title="Create New Post"/>
					<button onClick={onShow} className="cursor-pointer">
						<svg className="w-[55px] h-[55px] fill-[#0a0a0a]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
							<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
						</svg>
					</button>
				</div>
				<input 
					className="pl-2 h-10 w-80 ml-5 bg-[#F3F0FA] rounded-md focus:outline-none" 
					type="text" 
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea 
					className="mt-8 mx-5 pl-2 pt-2 h-45 bg-[#F3F0FA] rounded-md focus:outline-none" 
					placeholder="Content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<button onClick={onClick} className="flex items-center h-12 w-80 mt-10 mx-5 bg-[linear-gradient(to_right,#A855F7,#9333EA,#7C3AED)] rounded-md text-white text-md font-semibold cursor-pointer hover:opacity-90 transition-opacity">
					<span className="flex-1 text-center">-- Publish Post</span>
					<svg className="pr-4 w-9 h-9 fill-[#7c2dca]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
						<path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path>
					</svg>
				</button>
			</div>
		</div>
	);
}