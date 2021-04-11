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
