import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import CoderImage from '../assets/Coder.png';
import Image1 from '../assets/image1.png'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'



export default function Landing() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#F8B4F0,#C7F9F8,#F8B4F0)] backdrop-blur-md">
      {/* Navbar */}
      <header className="flex py-8 px-10">
		<h1 className="text-3xl font-bold">Dev Blog</h1>
		<nav className="flex gap-8 ml-auto mr-10 font-semibold text-lg">
			<Link to={"/"}>Home</Link>
			<Link to={"/"}>Features</Link>
			<Link to={"/"}>About</Link>
			<Link to={"/login"}>Login</Link>
		</nav>
		<Link to={"/Signup"}>
			<div className="flex justify-center items-center w-34 h-10 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow">
				<Button title="Signup"
					icon={<svg className="ml-2 mt-1 w-4 h-4 fill-[#faf6f6]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
					<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
					</svg>} />
			</div>
		</Link>
	  </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Share What You Learn <br /> As A Developer
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            Write, reflect, and grow by documenting your journey in tech.
            Build consistency and clarity—one post at a time.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/signup"
              className="px-8 py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow"
            >
              Get Started →
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 rounded-xl bg-white/70 backdrop-blur border border-white shadow font-semibold"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Illustration Placeholder */}
        <section className="w-170 h-120">
			<img src={Image1} alt="landing" />
		</section>
      </section>

      {/* Features */}
      <section className="px-10 py-16">
			<h1 className="text-center font-semibold text-3xl">Features to Boost Your Developer Journey</h1>
		<div className="grid md:grid-cols-4 gap-6 p-6">
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
				<div key={item.title} className="rounded-2xl shadow bg-white/50 p-4 cursor-pointer transition-all duration-300 ease-out
				hover:-translate-y-1.5
				hover:scale-[1.07]
				hover:shadow-2xl">
					<h2 className="font-semibold mb-2 text-2xl">{item.title}</h2>
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
        <div className="flex rounded-xl p-6 bg-white/50">
			<img src={CoderImage} alt="Post" 
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
      <footer className="bg-purple-500 text-white/90 backdrop-blur px-10 py-8 mt-10">
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
				<div className="flex items-center mt-5"><input className="w-45 h-8 p-2 rounded-l-md bg-white text-base text-gray-900 focus:shadow-xl focus:outline-none focus:ring-blue-500" type="text" placeholder="Enter your email"/>
				<button className="bg-purple-600 text-lg rounded-r-md w-50 h-8 hover:bg-purple-800">Subscribe</button>
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
