import PropTypes from 'prop-types';

// Cards are strings which should match /^[2-9TJQKA][hcds]$/
const cardType = PropTypes.string;

const playerShape = PropTypes.shape({
  seatId: PropTypes.number.isRequired,
  bet: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(cardType),
});

export const seatProps = {
  id: PropTypes.number.isRequired,
  state: PropTypes.oneOf(['available', 'occupied']).isRequired,
  username: PropTypes.string,
  chips: PropTypes.number,
  fold: PropTypes.bool,
};
export const seatShape = PropTypes.shape(seatProps);

const potShape = PropTypes.shape({
  chips: PropTypes.number.isRequired,
  seatIds: PropTypes.arrayOf(PropTypes.number).isRequired,
});

const handShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  communityCards: PropTypes.arrayOf(cardType).isRequired,
  players: PropTypes.arrayOf(playerShape).isRequired,
  pots: PropTypes.arrayOf(potShape).isRequired,
});

export const tableShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  state: PropTypes.oneOf(['open', 'closed']).isRequired,
  game: PropTypes.oneOf(['holdem', 'omaha', 'omaha_hilo', 'royal']).isRequired,
  blinds: PropTypes.shape({
    small: PropTypes.number.isRequired,
    big: PropTypes.number.isRequired,
  }).isRequired,
  seats: PropTypes.arrayOf(seatShape).isRequired,
  currentHand: handShape
});

export const appShape = PropTypes.shape({
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  table: tableShape,
});

export const errorMessageShape = PropTypes.shape({
  message: PropTypes.string.isRequired,
});
