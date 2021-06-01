import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';
import Seats from '../Seats';
import Pots from '../Pots';
import Cards from '../Cards';
import data from '../../data/table-1';

describe('Table', () => {
  let component;

  it('renders Table with Seats, Pots, Cards, and correct class name', () => {
    component = shallow(<Table table={data} />);
    expect(component.find(Seats).length).toEqual(1);
    expect(component.find(Pots).length).toEqual(1);
    expect(component.find(Cards).length).toEqual(1);
    expect(component.hasClass('Table-holdem')).toEqual(true);
  });

  it('renders Table without currentHand', () => {
    const dataWithoutCurrentHand = {
      ...data,
      currentHand: undefined,
    };
    component = shallow(<Table table={dataWithoutCurrentHand} />);
    expect(component.find(Seats).length).toEqual(1);
    expect(component.find(Pots).length).toEqual(0);
    expect(component.find(Cards).length).toEqual(0);
  });
});
