import React from "react";
import styled from "styled-components";
import {
  SectionTitle,
  AnimatedButton
} from "../../../styledComponents/styledComponents";
import roomImg1 from "./img/room1.jpg";
import roomImg2 from "./img/room2.jpg";
import roomImg3 from "./img/room3.jpg";
import { media } from "../../../styledComponents/mediaQueryHelper";
import Jello from "react-reveal/Jello";

const Wrapper = styled.div`
  margin-top: -6rem;
  margin-bottom: 5rem;
  background-color: #f7f7f7;
  text-align: center;
  height: 70rem;
  padding: 15rem 5rem;
  ${media.lessThan("tabPort")`
    height: 180rem;
    padding: 3rem 3rem;
    margin-top: -3rem;
    margin-bottom: 0;
  `};
  ${media.lessThan("phone")`
    padding: 2rem 0;
  `};
`;

const RoomTitle = styled(SectionTitle)`
  padding-top: 6rem;
`;

const CardWrapper = styled.div`
  display: flex;
  height: 50rem;
  width: 80%;
  margin: 5rem 10%;
  justify-content: center;
  ${media.lessThan("tabPort")`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
    padding: 0 5rem;
    margin: 0 10%;
  `};
  ${media.lessThan("phone")`
    width: 100%;
    margin: 0;
  `};
`;

const CardSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  backface-visibility: hidden;
  transition: transform 1s ease;
`;

// style front card
const CardSideFront = styled(CardSide)`
  background-color: #fff;
`;

const CardSideFrontImage = styled.div`
  background-size: cover;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  height: 15rem;
  margin-bottom: 1rem;
`;

const CardSideFrontImage1 = styled(CardSideFrontImage)`
  background-image: linear-gradient(to right bottom, #7ed56f, #28b485), url('${roomImg1}');
`;

const CardSideFrontImage2 = styled(CardSideFrontImage)`
  background-image: linear-gradient(to right bottom, #ffb900, #ff7730), url('${roomImg2}');
`;

const CardSideFrontImage3 = styled(CardSideFrontImage)`
  background-image: linear-gradient(to right bottom, #2998ff, #5643fa), url('${roomImg3}');
`;

const CardSideFrontHeading = styled.h4`
  font-size: 2.2rem;
  text-transform: uppercase;
  text-align: right;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
`;

const CardSideFrontHeadingSpan = styled.span`
  padding: .4rem 1.5rem;
  box-decoration-break: clone;
`;

const CardSideFrontHeadingSpan1 = styled(CardSideFrontHeadingSpan)`
  background: linear-gradient(
    to right bottom,
    rgba(126, 213, 111, 0.85),
    rgba(40, 180, 133, 0.85)
  );
`;

const CardSideFrontHeadingSpan2 = styled(CardSideFrontHeadingSpan)`
  background: linear-gradient(
    to right bottom,
    rgba(255, 185, 0, 0.85),
    rgba(255, 119, 48, 0.85)
  );
`;

const CardSideFrontHeadingSpan3 = styled(CardSideFrontHeadingSpan)`
  background: linear-gradient(
    to right bottom,
    rgba(41, 152, 255, 0.85),
    rgba(86, 67, 250, 0.85)
  );
`;

const CardSideFrontDescription = styled.p`
  font-size: ${props => props.theme.defaultFontSize};
  line-height: 2.5rem;
  padding: 2.5rem 1.5rem;
  text-align: left;
  color: #aaa;
  ${media.lessThan("tabPort")`
      display: none;
  `};
`;

// style back card
const CardSideBack = styled(CardSide)`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  ${props =>
    props.green &&
    "background: linear-gradient(to right bottom, #7ed56f, #28b485);"};
  ${props =>
    props.orange &&
    "background: linear-gradient(to right bottom, #ffb900, #ff7730);"};
  ${props =>
    props.blue &&
    "background: linear-gradient(to right bottom, #2998ff, #5643fa);"};
  ${media.lessThan("tabPort")`
      display: none;
  `};
`;

const CardSideBackContent = styled.div`
  flex-basis: 80%;
  height: 80%;
  padding: 2rem 3rem;
  text-transform: uppercase;
  color: #fff;
`;

const CardSideBackContentPrice = styled.h4`
  font-family: "san-serif";
  font-size: 4rem;
  font-weight: 100;
  line-height: 5rem;

  ${media.lessThan("tabPort")`
    color: #4286f4;
    padding-top: 3rem;
  `};
`;

const MobileContentPrice = styled.div`
  font-family: "san-serif";
  font-size: 4rem;
  font-weight: 100;
  line-height: 5rem;
  color: ${props =>
    props.primary
      ? "#4286f4"
      : props.secondary
      ? "#ffb900"
      : props.terziary
      ? "#7ed56f"
      : "#fff"};
  padding-top: 3rem;
  ${media.greaterThan("tabPort")`
    display: none;
  `};
`;

const CardSideBackContentText = styled.p`
  font-size: 1.6rem;
  padding: 3rem 0;
  line-height: 2.5rem;
  ${media.lessThan("tabPort")`
    font-size: 1.8rem;
  `};
`;

const MobileContentText = styled.p`
  font-size: 1.8rem;
  padding: 3rem 0;
  line-height: 2.5rem;
  ${media.greaterThan("tabPort")`
    display: none;
  `};
`;

const CardSideBackContentButton = styled(AnimatedButton)`
  color: #999;
  font-weight: bolder;
  &:hover {
    color: #999;
  }
`;

const MobileContentButton = styled.a`
  line-height: 1.4rem;
  letter-spacing: 0.15rem;
  font-weight: bold;
  background-color: ${props =>
    props.primary
      ? "#4286f4"
      : props.secondary
      ? "#ffb900"
      : props.terziary
      ? "#7ed56f"
      : "#fff"};
  color: white;
  font-size: 1.4rem;
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
      props.primary
        ? "#4286f4"
        : props.secondary
        ? "#ffb900"
        : props.terziary
        ? "#7ed56f"
        : "#fff"};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
  ${media.greaterThan("tabPort")`
     display: none;
     &:after, &:active, &:visited, &:link {
       display: none;
     }
  `};
`;

// card wrapper
const CardBox = styled.div`
  flex: 1;
  &:not(:last-child) {
    margin-right: 5rem;
  }
  position: relative;
  height: 80%;
  perspective: 150rem;
  &:hover {
    cursor: pointer;
  }
  &:hover ${CardSide}:first-child {
    transform: rotateY(-180deg);
  }
  &:hover ${CardSide}:last-child {
    transform: rotateY(0);
  }
  ${media.lessThan("tabPort")`
    position: relative;
    height: 33%;
    width: 85%;
    margin-top: 5rem;
    &:not(:last-child) {
      margin-bottom: 4rem;
    }
    &:hover {
      cursor: default;
    }
    &:hover ${CardSide}:first-child {
    transform: rotateY(0);
  }
  `};
  ${media.lessThan("phone")`
    width: 100%;
  `};
`;

const roomsSection = () => {
  return (
    <Wrapper id="rooms">
      <Jello>
        <RoomTitle>Le nostre camere</RoomTitle>
      </Jello>
      <CardWrapper>
        <CardBox>
          <CardSide>
            <CardSideFront>
              <CardSideFrontImage1 />
              <CardSideFrontHeading>
                <CardSideFrontHeadingSpan1>
                  stile liberty{" "}
                </CardSideFrontHeadingSpan1>
              </CardSideFrontHeading>
              <CardSideFrontDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                natus nulla molestiae temporibus!
              </CardSideFrontDescription>
              <MobileContentPrice terziary>70 €</MobileContentPrice>
              <MobileContentText>Colazione inclusa!</MobileContentText>
              <MobileContentButton href="/rooms" terziary>
                View more
              </MobileContentButton>
            </CardSideFront>
            <CardSideBack green>
              <CardSideBackContent>
                <CardSideBackContentPrice>70 €</CardSideBackContentPrice>
                <CardSideBackContentText>
                  Colazione inclusa!
                </CardSideBackContentText>
                <CardSideBackContentButton href="/rooms">
                  View more
                </CardSideBackContentButton>
              </CardSideBackContent>
            </CardSideBack>
          </CardSide>
        </CardBox>

        <CardBox>
          <CardSide>
            <CardSideFront>
              <CardSideFrontImage2 />
              <CardSideFrontHeading>
                <CardSideFrontHeadingSpan2>
                  stile art nouveaux
                </CardSideFrontHeadingSpan2>
              </CardSideFrontHeading>
              <CardSideFrontDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                natus nulla molestiae temporibus!
              </CardSideFrontDescription>
              <MobileContentPrice secondary>75 €</MobileContentPrice>
              <MobileContentText>Colazione inclusa!</MobileContentText>
              <MobileContentButton href="/rooms" secondary>
                View more
              </MobileContentButton>
            </CardSideFront>
            <CardSideBack orange>
              <CardSideBackContent>
                <CardSideBackContentPrice>75 €</CardSideBackContentPrice>
                <CardSideBackContentText>
                  colazione inclusa!
                </CardSideBackContentText>
                <CardSideBackContentButton href="/rooms">
                  View more
                </CardSideBackContentButton>
              </CardSideBackContent>
            </CardSideBack>
          </CardSide>
        </CardBox>

        <CardBox>
          <CardSide>
            <CardSideFront>
              <CardSideFrontImage3 />
              <CardSideFrontHeading>
                <CardSideFrontHeadingSpan3>
                  stile moderno
                </CardSideFrontHeadingSpan3>
              </CardSideFrontHeading>
              <CardSideFrontDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                natus nulla molestiae temporibus!
              </CardSideFrontDescription>
              <MobileContentPrice primary>65 €</MobileContentPrice>
              <MobileContentText>Colazione inclusa!</MobileContentText>
              <MobileContentButton href="/rooms" primary>
                View more
              </MobileContentButton>
            </CardSideFront>
            <CardSideBack blue>
              <CardSideBackContent>
                <CardSideBackContentPrice>65 €</CardSideBackContentPrice>
                <CardSideBackContentText>
                  colazione inclusa!
                </CardSideBackContentText>
                <CardSideBackContentButton href="/rooms">
                  View more
                </CardSideBackContentButton>
              </CardSideBackContent>
            </CardSideBack>
          </CardSide>
        </CardBox>
      </CardWrapper>
    </Wrapper>
  );
};

export default roomsSection;
