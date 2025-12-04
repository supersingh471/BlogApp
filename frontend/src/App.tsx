import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/landing";

function App() {
	return (
		<>
		<BrowserRouter>
		<Routes>
			<Route path="/dashboard" element={<Dashboard/>}/>
			<Route path="/landing" element={<Landing/>}/>
			
		</Routes>
		</BrowserRouter>
		</>
	)
}

export default App

