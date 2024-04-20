import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TypeSelection from "./components/TypeSelection";
import DrinkList from "./components/DrinkList";
import CocktailList from "./components/CocktailList";
import { drinks, cocktails } from "./data/drinks";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <Router>
          <Routes>
            <Route path="/" element={<TypeSelection />} />
            <Route path="/type/:type" element={<DrinkList drinks={drinks} />} />
            <Route
              path="/type/:type/drink/:drinkId"
              element={<CocktailList cocktails={cocktails} drinks={drinks} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
