import CreatePostForm from "./CreatePostForm";

type PanelProps = {
	title: string;
	content: string;
	setTitle: (title : string) => void;
	setContent: (content : string) => void;
	open: boolean;
	onShow: () => void;
	publish: () => void;
}
export default function Panel({title, content, setTitle, setContent, open, onShow, publish}: PanelProps) {
	return (
		<CreatePostForm 
		title={title} 
		content={content} 
		setTitle={setTitle}
		setContent={setContent}
		onClick={publish} 
		open={open} 
		onShow={onShow}
		/>
	);
}