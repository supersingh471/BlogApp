import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import blogImage from '../assets/blogImage.png';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GiPenguin } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";


export default function Landing() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#FBFBFC,#F4F3FB)] backdrop-blur-md">
      {/* Navbar */}
      <header className="flex py-3 px-8 bg-white border-b border-gray-300">
		<h1 className="flex text-2xl font-semibold gap-2 mr-5 cursor-pointer"><GiPenguin size={30}/>DevBlog</h1>
		<nav className="flex gap-10 text-gray-800 font-semibold text-base cursor-pointer">
			<Link to={"/Landing"}>Home</Link>
			<Link to={"/"}>Features</Link>
			<Link to={"/"}>About</Link>
			<Link to={"/login"}>Login</Link>
		</nav>
		<Link to={"/Signup"}>
			<div className="flex justify-center hover:bg-[#030407] w-21 h-9 absolute right-10 rounded-lg bg-[#19191C] text-white font-semibold shadow">
				<Button title="Sign up"/>
			</div>
		</Link>
	  </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center gap-2 mt-20">
        
          <p className="text-4xl font-bold text-gray-800 leading-tight">
            Share What You Learn As A Developer
          </p>
          <p className="mt-2 text-lg text-gray-700">
            Write, reflect, and grow by documenting your journey in tech.
            Build consistency 
          </p>
			<p className="text-lg text-gray-700">and clarity—one post at a time.</p>
          <div className="mt-4 flex gap-4 cursor-pointer">
            <Link
              to="/signup"
              className="px-8 py-3 rounded-lg hover:bg-[#030407] bg-[#19191C] text-white font-semibold shadow"
            >
              Get Started →
            </Link>
			<span className="border border-gray-400 flex items-center justify-center gap-3 rounded-lg w-35 text-slate-700 hover:bg-slate-200">
				<Button title="Learn More"/><IoIosArrowForward size={11} className="mt-0.5"/>

			</span>
          </div>
       	 
      </section>

      {/* Features */}
      <section className="px-10 py-16">
			<h1 className="text-center font-semibold text-gray-800 text-3xl">Features to Boost Your Developer Journey</h1>
		<div className="grid md:grid-cols-4 gap-6 p-6 text-gray-800">
			{[
				{
					title: "Share Your Knowledge",
					desc: "Write and publish posts about what you learn while coding."
				},
				{
					title: "Easy to Use",
					desc: "User-friendly interface designed to make writing and publishing post a breeze."
				},
				{
					title: "Track Your Progress",
					desc: "Log your progress, set goals and reflect on your growth as as developer."
				},
				{
					title: "Join Developer Community",
					desc: "Meet and interact with other developer, share, learn and grow together"
				}
			].map((item) => (
				<div key={item.title} className="rounded-2xl shadow  bg-white p-4 cursor-pointer transition-all duration-300 ease-out
				hover:-translate-y-1.5
				hover:scale-[1.07]
				hover:shadow-2xl">
					<h2 className="font-semibold mb-2 text-gray-800 text-2xl">{item.title}</h2>
					<p className="text-gray-700">{item.desc}</p>
				</div>
			))}
		</div>
        </section>

      {/* CTA */}
      <div className="px-60">
        <h1 className="text-center text-4xl font-semibold mb-6">
          Latest Blog Post
        </h1>
        <div className="flex rounded-xl p-6 bg-white border border-slate-200">
			<img src={blogImage} alt="Post" 
				className="w-96 h-32 md:h-64 object-cover rounded-lg"/>
			<div className="ml-10 gap-4">
				<h2 className="text-2xl font-bold">Tips for Improving Consistency in Coding</h2>
			<p className="text-gray-700 text-lg mt-6">
				Consistent in coding is key to becoming a better developer.<br />
				Here are some practical tips to improve your coding consistency...<br /></p>
				<ul className="text-gray-700 text-lg list-disc list-inside pl-6 mt-2">
				<li>Set daily or weekly coding goals.</li>
				<li>Practice regularly, even if it's just a little each day.</li>
				<li>Keep a coding journal to reflect on what you've learned.</li>
				</ul>
				<br />
			</div>
		</div>
      </div>

      {/* Footer */}
      <footer className="shadow-[0_-5px_15px_-10px_rgba(0,0,0,0.6)] bg-white text-gray-700 backdrop-blur px-10 py-8 mt-10">
		<div className="grid grid-cols-5 text-xl">
		<h1 className="text-white text-3xl font-semibold">DevBlog</h1>
			<div>
				<h4>Quick Links</h4>
				<ul className="text-base mt-3">
					<li><Link to={"/"}>Home</Link></li>
					<li><Link to={"/"}>Features</Link></li>
					<li><Link to={"/about"}>About</Link></li>
					<li><Link to={"/contact"}>Contact</Link></li>
				</ul>
			</div>
			<div>
				<h4>Resources</h4>
				<ul className="text-base mt-3">
					<li><Link to={"/"}>Help Center</Link></li>
					<li><Link to={"/"}>Documentation</Link></li>
					<li><Link to={"/about"}>Community</Link></li>
				</ul>
			</div>
			<div>
				<h4>Connect</h4>
				<ul className="text-base mt-3">
					<li><Link to={"https://x.com/iamsuper_singh"} target="_blank" rel="noopener noreferrer">
						X</Link>
					</li>
					<li><Link to={"https://github.com/supersingh471"} target="_blank" rel="noopener noreferrer">
						GitHub</Link>
					</li>
					<li><Link to={"https://www.linkedin.com/in/vikash-singh-4438871a1/"} target="_blank" rel="noopener noreferrer">
						LinkedIn</Link>
					</li>
				</ul>
			</div>
			<div className="">
			<h3>Subscribe to our newsletter</h3>
				<div className="flex items-center mt-5"><input className="w-45 h-8 p-2 rounded-l-md bg-[#EDEEF3] text-base focus:shadow-xl focus:outline-none focus:ring-blue-500" type="text" placeholder="Enter your email"/>
				<button className="bg-[#19191C] text-lg text-gray-300 rounded-r-md w-50 h-8 hover:bg-[#0b0820]">Subscribe</button>
				</div>
				<section className="flex gap-6 p-2">
				<a href="https://github.com/supersingh471" 
					target="_blank"
					rel="noopener noreferrer">
					<FaGithub className="w-10 h-10 p-1 mt-6 cursor-pointer"/>
				</a>
				<a href="https://www.linkedin.com/in/vikash-singh-4438871a1/"
					target="_blank"
					rel="noopener noreferrer">
					<FaLinkedin className="w-10 h-10 p-1 mt-6 cursor-pointer"/>
				</a>
				<a href="https://x.com/iamsuper_singh"
					target="_blank"
					rel="noopener noreferrer">
					<FaTwitter className="w-10 h-10 p-1 mt-6 cursor-pointer"/>
				</a>
				</section>
			</div>
		</div>
		<p className="text-center px-5">&copy; DevBlog. All rights reserved.</p>
	  </footer>
      
    </div>
  );
}
