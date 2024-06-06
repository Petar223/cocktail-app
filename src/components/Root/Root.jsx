import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrinkList from '../DrinkList/DrinkList';
import CocktailList from '../CoctailList/CocktailList';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import TypeSelection from '../TypeSelection/TypeSelection';
import React from 'react';

function Root() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/type/:type" element={<DrinkList />} />
          <Route path="/type/:type/drink/:drinkId" element={<CocktailList />} />
          <Route path="/browse" element={<TypeSelection />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default Root;
