import { useEffect, useRef, useState } from 'react';
import Card from './Card';

const Board = () => {
	const [cards, setCards] = useState(() => {
		const localCards = window.localStorage.getItem('cards');

		return localCards !== null ? JSON.parse(localCards) : [];
	});
	const newCardModalRef = useRef(null);

	useEffect(() => {
		window.localStorage.setItem('cards', JSON.stringify(cards));
	}, [cards]);

	const progressStatus = (id: number) => {
		const newCards = [...cards];
		newCards.forEach((card) => {
			if (card.id === id) {
				if (card.status === 'todo') {
					card.status = 'inProgress';
				} else if (card.status === 'inProgress') {
					card.status = 'completed';
				}
			}
		});
		setCards(newCards);
	};

	const regressStatus = (id: number) => {
		const newCards = [...cards];
		newCards.forEach((card) => {
			if (card.id === id) {
				if (card.status === 'inProgress') {
					card.status = 'todo';
				} else if (card.status === 'completed') {
					card.status = 'inProgress';
				}
			}
		});
		setCards(newCards);
	};

	const clear = () => {
		setCards([]);
	};

	const openNewCardModal = () => {
		(newCardModalRef.current as unknown as HTMLDialogElement).showModal();
	};

	const cancelNewCardModal = () => {
		(newCardModalRef.current as unknown as HTMLDialogElement).close();
	};

	const createNewCard = () => {
		(newCardModalRef.current as unknown as HTMLDialogElement).close();

		const newCards = [...cards];
		const newCard = {
			id: crypto.randomUUID(),
			text: (newCardModalRef.current as unknown as HTMLDialogElement).querySelector('input')?.value,
			status: 'todo'
		};
		newCards.push(newCard);
		setCards(newCards);

    const input = (newCardModalRef.current as unknown as HTMLDialogElement).querySelector('input'); 
    if (input !== null) {
      input.value = '';
    }
	};

	return (
		<div className="flex h-screen gap-4 bg-slate-800 p-4">
			<div className="flex-1 rounded-xl bg-slate-500">
				<h2 className="px-2 py-4 text-center text-2xl font-bold">Todo</h2>
				<div className="flex flex-col gap-2 px-2">
					{cards.map((card: any) => {
						if (card.status === 'todo') {
							return (
								<Card
									key={card.id}
									card={card}
									progressStatus={progressStatus}
									regressStatus={regressStatus}
								/>
							);
						}
					})}
				</div>
			</div>

			<div className="flex flex-1 flex-col rounded-xl bg-slate-500">
				<h2 className="px-2 py-4 text-center text-2xl font-bold">In Progress</h2>
				<div className="flex flex-1 flex-col gap-2 px-2">
					{cards.map((card: any) => {
						if (card.status === 'inProgress') {
							return (
								<Card
									key={card.id}
									card={card}
									progressStatus={progressStatus}
									regressStatus={regressStatus}
								/>
							);
						}
					})}
				</div>
			</div>

			<div className="flex-1 rounded-xl bg-slate-500">
				<h2 className="px-2 py-4 text-center text-2xl font-bold">Completed</h2>
				<div className="flex flex-1 flex-col gap-2 px-2">
					{cards.map((card: any) => {
						if (card.status === 'completed') {
							return (
								<Card
									key={card.id}
									card={card}
									progressStatus={progressStatus}
									regressStatus={regressStatus}
								/>
							);
						}
					})}
				</div>
			</div>

			<button className="fixed bottom-4 rounded-full bg-slate-50 px-4 py-2" onClick={clear}>
				Clear
			</button>

			<button
				className="fixed bottom-4 right-4 rounded-full bg-slate-50 px-4 py-2"
				onClick={openNewCardModal}
			>
				New
			</button>

			<dialog
				className="rounded-xl bg-slate-500 backdrop:bg-slate-800 backdrop:opacity-70"
				ref={newCardModalRef}
			>
				<div className="flex flex-col gap-4  p-8">
					<h2>New Card</h2>
					<label htmlFor="cardTextInput">
						<p>Card Text:</p>
						<input id="cardTextInput" name="cardTextInput" type="text" />
					</label>
					<div className="grid grid-cols-2">
						<button onClick={cancelNewCardModal}>Cancel</button>
						<button onClick={createNewCard}>Submit</button>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default Board;
