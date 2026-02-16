import Avatar from "./UserAvatar"
type props = {
	label: string,
	open: boolean,
	onShow: () => void;
}

export default function UserDropDownMenu({label, open, onShow}: props) {
	 
	return (
		<div className="flex col">
			<Avatar
			label={label} 
			open={open}
			onShow={onShow}/>
		<div className="flex flex-col w-70 m-20 shadow-[0_5px_5px_rgba(0,0,0,0.2)] border border-zinc-300 rounded-xl">
			<div className="flex gap-3 border-b h-21 border-gray-300">
			<div className="flex gap-3 p-2 m-2 w-65 rounded-lg hover:bg-zinc-100 cursor-pointer">
			<span className="flex items-center justify-center w-12 h-12 font-bold text-xl bg-gray-300 rounded-full fill-[#c0c4eb]">
					VS
				</span>
				<div className="flex flex-col h-14">
				<h1 className="text-zinc-700 text-xl font-semibold h-7">Vikash Singh</h1>
				
					<p className="font-semibold text-zinc-500">@noobcoder471</p>
				</div>
			</div>
			</div>

			<div className="border-b border-gray-300 text-[#57575b] ">
				<div className="flex flex-col m-2">
					<span className="flex gap-2 px-4 py-2 rounded-lg hover:bg-zinc-100 cursor-pointer">
						<svg fill="none" viewBox="0 0 20 16" width="20" height="22"><path stroke="currentColor" d="M14.948 13.7a.719.719 0 0 0 1.094-.614V3.958c0-.92-.747-1.667-1.667-1.667H8.958c-.584 0-1.098.301-1.395.756m5.145 14.661V7.292c0-.921-.746-1.667-1.666-1.667H5.625c-.92 0-1.667.746-1.667 1.667v10.416l3.95-2.338a.833.833 0 0 1 .85 0l3.95 2.338Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"></path>
						</svg>Bookmarks</span>

					<span className="flex gap-2 px-4 py-2 rounded-lg hover:bg-zinc-100 cursor-pointer"><svg fill="none" viewBox="0 0 20 16" width="20" height="22"><path stroke="currentColor" d="M4.262 14.83a7.5 7.5 0 1 0-.387-9.158m2.167.784-3.085.2-.2-3.086m6.994 3.432v2.994l2.248 1.505" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"></path></svg>
						My reading history
					</span>

					<span className="flex gap-2 px-4 py-2  rounded-lg hover:bg-zinc-100 cursor-pointer">
					<svg fill="none" viewBox="0 0 20 16" width="20" height="22"><path stroke="currentColor" d="M4.94 16.263a5.831 5.831 0 0 1 5.06-2.93 5.831 5.831 0 0 1 5.06 2.93M18.334 10a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0Zm-5.555-1.852a2.778 2.778 0 1 1-5.556 0 2.778 2.778 0 0 1 5.556 0Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"></path></svg>
						Account settings</span>
				</div>
			</div>

			<div className="border-b border-gray-300 text-[#57575b]">
				<div className="flex flex-col m-2 gap-1">
					<span className="flex gap-2 px-4 py-2 rounded-lg hover:bg-zinc-100 cursor-pointer">
					<svg fill="none" viewBox="0 0 20 16" width="20" height="22"><path stroke="currentColor" d="M5 7.5v5m0-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 5A2.5 2.5 0 1 0 7.5 15M5 12.5A2.5 2.5 0 0 1 7.5 15M15 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0A7.5 7.5 0 0 1 7.5 15" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"></path></svg>
						Changelog</span>
					<span className="flex gap-2 px-4 py-2 rounded-lg hover:bg-zinc-100 cursor-pointer">
					<svg fill="none" viewBox="0 0 20 16" width="20" height="22"><path stroke="currentColor" d="M7.575 7.5a2.5 2.5 0 0 1 4.858.834c0 1.666-2.5 2.5-2.5 2.5M10 14.167h.008M18.333 10a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"></path></svg>
						Support and feedback</span>
					
				</div>
			</div>

			<div className="m-1.5 text-[#ef3a49]">
					<span className="flex gap-2 px-4.5 py-2 rounded-lg hover:bg-zinc-100 cursor-pointer">
					<svg fill="none" viewBox="0 0 20 16" width="20" height="22"><path stroke="currentColor" d="M13.333 14.167 17.5 10m0 0-4.167-4.167M17.5 10h-10m0-7.5h-1c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2.5 4.4 2.5 5.1 2.5 6.5v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.4 17.5 5.1 17.5 6.5 17.5h1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"></path></svg>
						Log out</span>
			</div>
		</div>
		</div>
	)
}