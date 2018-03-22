import React from 'react';
import { shallow } from 'enzyme';
import { Routs } from './index';

describe('Routs Component', () => {
  it('renders without crashing', () => {
    shallow(<Routs />);
  });
});
