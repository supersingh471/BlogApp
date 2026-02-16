import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard1";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Landing from "./pages/Landing";
import UserDropDownMenu from "./components/UserDropdownMenu";


function App() {
	return (
		<>
		<BrowserRouter>
		<Routes>
			<Route path="/Landing" element={<Landing/>}/>
			<Route path="/dashboard" element={<Dashboard/>}/>
			<Route path="/signup" element={<Signup/>}/>
			<Route path="/login" element={<Login/>}/>
			<Route path="/menu" element={<UserDropDownMenu/>}/>
		</Routes>
		</BrowserRouter>
		</>
	)
}

export default App

