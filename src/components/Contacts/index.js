import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  ContactsContainer,
  ContactsContent,
  ContactsItems,
  ContactsH6,
  ContactsP,
  ContactsUl,
  ContactsLi
} from "./ContactsElements";

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContactsContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ContactsContent>
        <ContactsItems>
          <ContactsH6>Adres</ContactsH6>
          <ContactsP>
          Puławska 74/80
02-603 Warsawa 
Tel. 739-457-697
          </ContactsP>
          <ContactsP>
            <ContactsUl>
              <ContactsLi>Godziny otwarcia</ContactsLi>
              <ContactsLi>pon.:	11:00–21:00</ContactsLi>
              <ContactsLi>wt.:	11:00–21:00</ContactsLi>
              <ContactsLi>śr.:	11:00–21:00</ContactsLi>
              <ContactsLi>czw.:	11:00–21:00</ContactsLi>
              <ContactsLi>pt.:	11:00–21:00</ContactsLi>
              <ContactsLi>sob.:	11:00–21:00</ContactsLi>
              <ContactsLi>niedz.:	11:00–21:00</ContactsLi>
            </ContactsUl>
          </ContactsP>
        </ContactsItems>
      </ContactsContent>
    </ContactsContainer>
  );
};

export default Contacts;
