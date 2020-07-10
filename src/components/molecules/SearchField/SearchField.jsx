import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './SearchField.scss';
const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);

    setSearchTerm(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      history.push(`/movies/?query=${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <div className='search-field'>
      <input
        type='text'
        className='search-field__input'
        placeholder='buscar...'
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state });
export default connect(mapStateToProps)(SearchField);
