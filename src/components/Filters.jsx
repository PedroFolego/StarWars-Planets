import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filterByNumericValues, removeFilter, removeAllFilter } = useContext(Context);

  return (
    <nav>
      {filterByNumericValues.map((filter) => (
        <div data-testid="filter" key={ filter.column }>
          <h4>{filter.column}</h4>
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
