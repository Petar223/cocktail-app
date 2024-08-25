import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from '../../shared-components/Loading/Loading';
import Layout from '../Layout/Layout';
import {
  Home,
  DrinkList,
  CocktailList,
  TypeSelection,
} from '../LazyComponents';

function Root() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/type/:type" element={<DrinkList />} />
            <Route
              path="/type/:type/drink/:drinkId"
              element={<CocktailList />}
            />
            <Route path="/type/all" element={<CocktailList />} />
            <Route path="/browse" element={<TypeSelection />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default Root;
