import React, { Component } from "react";
import styled from "styled-components";
import { moveLeft, moveRight } from "../../../styledComponents/keyframes";
import Navigation from '../../../components/Navigation/mobileNavigation'
import { media } from "../../../styledComponents/mediaQueryHelper";
import withReveal from "react-reveal/withReveal";
import Tada from "react-reveal/Tada";
import HeaderBgVideo from "../../../components/Header/videoBg";

const Wrapper = styled.div``;

const HeaderBox = styled.div`
  position: relative;
  height: 50rem;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  ${media.lessThan("phone")`
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  `};
`;

const TextBox = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const TextPrimary = styled.h1`
  color: rgb(188, 255, 248);
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  text-align: center;
`;

const TextTitle = styled.span`
  display: block;
  font-size: 5rem;
  font-weight: bold;
  letter-spacing: 2.5rem;
  color: #617fff;
  margin-top: -2rem;
  animation: 1.5s ${moveLeft} ease 0.5s;
  ${media.lessThan("phone")`
    font-size: 5rem;
    margin-bottom: 2rem;
    margin-top: 5rem;
    letter-spacing: 1.5rem;
  `};
`;

const TextTitleSecond = styled.span`
  display: block;
  font-size: 3.5rem;
  letter-spacing: 2.5rem;
  margin-bottom: 4rem;
  animation: 1.5s ${moveRight} ease 0.5s;
  ${media.lessThan("phone")`
    font-size: 2.5rem;
  `};
`;

const TextSubTitle = withReveal(
  styled.div`
    display: inline-block;
    font-family: "Catamaran", "sans-serif";
    font-size: 2.5rem;
    letter-spacing: 0.6rem;
    line-height: 1.4;
    font-weight: 700;
    color: #f9f48e;
  `,
  <Tada delay={2000} />
);

class Header extends Component {
  render() {
    return (
      <Wrapper id="header">
     
        <HeaderBox>
          <HeaderBgVideo />
          <Navigation />
          <TextBox>
            <TextPrimary>
              <TextTitle>orizzonte</TextTitle>
              <TextTitleSecond>marino</TextTitleSecond>
              <TextSubTitle>bed & breakfast</TextSubTitle>
            </TextPrimary>
          </TextBox>
        </HeaderBox>
      </Wrapper>
    );
  }
}

export default Header;
