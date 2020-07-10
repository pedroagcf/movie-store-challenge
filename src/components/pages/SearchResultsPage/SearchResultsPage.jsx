import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './SearchResultsPage.scss';
import Loader from '../../atoms/Loader/Loader';
import MovieList from '../../organisms/MovieList/MovieList';
import fetchSearchTerm from '../../../actions/searchResultsAction';
import { useLocation } from 'react-router-dom';

function useQuery() {
  const search = new URLSearchParams(useLocation().search);
  return search.get('query');
}

const SearchResultsPage = ({ searchResultsData, fetchSearchTerm }) => {
  const { loading, data, error } = searchResultsData;
  const search = useQuery();

  useEffect(() => {
    if (
      (!data && !loading && !error) ||
      search !== sessionStorage.getItem('search')
    ) {
      fetchSearchTerm(search);
      sessionStorage.setItem('search', search);
    }
  }, [data, loading, error, fetchSearchTerm, search]);

  return loading ? (
    <section className='search-results-page'>
      <h1 className='search-results-page__title'>resultados da busca</h1>
      <Loader />
    </section>
  ) : !data ? (
    <section className='search-results-page'>
      <p className='search-results-page__text'>filme nao encontrado! </p>
    </section>
  ) : data && data ? (
    <section className='search-results-page'>
      <MovieList movies={data?.results} />
    </section>
  ) : (
    <p className='search-results-page__text--error'>erro!</p>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchSearchTerm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
