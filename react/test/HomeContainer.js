import Home from 'containers/Home';
import PostTile from 'components/PostTile';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Home />);
  });
});
