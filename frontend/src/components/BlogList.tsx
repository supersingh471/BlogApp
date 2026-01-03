import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

type Blog = {
	id: number,
	title: string,
	content: string,
	author: {
    firstName: string;
  };
	createdAt: string | number
}
type BlogListProps = {
	blogs: Blog[];
}

export function BlogList ({blogs} : BlogListProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;

	//Reset to page 1 when blog array change
	useEffect(() => {
		setCurrentPage(1)
	},[blogs.length]);	

	const totalPages = Math.ceil(blogs.length / itemsPerPage)

	function renderData() {
		if (blogs.length === 0) {
			return (
				<div className="col-span-2 flex items-center justify-center p-8">
				<p className="text-2xl font-semibold text-gray-800">No blogs yet</p>
				</div>
			);
   		}

		const startIndex = (currentPage - 1) * itemsPerPage;
    	const endIndex = startIndex + itemsPerPage;
    	const currentItems = blogs.slice(startIndex, endIndex);
	
		return (
			<>
				{
					currentItems.map((items:Blog) => (
						<BlogCard key={items.id} title={items.title} content={items.content.slice(0, 150) + (items.content.length > 150 ? '...' : '')} authorName={items.author.firstName} createdAt={items.createdAt}/>
					))
				}
			</>
		)
	}
	
	function goToNextPage() {
		setCurrentPage(prevPage => prevPage + 1);
	}

	function goToPrevPage() {
		setCurrentPage(prevPage => prevPage - 1);
	}

	function goToSpecificPage(pageNumber:number) {
		setCurrentPage(pageNumber)
	}

	function renderPaginationControl() {
		if(totalPages === 0) {
			return null;
		}
		
		return (
			<div className="col-span-2 flex items-center justify-center gap-2 mt-6">
				<button onClick={goToPrevPage}
						disabled={currentPage === 1}
						className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
					Previous
				</button>
				<div className="flex gap-1">
					{Array.from({ length: totalPages }, (_, i) => (
						<button
						key={i}
						onClick={() => goToSpecificPage(i + 1)}
						className={`px-3 py-2 rounded-md transition-colors ${
							currentPage === i + 1
							? "bg-purple-600 text-white font-semibold"
							: "bg-white text-purple-600 hover:bg-purple-100"
						}`}
						>
						{i + 1}
						</button>
					))}
       			 </div>
				<button onClick={goToNextPage}
						disabled={currentPage === totalPages}
						className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
					Next</button>
			</div>
		)
	}
	return (
		<>
			{renderData()}
			{renderPaginationControl()}
		</>
	);
}