import Button from "../components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
export default function Blog() {

	return (
		<div className="flex flex-col min-h-screen w-full bg-[#18181b]">
			<div className="flex justify-between p-5">
				<div className="text-white font-semibold text-lg">My blogs</div>

				<Button icon={<i className="fa-solid fa-plus pt-1"></i>}
						title="New Blog"
				/>

			</div>

			<div className="flex justify-center py-10 mt-40">
			<div className="flex justify-center items-center">
				<div className="flex flex-col items-center gap-4">
					<div className="border px-4 py-4 bg-[#27272a] border-0 rounded-full">
						<FontAwesomeIcon icon={faPlus} className="text-2xl text-gray-200" />
					</div>	

					<span className="text-lg font-semibold font-poppins text-gray-200">No blogs yets</span>
					<span className="text-sm font-poppins text-slate-400">Create your first blog to get started with publishing.</span>
					<Button title="Create your first blog"
							icon={<i className="fa-solid fa-plus pt-1"></i>}
						 />
				</div>
			</div>
			</div>
	</div>
	)
}