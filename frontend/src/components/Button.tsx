type Buttonprops = {
	title: string;
	icon?: React.ReactNode;
	className?: string
};


export default function Button({title, icon, className = ""} : Buttonprops) {

	return (
		<button className={`flex justify-center gap-2 px-3 py-1 text-gray-50 font-semibold border-0 bg-[#5588fb] rounded-md cursor-pointer ${className}`}>{icon}{title}</button>
	)
}