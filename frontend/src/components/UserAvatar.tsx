type props = {
	label: string,
	open: boolean,
	onShow: () => void;
}


export default function Avatar({label, open, onShow}: props) {
	return (
		<button onClick={onShow} className={` ${open ? 'active' : ''} flex items-center justify-center w-8 h-8 font-bold bg-gray-300 rounded-full fill-[#B4BCFE] cursor-pointer`}>
					{label}
				</button>
	)
}