import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TypeSelection from "../TypeSelection/TypeSelection";
import DrinkList from "../DrinkList/DrinkList";
import CocktailList from "../CoctailList/CocktailList";
import Layout from "../Layout/Layout";

function Root() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<TypeSelection />} />
          <Route path="/type/:type" element={<DrinkList />} />
          <Route path="/type/:type/drink/:drinkId" element={<CocktailList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default Root;
