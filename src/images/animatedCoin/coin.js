import React from 'react';
import './coin.css';

const Coin = () => {
  return (
    <div className="coin">
      <div className="side front">
        <span>$</span>
      </div>
      <div className="side back">
        <span>€</span>
      </div>
    </div>
  );
};

export default Coin;
