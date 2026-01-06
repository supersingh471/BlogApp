import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/landing";
import Signup from "./pages/signup";
import Login from "./pages/login";


function App() {
	return (
		<>
		<BrowserRouter>
		<Routes>
			<Route path="/api/v1/dashboard" element={<Dashboard/>}/>
			<Route path="/api/v1/landing" element={<Landing/>}/>
			<Route path="/api/v1/signup" element={<Signup/>}/>
			<Route path="/api/v1/login" element={<Login/>}/>
		</Routes>
		</BrowserRouter>
		</>
	)
}

export default App

