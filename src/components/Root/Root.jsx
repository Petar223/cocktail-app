import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Loading from '../../shared-components/Loading/Loading';
import PrivateRoute from './PrivateRoute';
import LoginForm from '../LoginForm/LoginForm';

export const DrinkList = React.lazy(() => import('../DrinkList/DrinkList'));

export const CocktailList = React.lazy(
  () => import('../CoctailList/CocktailList')
);

export const Home = React.lazy(() => import('../Home/Home'));

export const TypeSelection = React.lazy(
  () => import('../TypeSelection/TypeSelection')
);

function Root() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/type/:type"
              element={
                <PrivateRoute>
                  <DrinkList />
                </PrivateRoute>
              }
            />
            <Route
              path="/type/:type/drink/:drinkId"
              element={
                <PrivateRoute>
                  <CocktailList />
                </PrivateRoute>
              }
            />
            <Route
              path="/type/all"
              element={
                <PrivateRoute>
                  <CocktailList />
                </PrivateRoute>
              }
            />
            <Route
              path="/browse"
              element={
                <PrivateRoute>
                  <TypeSelection />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default Root;
