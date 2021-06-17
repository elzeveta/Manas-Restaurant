import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import cartbar from '../Cartbar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';
import Cartbar from '../Cartbar';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Współczesna restauracja z tradycyjną kuchnią azjatycką</HeroH1>
          <HeroP>Witamy!</HeroP>
          <HeroBtn>Zamów teraz</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
