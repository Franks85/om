import React from "react";
import styled from "styled-components";
import bgsea from "./img/bg_sea.jpeg";
import { moveLeft } from "../../../styledComponents/keyframes";
import { media } from "../../../styledComponents/mediaQueryHelper";
import RubberBand from "react-reveal/RubberBand";
import withReveal from "react-reveal/withReveal";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30rem;
    padding: 20rem 0;
    background-image: linear-gradient(to right bottom, rgba(77, 132, 183, 0.78),rgba(113, 175, 255, 0.76)), url('${bgsea}');
    background-size: cover;
    background-position: center;
    margin-top: -13rem;
    padding: 0;
    transform: skewY(-6deg);
    & > * {
      transform: skewY(6deg);
    }
    
`;

const TextBox = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

const Heading = withReveal(
  styled.h2`
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #b4ffaf;
    letter-spacing: 0.25rem;
    line-height: 7rem;
    text-shadow: 0.5rem 1rem 1.5rem rgba(0, 0, 0, 0.7);
    transition: all 0.2s;
    animation: 1s ${moveLeft};
    &:hover {
      transform: scale(1.1) translateY(-3px);
      backface-visibility: hidden;
    }
    ${media.lessThan("phone")`
    display: none;
  `};
  `,
  <RubberBand />
);

const interSection = () => {
  return (
    <Wrapper>
      <TextBox>
        <Heading>
          Per le tue vacanze scegli un luogo tranquillo e accogliente{" "}
        </Heading>
      </TextBox>
    </Wrapper>
  );
};

export default interSection;
