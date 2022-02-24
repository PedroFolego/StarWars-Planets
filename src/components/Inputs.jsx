import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function Inputs() {
  const {
    inputText, handleInputTextName, handleFilterNumericValues,
  } = useContext(Context);

  const [columnFilter, setColumnFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleChange = ({ target: { id, value } }) => {
    setColumnFilter({ ...columnFilter, [id]: value });
  };

  const submitInputsNumericValues = () => {
    handleFilterNumericValues(columnFilter);
    setColumnFilter({ ...columnFilter, value: 0 });
  };

  return (
    <div>
      {console.log(columnFilter)}
      <label htmlFor="inputText">
        {console.log(inputText)}
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
          onChange={ handleChange }
        >
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="diameter">Diameter</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
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
      >
        filtrar
      </button>
    </div>
  );
}

export default Inputs;
