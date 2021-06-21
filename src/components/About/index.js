import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  AboutContainer,
  AboutContent,
  AboutItems,
  AboutH1,
  AboutP,
} from "./AboutElements";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AboutContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AboutContent>
        <AboutItems>
          <AboutH1>Manas</AboutH1>
          <AboutP>
          Kuchnia etniczna była popularna wśród mieszkańców Polski w różnych miastach, aby ciekawie dotyczyć ich stanu zdrowia. Restauracja Manas Mix Food została stworzona, aby wprowadzić mieszany smak różnych kuchni, w tym azjatyckiej i tradycyjnej kuchni kirgiskiej. Mając lata szkoleń i doświadczenia, zamierzamy wprowadzić tę nową restaurację dla różnych osób, aby spróbować nowego smaku, w tym Manty, ponieważ smak ten zachęci ludzi z Europy do wyboru zdrowej żywności. Lokalizacja Manas Mix Food dla biznesu może być traktowana jako restauracja tematyczna ze względu na brak połączonej restauracji z Azji i Kirgistanu w wyznaczonej lokalizacji.
          </AboutP>
        </AboutItems>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
