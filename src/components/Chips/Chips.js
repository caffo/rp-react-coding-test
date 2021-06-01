import React from 'react';

import './Chips.css';
import { numberFormatter } from '../../utils/numberFormatter';

// TODO: Show actual chips rather than just text
const Chips = ({ amount }) => {
  if (!amount) return null;

  return (
    <div className="Chips">
      {numberFormatter.format(amount)}
    </div>
  );
}

export default Chips;
