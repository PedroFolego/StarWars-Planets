import React, { useContext } from 'react';
import Context from '../context/Context';
import Planet from './Planet';
import '../styles/Table.css';

function Table() {
  const { planets, inputText, filterByNumericValues } = useContext(Context);

  const filterByNumeric = (planet) => filterByNumericValues.every((filter) => {
    const { comparison, column, value } = filter;

    if (comparison === 'maior que') return Number(planet[column]) > Number(value);
    if (comparison === 'menor que') return Number(planet[column]) < Number(value);
    return Number(planet[column]) === Number(value);
  });

  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th>Nome</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Orbital Period</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {planets
          .filter(filterByNumeric)
          .filter(({ name }) => name.includes(inputText))
          .map((planet) => <Planet key={ planet.name } planet={ planet } />)}
      </tbody>
    </table>
  );
}

export default Table;
