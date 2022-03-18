import GameList from "./components/GameList";
import Header from "./components/Header";


function App() {

  const name = "REACT-GAMES_CHECKPOINT-2"

  return (
    <div className="App">
      <Header name={name} />
      <GameList />
    </div>
  );
}

export default App;
