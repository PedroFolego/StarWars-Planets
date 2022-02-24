import React from 'react';
import PropTypes from 'prop-types';

function Planet({ planet }) {
  const {
    climate, created, diameter, edited, films,
    gravity, name, orbital_period: orbitalPeriod,
    population, rotation_period: rotationPeriod,
    surface_water: surfaceWater, terrain, url,
  } = planet;
  return (
    <tr>
      <td>{name}</td>
      <td>{climate}</td>
      <td>{created}</td>
      <td>{diameter}</td>
      <td>{edited}</td>
      <td>{films.toString()}</td>
      <td>{gravity}</td>
      <td>{orbitalPeriod}</td>
      <td>{population}</td>
      <td>{rotationPeriod}</td>
      <td>{surfaceWater}</td>
      <td>{terrain}</td>
      <td>{url}</td>
    </tr>
  );
}

export default Planet;

Planet.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    climate: PropTypes.string,
    created: PropTypes.string,
    diameter: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    gravity: PropTypes.string,
    orbitalPeriod: PropTypes.string,
    population: PropTypes.string,
    rotationPeriod: PropTypes.string,
    surfaceWater: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,
  }),
}.isRequired;
