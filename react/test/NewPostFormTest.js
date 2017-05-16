import NewPostForm from 'components/NewPostForm';
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
      <NewPostForm
        handleThemeId="Superhero"
        name="Krypto"
        description="Superman's dog"
        image="https://img0.etsystatic.com/125/0/10692466/il_340x270.981333968_ily8.jpg"
        themeId="12"
        theme="Superhero"
      />
    );
  });

  it('should render an h1, p, image, and button tags', () => {
    expect(wrapper.find('form')).toBePresent();
    expect(wrapper.find('a')).toBePresent();
    expect(wrapper.find('ul')).toBePresent();
  });
});
