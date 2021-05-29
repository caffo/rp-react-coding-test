import React from 'react';
import cx from 'classnames';
import { tableShape } from '../../types';

import Seats from '../Seats';
import Cards from '../Cards';
import Pots from '../Pots';

import './Table.css';

const Table = ({ table }) => (
  <div className={cx('Table', `Table-${table.game}`)}>
    <div>
      <Seats seats={table.seats} />
      { table.currentHand && <Cards values={table.currentHand.communityCards} /> }
      { table.currentHand && <Pots pots={table.currentHand.pots} /> }
    </div>
  </div>
);

Table.propTypes = {
  table: tableShape.isRequired,
};

export default Table;
