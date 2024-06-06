import React from 'react';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import HomeContainer from './components/HomeContainer/HomeConatainer';
import HomeSection from './components/HomeSection/HomeSection';
import HomeTaglineDescription from './components/HomeTaglineDescription/HomeTaglineDescription';
import HomeTaglineLarger from './components/HomeTaglineLarger/HomeTaglineLarger';
import HomeTagline from './components/HomeTagline/HomeTagline';

const Home = () => {
  return (
    <HomeContainer>
      <HomeSection>
        <HomeTagline>
          <div>Discover Your</div>
          <HomeTaglineLarger>Perfect Cocktail</HomeTaglineLarger>
          <HomeTaglineDescription>
            Find the best cocktails tailored to your taste. Explore a wide
            variety of recipes and create your perfect drink.
          </HomeTaglineDescription>
          <CustomButton to="/browse">Get Started</CustomButton>
        </HomeTagline>
      </HomeSection>
    </HomeContainer>
  );
};

export default Home;
