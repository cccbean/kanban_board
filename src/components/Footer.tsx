interface FooterProps {
	clear: () => void;
  openNewCardModal: () => void;
}

const Footer = ({ clear, openNewCardModal }: FooterProps) => {
	return (
		<footer className="flex w-full items-center justify-between p-4">
			<button className="rounded-full bg-slate-50 px-4 py-2" onClick={clear}>
				Clear
			</button>
			<p>Footer</p>
			<button
				className="rounded-full bg-slate-50 px-4 py-2"
				onClick={openNewCardModal}
			>
				New
			</button>
		</footer>
	);
};

export default Footer;
