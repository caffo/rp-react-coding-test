import React from 'react';
import cx from 'classnames';

import { seatProps } from '../../types';
import { numberFormatter } from '../../utils/numberFormatter';
import Cards from '../Cards';
import Chips from '../Chips';
import './Seat.css';

const Seat = ({ id, state, username, chips, cards, bet, fold, allIn }) => (
  <div className={cx('Seat', `Seat-${id}`)}>
    {
      username ? (
        <div className="nameplate">
          <div className="username">{username}</div>
          <div className="chips">{allIn ? 'All-In' : numberFormatter.format(chips)}</div>
        </div>
      ) : (
        <div className="nameplate available">
          Seat Available
        </div>
      )
    }
    <Chips amount={bet} />
    { !fold && <Cards values={cards} /> }
  </div>
);

Seat.propTypes = seatProps.isRequired;

export default Seat;
