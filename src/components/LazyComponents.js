import React from 'react';

export const DrinkList = React.lazy(() => import('./DrinkList/DrinkList'));
export const CocktailList = React.lazy(
  () => import('./CoctailList/CocktailList')
);
export const Home = React.lazy(() => import('./Home/Home'));
export const TypeSelection = React.lazy(
  () => import('./TypeSelection/TypeSelection')
);
