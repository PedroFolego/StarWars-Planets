import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function Inputs() {
  const {
    inputText, handleInputTextName, handleFilterNumericValues,
    filterByNumericValues,
  } = useContext(Context);

  const [columnFilter, setColumnFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [optionInputs] = useState([
    <option key="population">population</option>,
    <option key="orbital_period">orbital_period</option>,
    <option key="rotation_period">rotation_period</option>,
    <option key="diameter">diameter</option>,
    <option key="surface_water">surface_water</option>,
  ]);

  const filterOptions = (option) => (
    !filterByNumericValues
      .some(({ column }) => column === option.key)
  );

  const handleChange = ({ target: { id, value } }) => {
    setColumnFilter({ ...columnFilter, [id]: value });
  };

  const submitInputsNumericValues = () => {
    handleFilterNumericValues(columnFilter);
    setColumnFilter({ ...columnFilter, value: 0 });
  };

  return (
    <div>
      {console.log(filterByNumericValues)}
      <label htmlFor="inputText">
        <input
          id="inputText"
          data-testid="name-filter"
          type="text"
          onChange={ handleInputTextName }
          value={ inputText }
        />
      </label>
      <label htmlFor="column">
        <select
          id="column"
          data-testid="column-filter"
          onClick={ handleChange }
        >
          {optionInputs
            .filter(filterOptions)
            .map((option) => option)}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          data-testid="comparison-filter"
          onClick={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          id="value"
          data-testid="value-filter"
          type="number"
          onChange={ handleChange }
          value={ columnFilter.value }
        />
      </label>
      <button
        type="button"
        onClick={ submitInputsNumericValues }
        data-testid="button-filter"
      >
        filtrar
      </button>
    </div>
  );
}

export default Inputs;
