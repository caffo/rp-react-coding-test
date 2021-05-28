import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  let component;

  it('renders ErrorMessage', () => {
    component = shallow(<ErrorMessage message="An error occurred." />);
    const divs = component.find('div');
    expect(divs.length).toEqual(2);
    expect(divs.last().text()).toEqual('An error occurred.');
  });
});
