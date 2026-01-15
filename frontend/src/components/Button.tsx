type Buttonprops = {
	title: string;
	icon?: React.ReactNode;
	onClick?: () => void;
};


export function Button({title, icon} : Buttonprops) {

	return (
		<button className="flex items-center font-semibold cursor-pointer">{title}{icon}</button>
	)
}