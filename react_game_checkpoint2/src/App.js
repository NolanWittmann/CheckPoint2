import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameDetails from "./components/GameDetails";
import GameList from "./components/GameList";
import Header from "./components/Header";


function App() {

  const name = "REACT-GAMES_CHECKPOINT-2"

  return (
    <div className="App">
      <BrowserRouter>
        <Header name={name} />
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:id" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
