import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FilmContextProvider from './contexts/FilmContext';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';

const Routes = () => {
  return (
    <FilmContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/detail/:id" component={DetailPage}/>
        </Switch>
      </BrowserRouter>
    </FilmContextProvider>
  );
};

export default Routes;