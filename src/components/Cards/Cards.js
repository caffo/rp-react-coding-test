import React from 'react';

import Card from '../Card';
import './Cards.css';

const Cards = ({ values }) => {
  if (!values) return null;
  //TODO: current card positioning neeeds to be fixed (current only supports 2 cards, more will cover the user nameplate)
  return (
    <div className="Cards">
      { values.map((value, i) => <Card value={value} key={i} />) }
    </div>
  );
}

export default Cards;
