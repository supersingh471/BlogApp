import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/landing";
import Signup from "./pages/signup";


function App() {
	return (
		<>
		<BrowserRouter>
		<Routes>
			<Route path="/dashboard" element={<Dashboard/>}/>
			<Route path="/landing" element={<Landing/>}/>
			<Route path="/signup" element={<Signup/>}/>
		</Routes>
		</BrowserRouter>
		</>
	)
}

export default App

