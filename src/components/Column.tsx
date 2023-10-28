import Card from './Card';

interface ColumnProps {
	title: string;
	status: string;
	cards: any;
	progressStatus: (id: number) => void;
	regressStatus: (id: number) => void;
}

const Column = ({ title, status, cards, progressStatus, regressStatus }: ColumnProps) => {
	return (
		<div className="flex-1 rounded-xl bg-slate-50">
			<h2 className="px-2 py-4 text-center text-2xl font-bold">{title}</h2>
			<div className="flex flex-col gap-2 px-2">
				{cards.map((card: { id: number; text: string; status: string }) => {
					if (card.status === status) {
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
	);
};

export default Column;
