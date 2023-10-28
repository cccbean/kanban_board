import { useRef } from 'react';

const Header = () => {
	const menuModalRef = useRef(null);

	const menuModalClickHandler: React.MouseEventHandler<HTMLButtonElement> = (ev) => {
		if ((ev.target as HTMLButtonElement).dataset.state === 'closed') {
			(menuModalRef.current as unknown as HTMLDialogElement).show();
			(ev.target as HTMLButtonElement).dataset.state = 'open';
		} else {
			(menuModalRef.current as unknown as HTMLDialogElement).close();
			(ev.target as HTMLButtonElement).dataset.state = 'closed';
		}
	};

	return (
		<header className="flex justify-between">
			<h1 className="p-4 text-xl">YAK</h1>
			<button
				className="group flex w-14 flex-col justify-center gap-1 p-4"
				onClick={menuModalClickHandler}
				data-state="closed"
			>
				<div className="h-[2px] w-full bg-black group-data-[state=closed]:translate-y-0 group-data-[state=open]:translate-y-[4px] group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-45 transition-all"></div>
				<div className="h-[2px] w-full bg-black group-data-[state=open]:hidden"></div>
				<div className="roup-data-[state=closed]:translate-y-0 h-[2px] w-full bg-black group-data-[state=open]:translate-y-[-2px] group-data-[state=open]:rotate-[-45deg] group-data-[state=closed]:rotate-0 transition-all"></div>
			</button>
			<dialog
				className="z-10 h-[calc(100vh-60px)] w-2/5 translate-x-[75%] translate-y-[6.6%] bg-white"
				ref={menuModalRef}
			>
        <button>Test</button>
			</dialog>
		</header>
	);
};

export default Header;
