import React from "react";
import styled from "styled-components";

const PopupBox = styled.div`
  width: 80%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%) scale(.25);
  transition: all .4s .2s;
  border-radius: 3px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 500;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s;
  &:target {
    opacity: 1;
    visibility: visible;
  }
  &:target ${PopupBox} {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const PopupCloseIcon = styled.a`
  &:link,
  :visited {
    position: absolute;
    top: -2rem;
    right: 2.5rem;
    display: inline-block;
    color: #999;
    text-decoration: none;
    font-size: 5rem;
    transition: all 0.4s;
  }
  &:hover,
  :active {
    color: #4286f4;
  }
`;

const mapPopup = () => {
  return (
    <Wrapper id="popup">
      <PopupBox>
        <PopupCloseIcon href='/#contact-section'>&times;</PopupCloseIcon>
        <iframe
          width="80%"
          height="460"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=via%20camposanto%20vecchio%20senigallia&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          title='googleMap'
        />
      </PopupBox>
    </Wrapper>
  );
};

export default mapPopup;
