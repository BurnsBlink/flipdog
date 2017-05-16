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
    expect(wrapper.find('h1')).toBePresent();
    expect(wrapper.find('h3')).toBePresent();
    expect(wrapper.find('p')).toBePresent();
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('button')).toBePresent();
  });

  it('should render an h1 tag with the dog name prop', () => {
    expect(wrapper.find('h1').text()).toBe('Alfred');
  });

  it('should render an h3 tag with the humans first name prop', () => {
    expect(wrapper.find('h3').text()).toBe('Bruce');
  });

  it('should render an p tag with the description prop', () => {
    expect(wrapper.find('p').text()).toBe('This dog is da bomb');
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: "https://img0.etsystatic.com/125/0/10692466/il_340x270.981333968_ily8.jpg",
      className: "last-image"
    });
  });
});
