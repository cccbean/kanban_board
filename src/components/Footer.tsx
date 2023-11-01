import { useRef } from 'react';
import { KanbanColorTheme } from './Kanban';

interface FooterProps {
	clear: () => void;
	openNewCardModal: () => void;
	colors: KanbanColorTheme;
	setColors: React.Dispatch<React.SetStateAction<KanbanColorTheme>>;
}

const Footer = ({ clear, openNewCardModal, colors, setColors }: FooterProps) => {
	const colorModalRef = useRef<HTMLDialogElement>(null);

	return (
		<footer className="flex w-full items-center justify-between p-4 shadow-[0_-1px_2px_0_rgb(0,0,0,0.05)] shadow-white dark:bg-zinc-800 dark:text-zinc-300 dark:shadow-zinc-800">
			<button className="rounded-full px-4 py-2" onClick={clear}>
				Clear
			</button>
			<button onClick={() => colorModalRef.current?.showModal()}>Color</button>
			<button className="rounded-full px-4 py-2" onClick={openNewCardModal}>
				New
			</button>

			<dialog ref={colorModalRef}>
				<h2>Color Theme</h2>
				<div className='flex flex-col'>
					<label htmlFor="bgInput">
						Background:
						<input
							type="text"
							id="bgInput"
							name="bgInput"
							className="border border-black"
							value={colors.bg.replace('#', '')}
							onChange={(ev) => {
								const newColors = { ...colors };
								newColors.bg = `#${ev.target.value}`;
								setColors(newColors);
							}}
						/>
					</label>
					<label htmlFor="colBgInput">
						Column Background:
						<input
							type="text"
							id="ColBgInput"
							name="ColBgInput"
							className="border border-black"
							value={colors.colBg.replace('#', '')}
							onChange={(ev) => {
								const newColors = { ...colors };
								newColors.colBg = `#${ev.target.value}`;
								setColors(newColors);
							}}
						/>
					</label>
					<label htmlFor="colTextInput">
						Column Text:
						<input
							type="text"
							id="colTextInput"
							name="colTextInput"
							className="border border-black"
							value={colors.colTitle.replace('#', '')}
							onChange={(ev) => {
								const newColors = { ...colors };
								newColors.colTitle = `#${ev.target.value}`;
								setColors(newColors);
							}}
						/>
					</label>
					<label htmlFor="oddCardBg">
						Odd Card Background:
						<input
							type="text"
							id="oddCardBg"
							name="oddCardBg"
							className="border border-black"
							value={colors.oddCardBg.replace('#', '')}
							onChange={(ev) => {
								const newColors = { ...colors };
								newColors.oddCardBg = `#${ev.target.value}`;
								setColors(newColors);
							}}
						/>
					</label>
					<label htmlFor="oddCardText">
						Odd Card Text:
						<input
							type="text"
							id="oddCardText"
							name="oddCardText"
							className="border border-black"
							value={colors.oddCardText.replace('#', '')}
							onChange={(ev) => {
								const newColors = { ...colors };
								newColors.oddCardText = `#${ev.target.value}`;
								setColors(newColors);
							}}
						/>
					</label>
					<label htmlFor="evenCardBg">
						Even Card Background:
						<input
							type="text"
							id="evenCardBg"
							name="evenCardBg"
							className="border border-black"
							value={colors.evenCardBg.replace('#', '')}
							onChange={(ev) => {
								const newColors = { ...colors };
								newColors.evenCardBg = `#${ev.target.value}`;
								setColors(newColors);
							}}
						/>
					</label>
					<label htmlFor="evenCardText">
						Even Card Text:
						<input
							type="text"
							id="evenCardText"
							name="evenCardText"
							className="border border-black"
							value={colors.evenCardText.replace('#', '')}
							onChange={(ev) => {
								const newColors = { ...colors };
								newColors.evenCardText = `#${ev.target.value}`;
								setColors(newColors);
							}}
						/>
					</label>
				</div>
				<button onClick={() => colorModalRef.current?.close()}>Cancel</button>
			</dialog>
		</footer>
	);
};

export default Footer;
