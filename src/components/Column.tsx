import { Project, Todo } from '../App';
import Card from './Card';

interface ColumnProps {
	title: 'Todo' | 'In Progress' | 'Completed';
	array: Todo[];
	progressStatus: (id: number) => void;
	regressStatus: (id: number) => void;
	deleteCard: (id: number) => void;
	completeCard: (id: number) => void;
}

const Column = ({
	title,
	array,
	progressStatus,
	regressStatus,
	deleteCard,
	completeCard
}: ColumnProps) => {
	return (
		<div className="flex-1 rounded-xl bg-slate-50 max-h-[calc(100vh-164px)] overflow-auto">
			<h2 className="z-10 sticky top-0 px-2 py-4 text-center text-2xl font-bold bg-white">{title}</h2>
			<div className="flex flex-col gap-2 px-2 pb-2">
				{array.map((card) => {
					return (
						<Card
							key={card.id}
              title={title}
							card={card}
							progressStatus={progressStatus}
							regressStatus={regressStatus}
							deleteCard={deleteCard}
							completeCard={completeCard}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Column;
