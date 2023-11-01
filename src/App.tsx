import { useEffect, useState } from 'react';
import Board from './components/Board';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Prototype } from './components/Prototype';
import { Home } from './pages/Home';
import { ProjectPage } from './pages/ProjectPage';

export interface Project {
	title: string;
	todos: {
		id: string;
		text: string;
		completed: boolean;
	}[] | [];
	inProgress: {
		id: string;
		text: string;
		completed: boolean;
	}[] | [];
	completed: {
		id: string;
		text: string;
		completed: boolean;
	} | [];
}

const App = () => {
	const [projects, setProjects] = useState<Project[]>([])

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

	// This fixed the FOUC for dark mode
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);

	const themeSwitcher = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	// This fixed the FOUC for dark mode
	if (loading) {
		return <div></div>;
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Home projects={projects} setProjects={setProjects} />
						// <div className="flex h-screen max-h-screen flex-col">
						// 	<Header theme={theme ? theme : ''} themeSwitcher={themeSwitcher} />
						// 	<Board />
						// </div>
					}
				/>
				<Route path="/:projectName" element={<ProjectPage projects={projects} setProjects={setProjects} />} />
				<Route path="*" element={<div>404 NOT FOUND</div>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
