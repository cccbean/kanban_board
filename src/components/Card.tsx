import { Todo } from "../App";

interface CardProps {
	card: Todo;
	title: 'Todo' | 'In Progress' | 'Completed';
	progressStatus: (id: number) => void;
	regressStatus: (id: number) => void;
	deleteCard: (id: number) => void;
	completeCard: (id: number) => void;
}

const Card = ({ card, title, progressStatus, regressStatus, deleteCard, completeCard }: CardProps) => {
	return (
		<p className="relative rounded-xl bg-orange-100 p-2 dark:bg-red-100">
			{card.text}
			
			{!card.completed && (
				<span>
					{title === 'Todo' ? (
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
					{title === 'Completed' ? (
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
				</span>
			)}
		</p>
	);
};

export default Card;
