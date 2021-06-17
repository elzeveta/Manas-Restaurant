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
            Zapewnia prawdziwy smak kuchni Azji Środkowej i sprawia, że
            ​​czujesz się jak w domu. Zapewniamy również kuchnię koreańską,
            która ma ogromny smak Azji Wschodniej. Odzwierciedlamy kulturę
            Kirgistanu. Zapraszamy do nas i zasmakuj prawdziwego smaku kuchni
            Azji Środkowej.
          </AboutP>
        </AboutItems>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
