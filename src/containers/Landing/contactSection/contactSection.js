import React from "react";
import styled from "styled-components";
import contactImg from "./img/beach.jpg";
import {
  SectionTitle,
  AnimatedButton
} from "../../../styledComponents/styledComponents";
import { media } from "../../../styledComponents/mediaQueryHelper";
import withReveal from "react-reveal/withReveal";
import Zoom from "react-reveal/Zoom";

const Wrapper = styled.div`
  padding: 10rem;
  background-image: linear-gradient(to right, #afceff, #4286f4);
  ${media.lessThan("tabPort")`
    padding: 4rem;
  `};
  ${media.lessThan("phone")`
    padding: 2rem;
  `};
`;

const ContactContainer = styled.div`
  height: 50rem;
  background: linear-gradient(105deg, rgba(255,255,255,.8) 0%, rgba(255,255,255,.8) 60%, transparent 60%) ,url('${contactImg}') center/cover;
  border-radius: 3px;
  box-shadow: 0.5rem 1.5rem 3rem rgba(0, 0, 0, 0.3);
  ${media.lessThan("tabPort")`
    background: linear-gradient(105deg, rgba(255,255,255,.8) 0%, rgba(255,255,255,.8) 65%, transparent 65%) ,url('${contactImg}') center/cover;
  `};
  ${media.lessThan("phone")`
  background: linear-gradient(to right, rgba(255,255,255,.8) 0%, rgba(255,255,255,.8) 100%) ,url('${contactImg}') center/cover;
  `};
`;

const ContactBox = withReveal(
  styled.div`
    width: 50%;
    padding: 2rem 3rem;
    position: relative;
    ${media.lessThan("tabPort")`
    width: 70%;
  `};
    ${media.lessThan("phone")`
    width: 100%;
  `};
  `,
  <Zoom delay={500} />
);

const ContactInfoRef = styled.p`
  font-size: 1.7rem;
  padding: 1.6rem 0;
  text-transform: uppercase;
  color: #4286f4;
  font-weight: bold;
  ${media.lessThan("tabPort")`
    font-size: 1.4rem;
  `};
  ${media.lessThan("phone")`
    font-size: 1.6rem;
  `};
`;

const Address = styled(ContactInfoRef)`
  font-size: 1.5rem;
  font-weight: normal;

`;

const ContactInfoContent = styled.span`
  margin: 0 1rem;
  color: #00bca7;
  letter-spacing: .15rem;
`;

const FacebookLink = styled.a`
  text-decoration: none;
  &:link,
  :visited {
    color: #ffb900;
  }
  &:hover {
    color: #ff8469;
    text-shadow: 0 0.5rem 1rem rgba(249, 131, 100, 0.4);
  }
`;

const ContactBoxButton = styled(AnimatedButton)`
  font-size: 1.3rem;
  margin-top: 4rem;
`;

const contactSection = props => {
  const {mapHref} = props;
  return (
    <Wrapper id="contatti">
      <ContactContainer>
        <ContactBox>
          <SectionTitle>Contatti</SectionTitle>
          <ContactInfoRef>
            <i className="material-icons">Tel:</i>
            <ContactInfoContent>3408877650 ( Roberto )</ContactInfoContent>
          </ContactInfoRef>
          <ContactInfoRef>
            <i className="material-icons">email:</i>
            <ContactInfoContent>orizzontemar@gmail.com</ContactInfoContent>
          </ContactInfoRef>
          <ContactInfoRef>
            <i className="material-icons">Facebook:</i>
            <ContactInfoContent>
              <FacebookLink href="#">Orizzonte Marino &rarr;</FacebookLink>
            </ContactInfoContent>
          </ContactInfoRef>
          <Address>
            Strada del Camposanto Vecchio 14, Senigallia ( an )
          </Address>
          <ContactBoxButton primary href={mapHref}>
            Guarda la mappa &rarr;
          </ContactBoxButton>
        </ContactBox>
      </ContactContainer>
    </Wrapper>
  );
};

export default contactSection;
