import { Heading } from "../components/Header";

export default function Landing() {
	return (
		<div className="flex w-full min-h-screen bg-linear-to-b from-[#c8bced] to-white">
			<div className="flex border h-10 w-full">
				<div className="flex px-4 ml-50 text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
					<Heading title="Blogify"/>
				</div>
			</div>
		</div>
	)
}