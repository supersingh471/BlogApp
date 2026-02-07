import { GiPenguin } from "react-icons/gi";

export function Heading({title} : {title: string}) {

	return (
		<div className="flex p-7 text-xl font-semibold gap-2">
			<GiPenguin size={30}/>{title}</div>
	)

}