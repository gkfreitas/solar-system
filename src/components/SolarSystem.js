import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { Planets.map(({ name, image }) => {
          const e = <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
          return e;
        })}
      </div>
    );
  }
}

export default SolarSystem;
