interface CardProps {
	card: {
		id: number;
		text: string;
		status: 'todo' | 'inProgress' | 'completed' | 'done';
		complete: boolean;
	};
	progressStatus: (id: number) => void;
	regressStatus: (id: number) => void;
	deleteCard: (id: number) => void;
	completeCard: (id: number) => void;
}

const Card = ({ card, progressStatus, regressStatus, deleteCard, completeCard }: CardProps) => {
	return (
		<p className="relative rounded-xl bg-orange-100 p-2 dark:bg-red-100">
			{card.text}
			
			{!card.complete && (
				<div>
					{card.status === 'todo' ? (
						<button
							className="absolute left-0 top-0 h-full w-[50%] rounded-l-xl bg-orange-200 text-xl opacity-0 hover:opacity-90 focus:opacity-90 dark:bg-red-200"
							onClick={() => deleteCard(card.id)}
						>
							&times;
						</button>
					) : (
						<button
							className="absolute left-0 top-0 h-full w-[50%] rounded-l-xl bg-orange-200 opacity-0 hover:opacity-90 focus:opacity-90 dark:bg-red-200"
							onClick={() => regressStatus(card.id)}
						>
							{'<'}
						</button>
					)}
					{card.status === 'completed' ? (
						<button
							className="absolute right-0 top-0 h-full w-[50%] rounded-r-xl bg-orange-200 text-xl opacity-0 hover:opacity-90 focus:opacity-90 dark:bg-red-200"
							onClick={() => completeCard(card.id)}
						>
							&#10003;
						</button>
					) : (
						<button
							className="absolute right-0 top-0 h-full w-[50%] rounded-r-xl bg-orange-200 opacity-0 hover:opacity-90 focus:opacity-90 dark:bg-red-200"
							onClick={() => progressStatus(card.id)}
						>
							{'>'}
						</button>
					)}
				</div>
			)}
		</p>
	);
};

export default Card;
