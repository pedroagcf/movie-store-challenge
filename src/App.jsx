import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import store from './store/store';

import { Provider } from 'react-redux';
import Header from './components/organisms/Header/Header';
import HomePage from './components/pages/HomePage/HomePage';
import MovieDetailPage from './components/pages/MovieDetailPage/MovieDetailPage';
import Footer from './components/organisms/Footer/Footer';
import SearchResultsPage from './components/pages/SearchResultsPage/SearchResultsPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='app-movie'>
          <Header />
          <main className='app-movie-main'>
            <section className='app-movie-main__page-container'>
              <Switch>
                <Route path='/movies/:movieId'>
                  <MovieDetailPage />
                </Route>
                <Route path='/movies'>
                  <SearchResultsPage />
                </Route>
                <Route path='/'>
                  <HomePage />
                </Route>
              </Switch>
            </section>
            <Footer />
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
