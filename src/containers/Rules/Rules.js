import React, { Fragment } from "react";
import styled from "styled-components";
import {
  NavBar,
  NavBarHeading,
  SectionTitle
} from "../../styledComponents/styledComponents";
import { media } from "../../styledComponents/mediaQueryHelper";
import { rulesData } from "./rulesData";
import Navigation from "../../components/Navigation/mobileNavigation";

const Wrapper = styled.div``;

const NavBarTitle = styled(NavBarHeading)`
  ${media.lessThan("phone")`
    font-size: 3.5rem;
    padding-top: 3rem;
  `};
`;

const RulesBox = styled.div`
  padding: 8rem;
  text-align: center;
  ${media.lessThan("tabPort")`
    padding: 3rem;
  `};
`;

const RulesHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #5eab4f;
  letter-spacing: 0.3rem;
  text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  margin: 3rem 0;
`;

const RulesText = styled.p`
  font-size: 1.6rem;
  text-align: justify;
  margin-top: ${props => (props.internal ? "1rem" : "3rem")};
  letter-spacing: 0.15rem;
  margin-bottom: ${props => (props.internal ? "1rem" : "3rem")};
`;

const Rules = () => {
  const rules = rulesData.map(i => {
    return (
      <Fragment>
        <SectionTitle>{i.title}</SectionTitle>
        <RulesText>{i.rule}</RulesText>
      </Fragment>
    );
  });
  return (
    <Wrapper>
      <Navigation />
      <NavBar>
        <NavBarTitle>Regolamento</NavBarTitle>
      </NavBar>
      <RulesBox>
        <RulesHeading>
          Siamo lieti di darvi il benvenuto nel nostro Bed and Breakfast! Vi
          invitiamo a prendere visione del nostro regolamento interno.
        </RulesHeading>
        {rules}
        <RulesText internal>E’ vietato fumare all’interno della casa</RulesText>
        <RulesText internal>
          Il B&B declina ogni responsabilità per lo smarrimento, il furto od il
          danneggiamento di oggetti di Vostra proprietà lasciati incustoditi
          nelle camere o negli spazi comuni e per eventuali danni a persone,
          animali o cose da e verso terzi. Eventuali danni dovranno essere
          immediatamente comunicati al gestore della struttura.
        </RulesText>
        <RulesHeading>
          Vi ringraziamo per aver scelto la nostra casa e vi auguriamo un sereno
          soggiorno!
        </RulesHeading>
      </RulesBox>
    </Wrapper>
  );
};

export default Rules;
