import React from 'react';

import './Chips.css';
import thousandsSeparator from '../../utils/formatting/thousandsSeparator';

// TODO: Show actual chips rather than just text
const Chips = ({ amount }) => {
  if (!amount) return null;
  return (
    <div className="Chips">
      {thousandsSeparator(amount)}
    </div>
  );
}

export default Chips;
