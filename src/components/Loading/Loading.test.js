import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

describe('Loading', () => {
  let component;

  it('renders Loading', () => {
    component = shallow(<Loading />);
    expect(component.text()).toEqual('Loading table data...');
  });
});
