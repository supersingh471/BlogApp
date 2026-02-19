
type props = {
	titleName: string,
	contentName: string,
	label: string,
	open: boolean;
	onShow: () => void;
}


export default function DocsList({titleName, contentName, label, open, onShow}: props) {
	
	return (
		<section className="flex flex-col relative w-300 h-20 gap-1 border-b border-b-gray-300 dark:border-b-gray-700 mt-15">
			<p className="text-lg text-gray-800 font-semibold dark:text-gray-100">{titleName}</p>
			<p className="text-md text-gray-600 dark:text-gray-300">{contentName}</p>
		
			<button onClick={onShow} className={` ${open ? 'active' : ''} flex items-center justify-center gap-1 w-37 h-7 mt-4 border dark:border-gray-700 border-gray-300 dark:text-gray-200 rounded-full absolute right-2 hover:bg-slate-100/80 dark:hover:bg-slate-700 cursor-pointer`}>{label}
				<span>
					<svg fill="none" viewBox="0 0 16 16" width="16" height="16">
						<path stroke="currentColor" d="M8 9.412V14m0 0-2.118-2.118M8 14l2.118-2.118M8 6.588V2m0 0L5.882 4.118M8 2l2.118 2.118" stroke-linecap="round" stroke-linejoin="round">
						</path>
					</svg>
				</span>
			</button>
		</section>
	)
}