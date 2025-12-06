import { Heading } from "../components/Header";
import { Button } from "../components/Button";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Landing() {
	return (
		<div className="flex flex-col gap-15 w-full h-screen bg-linear-to-b from-[#c8bced] to-white">
			<div className="flex items-center border h-15 w-full">
				<div className="px-4 ml-50 text-3xl font-bold font-poppins ">
					<Heading title="Blogify"/>
				</div>
					<div className="flex items-center gap-13 mx-auto">
						<a className="text-sm font-bold text-black" href="">Article</a>
							<Menu as="div" className="text-black relative inline-block">
							<MenuButton className="inline-flex w-full gap-x-1.5 rounded-md text-sm font-bold text-black">
								Categories
								<ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-black" />
							</MenuButton>

							<MenuItems
								transition
								className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-linear-to-b from-[#c8bced] to-white outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
								<div className="py-1">
								<MenuItem>
									<a
									href="#"
									className="block px-4 py-2 text-md font-semibold text-black data-focus:outline-hidden"
									>
									Technology
									</a>
								</MenuItem>
								<MenuItem>
									<a
									href="#"
									className="block px-4 py-2 text-md font-semibold text-black data-focus:outline-hidden"
									>
									Sports
									</a>
								</MenuItem>
								<MenuItem>
									<a
									href="#"
									className="block px-4 py-2 text-md font-semibold text-black data-focus:outline-hidden"
									>
									Adventures
									</a>
								</MenuItem>
								</div>
							</MenuItems>
							</Menu>
						<a className="text-sm font-bold text-black" href="">About</a>
						<Menu as="div" className="text-black relative inline-block">
							<MenuButton className="inline-flex w-full gap-x-1.5 rounded-md text-sm font-bold text-black">
								Follows
								<ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-black" />
							</MenuButton>

							<MenuItems
								transition
								className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-linear-to-b from-[#c8bced] to-white outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
								<div className="py-1">
								<MenuItem>
									<a
									href="#"
									className="block px-4 py-2 text-md font-semibold text-black data-focus:outline-hidden"
									>
									X
									</a>
								</MenuItem>
								<MenuItem>
									<a
									href="#"
									className="block px-4 py-2 text-md font-semibold text-black data-focus:outline-hidden"
									>
									Instagram
									</a>
								</MenuItem>
								<MenuItem>
									<a
									href="#"
									className="block px-4 py-2 text-md font-semibold text-black data-focus:outline-hidden"
									>
									YouTube
									</a>
								</MenuItem>
								</div>
							</MenuItems>
							</Menu>
				</div>
				<div className="flex justify-center items-center ml-auto w-34 h-10 rounded-4xl mr-50 text-white bg-black">
				<Button title="Signup" 
				icon={<svg className="ml-2 mt-1 w-4 h-4 fill-[#faf6f6]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  				<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
				</svg>}/>
			</div>
			</div>
			<div className="flex flex-col text-center text-8xl font-bold">Discover Latest 
				<span>Articles</span></div>
		</div>
	)
}
