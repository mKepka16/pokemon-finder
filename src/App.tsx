import React from 'react';
import { useSelector } from 'react-redux';
import Search from './components/Search';
import Image from './components/Image';
import Abilities from './components/Abilities';
import { RootStore } from './store';
import './App.css';
import Stats from './components/Stats';

const App: React.FC<any> = (props) => {
  const { pokemon: { pokemon } } = useSelector((state: RootStore) => state);

  const getSuitableColor = (value: number): string => {
    const medium = '#e9c46a';
    const low = '#dc2f02';
    const high = '#2a9d8f';
    if(value < 34)
      return low;
    if(value > 66)
      return high;
    return medium;
  }
  

  return (
    <div className="main">
      <Search/>
      { pokemon && (
        <div className="pokemon-info">
          <Image/>
          <Abilities/>
          <Stats/>
        </div>
      )}
    </div>
  );
}

export default App;
