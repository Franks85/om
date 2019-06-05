import React from "react";
import styled from "styled-components";
import aboutImg1 from "../img/about1.jpeg";
import aboutImg2 from "../img/about2.jpeg";
import aboutImg3 from "../img/about3.jpeg";
import {
  SectionTitle,
  ContentBox
} from "../../../styledComponents/styledComponents";
import { media } from "../../../styledComponents/mediaQueryHelper";

const Wrapper = styled.section`
  padding: 10rem;
  background-color: #f7f7f7;
  height: 80rem;
  margin-top: -15rem;
  padding-top: 20rem;
  margin-bottom: 6rem;
  text-align: center;
  ${media.lessThan("tabPort")`
    height: 100rem;
    padding-top: 15rem;
    margin: -12rem 0;
  `};
  ${media.lessThan("phone")`
    height: 80%;
    padding: 15rem 2rem;
  `};
`;

// section left
const ContentText = styled.div`
  flex: 1;
  padding: 0 5rem;
  ${media.lessThan("phone")`
    margin: 0;
    padding: 2rem;
  `};
`;

const TextHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: #5eab4f;
`;

const TextParagraph = styled.p`
  font-size: 1.6rem;
  line-height: 2.5rem;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
  ${media.lessThan("tabPort")`
    display: ${props => (props.noDisplay ? "none" : "normal")};
  `};
`;

const TextLink = styled.a`
  &:link,
  :visited {
    color: #4286f4;
    text-decoration: none;
    border-bottom: 1px solid #4286f4;
    padding: 3px;
    display: inline-block;
    font-size: 2.5rem;
    transition: all 0.2s;
  }
  &:hover {
    background-color: #4286f4;
    color: #fff;
    text-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.7);
    transform: translateY(-2px);
  }
  &:active {
    text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);
    transform: translateY(0);
  }
`;

// section right

const Images = styled.img`
  width: 45%;
  height: 17rem;
  border-radius: 2px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  position: absolute;
  outline-offset: 1.5rem;
  transition: all 0.2s;
  z-index: 5;
  &:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
    outline: 1rem solid #4286f4;
    z-index: 10;
  }
  ${media.lessThan("tabPort")`
    position: unset;
    width: 100%;
    height: 70%;
    &:hover {
      outline: none;
    }
  `};
  ${media.lessThan("phone")`
    height: 60%;
    margin-top: 5rem;
  `};
`;

const ContentImage = styled.div`
  position: relative;
  flex: 1;
  padding: 0 5rem;

  &:hover ${Images}:not(:hover) {
    transform: scale(0.95);
    opacity: 0.8;
  }
`;

const Image1 = styled(Images)`
  top: 0;
  left: 4rem;
`;

const Image2 = styled(Images)`
  top: 4rem;
  right: 6rem;
  ${media.lessThan("tabPort")`
    display: none;
  `};
`;

const Image3 = styled(Images)`
  top: 12rem;
  left: 20%;
  ${media.lessThan("tabPort")`
    display: none;
  `};
`;

const houseSection = () => {
  return (
    <Wrapper id="house">
      <SectionTitle>Il nostro bed and breakfast</SectionTitle>

      <ContentBox>
        <ContentText>
          <TextHeading>Una casa immersa nel verde</TextHeading>
          <TextParagraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ipsum
            excepturi optio non molestias cumque adipisci suscipit commodi
            doloribus
          </TextParagraph>
          <TextParagraph noDisplay>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi natus
            nulla molestiae temporibus a, dignissimos harum quis laborum vel
            molestias libero sint sed porro ab, est nesciunt. Animi, magnam
            inventore!
          </TextParagraph>
          <TextLink href="/rooms">Guarda la gallery &rarr;</TextLink>
        </ContentText>
        <ContentImage>
          <Image1 src={aboutImg1} alt="house img" />
          <Image2 src={aboutImg2} alt="house img" />
          <Image3 src={aboutImg3} alt="house img" />
        </ContentImage>
      </ContentBox>
    </Wrapper>
  );
};

export default houseSection;
