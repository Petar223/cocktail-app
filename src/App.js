import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TypeSelection from "./components/TypeSelection";
import DrinkList from "./components/DrinkList";
import CocktailList from "./components/CocktailList";
import { drinks, cocktails } from "./data/drinks";
import Header from "./components/Header";
import "./App.css";

function Layout({ children }) {
  return (
    <div>
      <Header/>
      <div className="content-container">
        {children}
      </div>
    </div>
  )
}


function Root() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<TypeSelection/>}/>
          <Route path="/type/:type" element={<DrinkList drinks={drinks}/>}/>
          <Route
            path="/type/:type/drink/:drinkId"
            element={<CocktailList cocktails={cocktails} drinks={drinks}/>}
          />
        </Routes>
      </Layout>
    </Router>
)
}

function App() {
  return (
    <Root/>

  );
}

export default App;
