import { Heading } from "../components/Header";

type FormHeaderProps = {
	open : boolean;
	onShow: () => void;
}
export default function FormHeader({open, onShow}: FormHeaderProps) {

	return (
		<div className="mt-5 h-30 w-100 ml-20 p-5 shadow-[0_0_20px_rgba(168,85,247,0.3)] rounded-xl" style={{ background: 'radial-gradient(circle at 0% 0%, #9B7BD5 0%, #B8A3E6 30%, transparent 60%), radial-gradient(circle at 100% 100%, #5B8FE8 0%, #8FB9F0 30%, transparent 60%), radial-gradient(ellipse at 100% 0%, #A88FD5 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, #7AACF7 0%, transparent 55%), #D5C9F0' }}>
			<div onClick={onShow} className={`flex flex-col h-20 w-90 bg-[#E0D3ED] shadow-[0_0_20px_rgba(168,85,247,0.3)] rounded-md ${open ? 'active' : ''}`}>
				<div className="flex justify-between text-xl font-semibold p-4"><Heading title="Create New Post"/>
					<svg className="w-[50px] h-[50px] fill-[#7c2dca]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
  						<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
					</svg>
				</div>
			</div>
		</div>
	)
}