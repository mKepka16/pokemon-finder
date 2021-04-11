import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../store';

const Abilities: React.FC<any> = (props) => {
  const { pokemon: { pokemon } } = useSelector((state: RootStore) => state);

  return (
    <div className="col abilities">
      <div>
        { pokemon?.abilities.map((ability, key) => (
          <div key={ key }>
            <p className="name">{ ability.name }</p>
            <p className="effect">{ ability.effect }</p>
          </div>
        )) }
      </div>
      <div className="bottom-text">Abilities</div>
    </div>
  );
}

export default Abilities;
