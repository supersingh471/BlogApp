import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/landing";
import Signup from "./pages/signup";
import Login from "./pages/login";
import LandingPage from "./pages/LandingPage";


function App() {
	return (
		<>
		<BrowserRouter>
		<Routes>
			<Route path="/landingPage" element={<LandingPage/>}/>
			<Route path="/dashboard" element={<Dashboard/>}/>
			<Route path="/landing" element={<Landing/>}/>
			<Route path="/signup" element={<Signup/>}/>
			<Route path="/login" element={<Login/>}/>
		</Routes>
		</BrowserRouter>
		</>
	)
}

export default App

