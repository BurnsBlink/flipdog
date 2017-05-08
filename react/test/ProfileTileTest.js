import ProfileTile from 'components/ProfileTile';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('PostTile', () => {
  let firstName,
      lastName,
      dogNames,
      descriptions,
      images,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ProfileTile
        firstName="Bruce"
        lastName="Wayne"
        dogName="Alfred"
        descriptions="The hero this city needs"
        images="http://www3.pictures.zimbio.com/mp/r_Mf-uluvPrx.jpg"
      />
    );
  });

  it('should render a p, image, and button tags', () => {
    expect(wrapper.find('p')).toBePresent();
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('button')).toBePresent();
  });
});
