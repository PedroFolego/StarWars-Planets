import React, { useContext } from 'react';
import Context from '../context/Context';
import '../styles/Filters.css';

function Filters() {
  const { filterByNumericValues, removeFilter, removeAllFilter } = useContext(Context);

  return (
    <nav className="filters">
      {filterByNumericValues.map((filter) => (
        <div data-testid="filter" key={ filter.column } className="filter">
          <p className="name-filter">{filter.column}</p>
          <button
            type="button"
            onClick={ () => removeFilter(filter.column) }
          >
            X
          </button>
        </div>
      ))}
      {filterByNumericValues.length > 1 && (
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ removeAllFilter }
        >
          Remover Filtragens
        </button>
      )}
    </nav>
  );
}

export default Filters;
