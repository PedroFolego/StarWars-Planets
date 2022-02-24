import React, { useContext } from 'react';
import Context from '../context/Context';
import Planet from './Planet';

function Table() {
  const { planets, inputText } = useContext(Context);
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
          .filter(({ name }) => name.includes(inputText))
          .map((planet) => <Planet key={ planet.name } planet={ planet } />)}
      </tbody>
    </table>
  );
}

export default Table;
