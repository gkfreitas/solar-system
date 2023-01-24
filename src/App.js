import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Planets from './data/planets';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Title />
        { Planets.map(({ name, image }) => {
          const e = <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
          return e;
        })}
      </>
    );
  }
}

export default App;
