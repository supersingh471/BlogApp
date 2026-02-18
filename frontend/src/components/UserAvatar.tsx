type props = {
	label: string,
	openMenu: boolean,
	onShow: () => void;
}


export default function Avatar({label, openMenu, onShow}: props) {
	return (
		<button onClick={onShow} className={` ${openMenu ? '' : 'ring-3 ring-gray-600'} flex items-center justify-center w-8 h-8 font-bold bg-gray-300 rounded-full fill-[#B4BCFE] cursor-pointer`}>
					{label}
				</button>
	)
}