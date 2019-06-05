import React from "react";
import styled from "styled-components";
import bgVideo from "../../containers/Landing/Header/video/bgVideo.mp4";
import bgVideoWebm from "../../containers/Landing/Header/video/bgVideo.webm";

const HeaderBgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.8;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const videoBg = () => {
  return (
    <HeaderBgVideo>
      <Video autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
        <source src={bgVideoWebm} type="video/webm" />
        Your browser is not support
      </Video>
    </HeaderBgVideo>
  );
};

export default videoBg;
