import React from 'react';
import { shallow } from 'enzyme';
import { Landing } from './index';

describe('Landing Component', () => {
  it('renders without crashing', () => {
    shallow(<Landing />);
  });
});
