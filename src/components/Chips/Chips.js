import React from 'react';
import NumberFormat from 'react-number-format';

import './Chips.css';

// TODO: Show actual chips rather than just text
const Chips = ({ amount }) => {
  if (!amount) return null;

  return (
    <div className="Chips">
      <NumberFormat value={amount} displayType={'text'} thousandSeparator={true} />
    </div>
  );
}

export default Chips;
