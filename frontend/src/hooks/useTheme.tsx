import { useEffect, useState } from "react";


export default function useTheme() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const saved = localStorage.getItem("theme");
		if (saved === "dark") {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	function toggleTheme() {
		if (isDark) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
		setIsDark(!isDark);
	}

	return { isDark, toggleTheme }
}