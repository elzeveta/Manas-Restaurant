import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  PortContainer,
  PortContent,
  PortItems,
  PortH1,
  PortP
} from './PortfolioElements';

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PortContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <PortContent>
        <PortItems>
          <PortH1>Port Us</PortH1>
          <PortP>
        </PortP>
        </PortItems>
      </PortContent>
    </PortContainer>
  );
};

export default Portfolio;
