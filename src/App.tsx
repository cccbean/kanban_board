import Board from "./components/Board";
import Header from "./components/Header";

const App = () => {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<Board />
		</div>
	)
}

export default App;
