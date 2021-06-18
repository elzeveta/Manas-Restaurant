import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  NewsContainer,
  NewsContent,
  NewsItems,
  NewsH6,
  NewsP,
} from "./NewsElements";

const News = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NewsContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NewsContent>
        <NewsItems>
          <NewsH6>2020-10-25 MANAS</NewsH6>
          <NewsP>
            Z powodu Pandemii nie jesteśmy w stanie obsłużyć naszych klientów.
            Jednak zapewniamy tylko transport na wynos, również zapewniamy
            dostawę. Prosimy o kontakt pod tym numerem/. 739 457 697.
          </NewsP>
          <NewsH6>2020-10-07 MANAS</NewsH6>
          <NewsP>
            W restauracji należy zachować odległość co najmniej 1,75 m. Również
            środek dezynfekujący znajduje się przed drzwiami.
          </NewsP>
        </NewsItems>
      </NewsContent>
    </NewsContainer>
  );
};

export default News;
