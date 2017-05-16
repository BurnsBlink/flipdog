import ThemeTile from 'components/ThemeTile';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('ThemeTile', () => {
  let  winnerId,
       winnerHuman,
       winnerDogName,
       winnerImage,
       winnerDescription,
       winnerVotes,
       secondId,
       secondHuman,
       secondDogName,
       secondImage,
       secondDescription,
       secondVotes,
       thirdId,
       thirdHuman,
       thirdDogName,
       thirdImage,
       thirdDescription,
       thirdVotes;

  beforeEach(() => {
    wrapper = mount(
      <ThemeTile
        winnerId="1"
        winnerHuman="Bruce Wayne"
        winnerDogName="Champ"
        winnerImage="http://www3.pictures.zimbio.com/mp/r_Mf-uluvPrx.jpg"
        winnerDescription="The Dark Knight"
        winnerVotes="37"
        secondId="2"
        secondHuman="Peter Parker"
        secondDogName="Porker"
        secondImage="http://www3.pictures.zimbio.com/mp/r_Mf-uluvPrx.jpg"
        secondDescription="It's a spider-pig-dog"
        secondVotes="30"
        thirdId="3"
        thirdHuman="Barry Aleen"
        thirdDogName="Wally"
        thirdImage="http://www3.pictures.zimbio.com/mp/r_Mf-uluvPrx.jpg"
        thirdDescription="Did he change the timeline again?"
        thirdVotes="20"
      />
    );
  });

  it('should render a p, image, and button tags', () => {
    expect(wrapper.find('h4')).toBePresent();
    expect(wrapper.find('h5')).toBePresent();
    expect(wrapper.find('p')).toBePresent();
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('button')).toBePresent();
  });

  it('should render an h4 tag with the human prop', () => {
    expect(wrapper.find('h4').text()).toBe('Bruce Wayne');
  });

  it('should render an h5 tag with the dogs name prop', () => {
    expect(wrapper.find('h5').text()).toBe('Champ');
  });

  it('should render an p tag with the description prop', () => {
    expect(wrapper.find('p').text()).toBe('The Dark Knight');
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: "https://img0.etsystatic.com/125/0/10692466/il_340x270.981333968_ily8.jpg",
      className: "image-finalist"
    });
  });
});
