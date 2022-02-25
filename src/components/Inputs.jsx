import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import '../styles/Inputs.css';

function Inputs() {
  const {
    inputText, handleInputTextName, handleFilterNumericValues,
    filterByNumericValues,
  } = useContext(Context);

  const [columnFilter, setColumnFilter] = useState({
    column: 'population',
    comparison: '',
    value: '0',
  });
  const optionInputs = [
    'population', 'orbital_period', 'rotation_period', 'diameter', 'surface_water',
  ];

  const filterOptions = (option) => (
    !filterByNumericValues
      .some(({ column }) => column === option)
  );

  const handleChange = ({ target: { id, value } }) => {
    setColumnFilter({ ...columnFilter, [id]: value });
  };

  const submitInputsNumericValues = () => {
    handleFilterNumericValues(columnFilter);
    setColumnFilter({ ...columnFilter, value: 0 });
  };

  return (
    <nav className="nav-inputs">
      <label htmlFor="inputText" className="label__nav">
        Nome do Planeta
        <input
          className="form-control  placeholder__inputs"
          placeholder="Digite o nome do planeta"
          id="inputText"
          data-testid="name-filter"
          type="text"
          onChange={ handleInputTextName }
          value={ inputText }
        />
      </label>
      <label htmlFor="column" className="label__nav">
        Busca por categoria
        <select
          className="form-select placeholder__inputs"
          id="column"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          {optionInputs
            .filter(filterOptions)
            .map((option) => (
              <option key={ option }>{option}</option>
            ))}
        </select>
      </label>
      <label htmlFor="comparison" className="label__nav">
        Comparação
        <select
          className="form-select placeholder__inputs"
          id="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value" className="label__nav">
        Quantidade
        <input
          className="form-control placeholder__inputs"
          id="value"
          data-testid="value-filter"
          type="number"
          onChange={ handleChange }
          value={ columnFilter.value }
        />
      </label>
      <button
        className="btn btn-dark"
        type="button"
        onClick={ submitInputsNumericValues }
        data-testid="button-filter"
      >
        filtrar
      </button>
    </nav>
  );
}

export default Inputs;
