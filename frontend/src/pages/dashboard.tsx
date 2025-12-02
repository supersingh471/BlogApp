import { Heading } from "../components/Header";

export default function Dashboard() {
	return (
	  <div
		className="
		  min-h-screen w-full
		  bg-[#0d0f13]
		  bg-blend-overlay
		  bg-[linear-gradient(180deg,#0d0f13_0%,#090a0f_50%,#050507_100%),
			  radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_25%,rgba(0,0,0,0)_60%),
			  radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.015)_30%,rgba(0,0,0,0)_70%)]">
		<div className="flex border shadow-amber-200">
			<div><Heading title="Blog"/></div>
		</div>
	  </div>
	);
  }
  