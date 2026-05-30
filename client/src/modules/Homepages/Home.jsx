import React from 'react';
import Hero from './Hero';
import About from './About';
import WhyChoose from './Whychoose';
import Faq from './Faq';
import Services from './Service';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <Faq /> 
    </>
  );
};

export default Home;
