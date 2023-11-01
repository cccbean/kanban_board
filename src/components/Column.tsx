import { Todo } from '../App';
import Card from './Card';
import { KanbanColorTheme } from './Kanban';

interface ColumnProps {
	title: 'Todo' | 'In Progress' | 'Completed';
	colors: KanbanColorTheme;
	array: Todo[];
	progressStatus: (id: string) => void;
	regressStatus: (id: string) => void;
	deleteCard: (id: string) => void;
	completeCard: (id: string) => void;
}

const Column = ({
	title,
	colors,
	array,
	progressStatus,
	regressStatus,
	deleteCard,
	completeCard
}: ColumnProps) => {
	return (
		<div
			className="max-h-[calc(100vh-164px)] flex-1 overflow-auto rounded-xl"
			style={{ backgroundColor: `${colors.colBg}` }}
		>
			<h2
				className="sticky top-0 z-10 bg-inherit px-2 py-4 text-center text-2xl font-bold dark:bg-inherit"
				style={{ color: `${colors.colTitle}` }}
			>
				{title}
			</h2>
			<div className="flex flex-col gap-2 px-2 pb-2">
				{array.map((card, index) => {
					if (index % 2 === 0) {
						return (
							<Card
								key={card.id}
								title={title}
								card={card}
								uniqueStyle={{color: `${colors.oddCardText}`, backgroundColor: `${colors.oddCardBg}`}}
								progressStatus={progressStatus}
								regressStatus={regressStatus}
								deleteCard={deleteCard}
								completeCard={completeCard}
							/>
						);
					} else {
						return (
							<Card
								key={card.id}
								title={title}
								card={card}
								uniqueStyle={{color: `${colors.evenCardText}`, backgroundColor: `${colors.evenCardBg}`}}
								progressStatus={progressStatus}
								regressStatus={regressStatus}
								deleteCard={deleteCard}
								completeCard={completeCard}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Column;
