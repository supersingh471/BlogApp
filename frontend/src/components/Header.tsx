import { GiPenguin } from "react-icons/gi";

export function Heading({title} : {title: string}) {

	return (
		<div className="flex text-xl font-semibold gap-2 dark:text-gray-100">
			<GiPenguin size={30}/>{title}</div>
	)

}