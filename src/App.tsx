import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectPage } from './pages/ProjectPage';

export interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

const App = () => {
	const [projects, setProjects] = useState<string[]>(() => {
		const localProjects = window.localStorage.getItem('projects');
		return localProjects !== null ? JSON.parse(localProjects) : [];
	})

	useEffect(() => {
		window.localStorage.setItem('projects', JSON.stringify(projects));
		console.log(projects);
	}, [projects])

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
