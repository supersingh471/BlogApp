import { Link } from "react-router-dom";
import { Button } from "../components/Button";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#F8B4F0,#C7F9F8)] backdrop-blur-md">
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
        
      </section>

      {/* Features */}
      <section className="px-10 py-16">
        </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h3 className="text-3xl font-bold">
          Start Sharing Your Tech Journey
        </h3>
        <p className="mt-4 text-gray-700">
          No social pressure. Just learning, writing, and progress.
        </p>

        <Link
          to="/signup"
          className="inline-block mt-8 px-10 py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow"
        >
          Sign Up For Free →
        </Link>
      </section>

      {/* Footer */}
      
      
    </div>
  );
}
