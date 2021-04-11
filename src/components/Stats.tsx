import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../store';

const Stats: React.FC<any> = (props) => {
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
    <div className="col stats">
      { pokemon?.stats.map((stat, key) => {
        let percentageStat = stat.base_stat;
        if(percentageStat > 100) 
          percentageStat = 100; 

        return (
          <div key={ key }>
            <div className='stat'>
              <div className="text">{ stat.stat.name }</div>
              <div className="bg" style={{ 
                  width: percentageStat+'%',
                  background: getSuitableColor(percentageStat)
                }}></div>
            </div>
          </div>
        )
      }) }
      <div className="bottom-text">Base stats</div>
    </div>
  );
}

export default Stats;