import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { useHistory } from "react-router";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [succcessMsg, setSuccesssMsg] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  let history = useHistory();
  const redirect = () => {
    history.push('/menu');
  }

  useEffect(() => {
    let success = new URL(window.location.href).searchParams.get('success');
    (success && setSuccesssMsg('Thank you for your order!'))  
    const timer = setTimeout(() => {
      setSuccesssMsg(null)
    }, 3000);
    return () => clearTimeout(timer)
  }, [])

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          { <HeroP>{succcessMsg}</HeroP>}
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn onClick={redirect}>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
