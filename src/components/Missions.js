import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map(({ name, year, country, destination }) => {
          const e = (
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          );
          return e;
        })}
      </div>
    );
  }
}

export default Missions;
