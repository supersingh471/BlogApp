

export default function DocsCard() {
	const editedDate = new Date();

	return (
		<div className="flex-1 w-xl h-50 border bg-white/70 border-gray-300 mt-10 rounded-xl">
			<div className="flex flex-col w-100 p-5">
				<h1 className="font-semibold text-[#3f3f46]">Building DevBlog</h1>
				<p className="text-sm font-semibold text-[#71717a]">devblogproject.hashnode.space</p>
				<div  className="mt-6 text-sm text-zinc-500">
					<time dateTime={editedDate.toISOString()}>
						Edited {editedDate.toLocaleDateString('en-india', {
							day: 'numeric',
							month: 'short',
							year: 'numeric'
					})}</time>
				</div>
				<div className="flex items-center  border-t border-gray-300 w-133 h-15 mt-6 gap-5 text-gray-500 font-semibold">
					<a className="flex items-center border gap-2 border-gray-300 text-sm px-3 py-1 rounded-full cursor-pointer">
						<svg fill="none" viewBox="0 0 16 16" width="16" height="16">
							<path stroke="currentColor" d="M10.215 3.118 6.07 7.263c-.275.275-.412.412-.527.566-.102.137-.19.283-.265.436-.083.173-.142.358-.259.729l-.61 1.93 1.93-.61c.37-.117.556-.175.729-.259.154-.074.3-.163.436-.265.154-.115.291-.252.566-.527l4.145-4.145m-2-2L11 2.333c.273-.272.409-.409.556-.481a1 1 0 0 1 .888 0c.147.072.283.209.556.481.273.273.409.41.482.556a1 1 0 0 1 0 .888c-.073.147-.21.284-.482.556l-.785.785m-2-2 2 2M13.333 14H2.667" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>
						<span>Guide Editor</span>
					</a>

					<a className="flex items-center border gap-2 border-gray-300 text-sm px-3 py-1 rounded-full cursor-pointer">
						<svg fill="none" viewBox="0 0 16 16" width="16" height="16">
							<path stroke="currentColor" d="M10.197 3.725a.909.909 0 0 1-.446-.665l-.128-.94a.91.91 0 0 0-.901-.787H7.279a.91.91 0 0 0-.901.787l-.128.94a.91.91 0 0 1-.447.665l-.408.235a.91.91 0 0 1-.798.054l-.878-.359a.91.91 0 0 0-1.132.387l-.721 1.25a.91.91 0 0 0 .23 1.173l.75.581a.91.91 0 0 1 .353.718v.47a.91.91 0 0 1-.352.72l-.75.581a.909.909 0 0 0-.231 1.174l.721 1.25a.91.91 0 0 0 1.132.386l.878-.359a.909.909 0 0 1 .799.054l.407.236a.91.91 0 0 1 .447.664l.128.94a.91.91 0 0 0 .9.787h1.444a.91.91 0 0 0 .9-.786l.129-.94a.91.91 0 0 1 .447-.666l.407-.235a.91.91 0 0 1 .798-.054l.878.36a.909.909 0 0 0 1.132-.387l.721-1.25a.91.91 0 0 0-.23-1.174l-.75-.58a.909.909 0 0 1-.353-.719v-.47a.91.91 0 0 1 .352-.72l.75-.58a.91.91 0 0 0 .231-1.174l-.721-1.25a.91.91 0 0 0-1.132-.387l-.878.36a.91.91 0 0 1-.799-.055l-.407-.235Z" stroke-linecap="round" stroke-linejoin="round"></path>
							<path stroke="currentColor" d="M9.575 8.91a1.818 1.818 0 1 1-3.15-1.819 1.818 1.818 0 0 1 3.15 1.818Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
						<span>Dashboard</span>
					</a>

					<a className="cursor-pointer ml-auto">
						<svg fill="none" viewBox="0 0 20 20" width="20" height="20"><path stroke="currentColor" d="M17.5 10v5a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V5A2.5 2.5 0 0 1 5 2.5h5m3.333 0H17.5m0 0v4.167m0-4.167-6.667 6.667" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"></path></svg>
					</a>					
				</div>
			</div>
		</div>
	)
}