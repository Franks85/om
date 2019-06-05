import styled from "styled-components";
import { media } from './mediaQueryHelper';

const SectionTitle = styled.h2`
  display: inline-block;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #afceff, #4286f4);
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  &:hover {
    transform: skewY(5deg) skewX(3deg) scale(1.1);
    text-shadow: 0.5rem 1.5rem 2rem rgba(0, 0, 0, 0.5);
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  height: 90%;
  margin: 5% auto;
  ${media.lessThan("tabPort")`
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  `};
  ${media.lessThan("phone")`
    margin: 0;
    padding: 0;
    align-items: stretch;
  `};
`;

const NavBar = styled.div`
  background-color: #c7daff;
  height: 10rem;
  text-align: center;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
`;

const NavBarHeading = styled.h1`
  font-family: "sea-font";
  font-size: 5rem;
  color: #286d75;
  letter-spacing: 0.4rem;
  padding-top: 2rem;
`;

const AnimatedButton = styled.a`
  line-height: 1.6rem;
  letter-spacing: 0.25rem;
  background-color: ${props => props.primary ? '#4286f4' : "white"};
  color: white;
  &:visited,
  :link {
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 2rem;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    &:after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  &:after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    background-color: ${props =>
      props.primary ? '#4286f4' : "white"};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
`;

export { SectionTitle, ContentBox, AnimatedButton, NavBar, NavBarHeading };
