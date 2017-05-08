import PostTile from 'components/PostTile';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('PostTile', () => {
  let image,
      onClick,
      dogName,
      description,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <PostTile
        image="https://img0.etsystatic.com/125/0/10692466/il_340x270.981333968_ily8.jpg"
        dogName="Champ"
        description="This dog is da bomb"
      />
    );
  });

  it('should render an h1, p, image, and button tags', () => {
    expect(wrapper.find('h1')).toBePresent();
    expect(wrapper.find('p')).toBePresent();
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('button')).toBePresent();
  });

  it('should render an h1 tag with the dog name prop', () => {
    expect(wrapper.find('h1').text()).toBe('Champ');
  });

  it('should render an p tag with the description prop', () => {
    // expect(wrapper.find('p').text()).toBe('This dog is da bomb');
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: "https://img0.etsystatic.com/125/0/10692466/il_340x270.981333968_ily8.jpg",
      className: "upload"
    });
  });
});
