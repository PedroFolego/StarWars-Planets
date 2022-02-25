import React, { useContext } from 'react';
import Context from '../context/Context';
import Planet from './Planet';

function Table() {
  const { planets, inputText, filterByNumericValues } = useContext(Context);

  const filterByNumeric = (planet) => {
    const arrBool = filterByNumericValues.map((filter) => {
      const { comparison, column, value } = filter;

      if (comparison === 'maior que') return Number(planet[column]) > Number(value);
      if (comparison === 'menor que') return Number(planet[column]) < Number(value);
      if (comparison === 'igual a') return Number(planet[column]) === Number(value);
      return true;
    });
    return arrBool.every((bool) => bool);
  };

  return (
    <table>
      <thead>
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
      <tbody>
        {planets
          .filter(filterByNumeric)
          .filter(({ name }) => name.includes(inputText))
          .map((planet) => <Planet key={ planet.name } planet={ planet } />)}
      </tbody>
    </table>
  );
}

export default Table;
