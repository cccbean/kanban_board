import { Todo } from '../App';

interface CardProps {
	card: Todo;
	title: 'Todo' | 'In Progress' | 'Completed';
	uniqueStyle: any;
	progressStatus: (id: string) => void;
	regressStatus: (id: string) => void;
	deleteCard: (id: string) => void;
	completeCard: (id: string) => void;
}

const Card = ({
	card,
	title,
	uniqueStyle,
	progressStatus,
	regressStatus,
	deleteCard,
	completeCard
}: CardProps) => {
	


	return (
		<p
			className={`relative rounded-xl p-2`}
			style={uniqueStyle}
		>
			{card.text}

			{!card.completed && (
				<span className="bg-inherit">
					{title === 'Todo' ? (
						<button
							className="absolute left-0 top-0 h-full w-[50%] rounded-l-xl bg-inherit text-xl opacity-0 hover:opacity-90 focus:opacity-90"
							onClick={() => deleteCard(card.id)}
						>
							&times;
						</button>
					) : (
						<button
							className="absolute left-0 top-0 h-full w-[50%] rounded-l-xl bg-inherit opacity-0 hover:opacity-90 focus:opacity-90"
							onClick={() => regressStatus(card.id)}
						>
							{'<'}
						</button>
					)}
					{title === 'Completed' ? (
						<button
							className="absolute right-0 top-0 h-full w-[50%] rounded-r-xl bg-inherit text-xl opacity-0 hover:opacity-90 focus:opacity-90"
							onClick={() => completeCard(card.id)}
						>
							&#10003;
						</button>
					) : (
						<button
							className="absolute right-0 top-0 h-full w-[50%] rounded-r-xl bg-inherit opacity-0 hover:opacity-90 focus:opacity-90"
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
