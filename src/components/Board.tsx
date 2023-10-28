import { useEffect, useRef, useState } from 'react';
import Card from './Card';
import Column from './Column';

const Board = () => {
	const [cards, setCards] = useState(() => {
		const localCards = window.localStorage.getItem('cards');

		return localCards !== null ? JSON.parse(localCards) : [];
	});
	const newCardModalRef = useRef(null);

	useEffect(() => {
		window.localStorage.setItem('cards', JSON.stringify(cards));
	}, [cards]);

  useEffect(() => {
    const detectCtrlEnter = (ev:KeyboardEvent) => {
      if (ev.ctrlKey && ev.key === 'Enter') {
		    (newCardModalRef.current as unknown as HTMLDialogElement).showModal();
      }
    }

    window.addEventListener('keydown', detectCtrlEnter);

    return () => {
      window.removeEventListener('keydown', detectCtrlEnter);
    }
  }, [])

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

	const createNewCardClickHandler = () => {
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

	const createNewCardKeyHandler: React.KeyboardEventHandler<HTMLInputElement> = (ev) => {
    const input = (newCardModalRef.current as unknown as HTMLDialogElement).querySelector('input');
    if (ev.key === 'Enter' && (input !== null && input.value !== '') ) {
      (newCardModalRef.current as unknown as HTMLDialogElement).close();

      const newCards = [...cards];
      const newCard = {
        id: crypto.randomUUID(),
        text: (newCardModalRef.current as unknown as HTMLDialogElement).querySelector('input')?.value,
        status: 'todo'
      };
      newCards.push(newCard);
      setCards(newCards);
  
      if (input !== null) {
        input.value = '';
      }
    }
  };

	return (
		<div className="flex flex-1 gap-4 bg-slate-800 p-4">
			<Column
				title="Todo"
				status="todo"
				cards={cards}
				progressStatus={progressStatus}
				regressStatus={regressStatus}
			/>

			<Column
				title="In Progress"
				status="inProgress"
				cards={cards}
				progressStatus={progressStatus}
				regressStatus={regressStatus}
			/>

			<Column
				title="Completed"
				status="completed"
				cards={cards}
				progressStatus={progressStatus}
				regressStatus={regressStatus}
			/>

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
						<input
							id="cardTextInput"
							name="cardTextInput"
							type="text"
							onKeyUp={createNewCardKeyHandler}
						/>
					</label>
					<div className="grid grid-cols-2">
						<button onClick={cancelNewCardModal}>Cancel</button>
						<button onClick={createNewCardClickHandler}>Submit</button>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default Board;
