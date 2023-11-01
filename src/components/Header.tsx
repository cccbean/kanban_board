import { useRef } from 'react';
import { Project } from '../App';
import { Link } from 'react-router-dom';

interface HeaderProps {
	title: string;
	projects: string[];
	setProjects: React.Dispatch<React.SetStateAction<string[]>>;
	theme: string;
	themeSwitcher: () => void;
}

const Header = ({ title, projects, setProjects, theme, themeSwitcher }: HeaderProps) => {
	const menuModalRef = useRef(null);
	const newProjectModalRef = useRef(null);

	const addProject = (title: string) => {
		const newProjects = [...projects];
		newProjects.push(title);
		setProjects(newProjects);
	};

	const addNewProjectClickHandler = () => {
		const modal = newProjectModalRef.current as unknown as HTMLDialogElement;
		const title = modal.querySelector('input')?.value;
		if (title) {
			addProject(title);
		}
		modal.close();
	};

	return (
		<header className="relative flex justify-between bg-slate-50 shadow-md shadow-slate-300">
			<Link className="flex items-center px-4" to="/">
				<svg
					className="h-8 w-8"
					fill="#000000"
					height="200px"
					width="200px"
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 512 512"
					xmlSpace="preserve"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						{' '}
						<g>
							{' '}
							<g>
								{' '}
								<path d="M211.054,349.845c-8.773,0-15.886,7.113-15.886,15.886v38.019c0,8.773,7.113,15.886,15.886,15.886 s15.886-7.113,15.886-15.886v-38.019C226.941,356.958,219.828,349.845,211.054,349.845z"></path>{' '}
							</g>{' '}
						</g>{' '}
						<g>
							{' '}
							<g>
								{' '}
								<path d="M300.945,349.845c-8.773,0-15.886,7.113-15.886,15.886v38.019c0,8.773,7.113,15.886,15.886,15.886 c8.773,0,15.886-7.113,15.886-15.886v-38.019C316.832,356.958,309.719,349.845,300.945,349.845z"></path>{' '}
							</g>{' '}
						</g>{' '}
						<g>
							{' '}
							<g>
								{' '}
								<path d="M512,153.677c0-8.773-7.113-15.886-15.886-15.886H394.07c-7.068-12.725-15.95-24.544-26.527-35.122 c-0.377-0.377-0.764-0.737-1.143-1.11V44.186c0-8.773-7.113-15.886-15.886-15.886s-15.886,7.113-15.886,15.886v33.17 c-49.075-28.287-109.4-27.364-157.256-0.116V44.186c0-8.773-7.113-15.886-15.886-15.886s-15.886,7.113-15.886,15.886v57.058 c-11.042,10.853-20.323,23.267-27.637,36.549H15.886C7.113,137.792,0,144.905,0,153.678c0,50.445,50.811,85.642,98.249,67.288 v78.902c-24.231,15.814-38.92,42.592-38.92,72.051v25.642c0,47.497,38.641,86.139,86.14,86.139h221.063 c47.498,0,86.14-38.641,86.14-86.139v-25.642c0-29.462-14.694-56.242-38.92-72.052v-78.901 C461.232,239.336,512,204.06,512,153.677z M256.221,88.228c-10.365,57.372-63.049,98.196-121.841,93.074 C149.187,126.34,199.212,88.162,256.221,88.228z M130.021,214.213c0-0.472,0.011-0.944,0.016-1.416 c76.41,7.501,145.145-45.73,157.736-120.637c53.146,13.727,94.206,62.646,94.206,122.053v72.938 c-18.231-3.294-244.246-1.398-251.958,0V214.213z M35.027,169.563h69.636c-1.099,3.735-2.125,7.782-2.943,11.621 C81.902,202.533,46.556,196.414,35.027,169.563z M420.898,371.919v25.642h0.001c0,29.978-24.388,54.367-54.368,54.367H145.468 c-29.979,0-54.368-24.388-54.368-54.367v-25.642c0-30.536,24.73-54.367,54.368-54.367h221.063 C396.111,317.553,420.898,341.329,420.898,371.919z M410.3,181.205c-0.831-3.925-1.81-7.809-2.936-11.642h69.609 C465.434,196.438,430.102,202.507,410.3,181.205z"></path>{' '}
							</g>{' '}
						</g>{' '}
						<g>
							{' '}
							<g>
								{' '}
								<circle cx="179.916" cy="240.569" r="21.015"></circle>{' '}
							</g>{' '}
						</g>{' '}
						<g>
							{' '}
							<g>
								{' '}
								<circle cx="332.729" cy="240.569" r="21.015"></circle>{' '}
							</g>{' '}
						</g>{' '}
					</g>
				</svg>
				<h1 className="p-4 text-xl">YAK</h1>
			</Link>

			{title !== '' && <h2 className="flex items-center text-center text-xl font-bold">{title}</h2>}

			<div className="flex">
				<button className="w-14 px-4" onClick={themeSwitcher}>
					{theme === 'light' ? (
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								{' '}
								<path
									d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
									fill="#000000"
								></path>{' '}
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
									fill="#000000"
								></path>{' '}
							</g>
						</svg>
					) : (
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								{' '}
								<path
									d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
									fill="#000000"
								></path>{' '}
							</g>
						</svg>
					)}
				</button>
				<button
					className="w-14 px-4"
					onClick={() => (menuModalRef.current as unknown as HTMLDialogElement).showModal()}
				>
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
						<g id="SVGRepo_iconCarrier">
							{' '}
							<path
								d="M4 6H20M4 12H20M4 18H20"
								stroke="#000000"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>{' '}
						</g>
					</svg>
				</button>
			</div>

			<dialog className="h-screen max-h-none w-1/3 translate-x-[100%]" ref={menuModalRef}>
				<div className="flex justify-end">
					<button
						className="w-14 p-3"
						onClick={() => (menuModalRef.current as unknown as HTMLDialogElement).close()}
					>
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								{' '}
								<rect width="24" height="24" fill="white"></rect>{' '}
								<path
									d="M7 17L16.8995 7.10051"
									stroke="#000000"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>{' '}
								<path
									d="M7 7.00001L16.8995 16.8995"
									stroke="#000000"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>{' '}
							</g>
						</svg>
					</button>
				</div>
				<nav>
					<ul className="flex flex-col gap-2">
						{projects.map((project) => {
							return (
								<li key={project} className="flex">
									<Link
										className="flex-1 border-b border-black px-4 text-lg"
										to={`/${project.replace(/\s/g, '-')}`}
									>
										{project}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
				<button
					className="fixed bottom-0 w-full bg-slate-100 py-2 hover:bg-slate-200"
					onClick={() => (newProjectModalRef.current as unknown as HTMLDialogElement).showModal()}
				>
					Add New Project
				</button>
			</dialog>

			<dialog ref={newProjectModalRef}>
				<h2>Create New Project</h2>
				<label htmlFor="newProjectInput">
					Project Title:
					<input type="text" id="newProjectInput" name="newProjectInput" />
				</label>
				<div className="grid grid-cols-2">
					<button
						onClick={() => (newProjectModalRef.current as unknown as HTMLDialogElement).close()}
					>
						Cancel
					</button>
					<button onClick={addNewProjectClickHandler}>Submit</button>
				</div>
			</dialog>
		</header>
	);
};

export default Header;
