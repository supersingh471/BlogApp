type BlogCardProps = {
	title: string,
	content: string,
	authorName: string,
	createdAt: string | number
};

export function BlogCard({title, content, authorName, createdAt }: BlogCardProps) {
	
	return (
		<div className="h-60 p-5 bg-[linear-gradient(to_bottom,#F49EE6,#DDFCFB)] shadow-[0_0_20px_rgba(168,85,247,0.3)] rounded-md cursor-pointer transition-all duration-300 ease-out
			hover:-translate-y-1
			hover:scale-[1.02]
			hover:shadow-2xl flex flex-col">
		<h2 className="text-xl font-semibold shrink-0">{title}</h2>
		<p className="mt-2 text-gray-700 flex-1 overflow-y-auto">{content}</p>
		<span className="mt-3 text-sm text-gray-500 shrink-0">
			{authorName} · {new Date(createdAt).toLocaleDateString()}
		</span>
		</div>
	)
};

export default BlogCard