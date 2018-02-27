import React from 'react';
import { shallow } from 'enzyme';
import { HeaderAppBar } from './index';

describe('AppBar Component', () => {
  it('renders without crashing', () => {
    shallow(<HeaderAppBar />);
  });
});
