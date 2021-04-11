import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../store';

const Image: React.FC<any> = (props) => {
  const { pokemon: { pokemon } } = useSelector((state: RootStore) => state);

  return (
    <div className="col image">
      <img src={ pokemon?.sprites.front_default } alt="pokemon"/>
      <div className="bottom-text">{ pokemon?.name }</div>
    </div>
  );
}

export default Image;
