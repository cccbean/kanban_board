import { useEffect, useState } from 'react';
import Board from './components/Board';
import Header from './components/Header';

const App = () => {
	const [theme, setTheme] = useState(() => {
		if (localStorage.getItem('theme') !== null) {
			return localStorage.getItem('theme');
		} else {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				localStorage.setItem('theme', 'dark');
				return 'dark';
			} else {
				localStorage.setItem('theme', 'light');
				return 'light';
			}
		}
	});

	useEffect(() => {
		const root = window.document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			root.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [theme]);

	const themeSwitcher = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	return (
		<div className="flex h-screen flex-col">
			{/* <button className="bg-orange-100 dark:bg-red-100" onClick={themeSwitcher}>Theme Switcher</button> */}
			<Header theme={theme} themeSwitcher={themeSwitcher} />
			<Board />
		</div>
	);
};

export default App;
