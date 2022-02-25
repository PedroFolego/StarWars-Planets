import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import getPlanets from '../api';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  const getPlanetsFromAPI = async () => {
    const planetsAPI = await getPlanets();
    setPlanets(planetsAPI);
  };

  useEffect(() => {
    getPlanetsFromAPI();
  }, []);

  const handleInputTextName = ({ target: { value } }) => setInputText(value);

  const handleFilterNumericValues = (obj) => {
    setfilterByNumericValues([...filterByNumericValues, obj]);
  };

  const removeFilter = (column) => (setfilterByNumericValues(
    filterByNumericValues.filter((filter) => filter.column !== column),
  ));

  const removeAllFilter = () => setfilterByNumericValues([]);

  return (
    <Context.Provider
      value={
        { planets,
          inputText,
          handleInputTextName,
          handleFilterNumericValues,
          filterByNumericValues,
          removeFilter,
          removeAllFilter }
      }
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element,
}.isRequired;
