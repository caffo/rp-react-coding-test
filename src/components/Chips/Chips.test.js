import React from 'react';
import { shallow } from 'enzyme';

import Chips from './Chips';

describe('Chips', () => {
  let component;

  it('shows seat available', () => {
    component = shallow(<Chips amount={1000} />);
    expect(component.text()).toEqual('1,000');
  });

  it('shows formatted number correctly', () => {
    component = shallow(<Chips amount={123456789} />);
    expect(component.text()).toEqual('123,456,789');
  });
});
