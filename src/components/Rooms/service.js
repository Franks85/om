import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import withReveal from "react-reveal/withReveal";
import Zoom from "react-reveal/Zoom";

const iconStyle = {
  gridRow: "1 / span 2",
  color: "#ffb900",
  alignSelf: "start",
  marginRight: "2.5rem"
};

const ServiceContainer = withReveal(
  styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
  `,
  <Zoom delay={500} />
);

const ServiceHeading = styled.h3`
  font-size: 2.2rem;
`;

const ServiceDescription = styled.p`
  font-size: 1.7rem;
`;

const Service = props => {
  const { icon, title, desc } = props;
  return (
    <ServiceContainer>
      <Icon icon={icon} size={36} style={iconStyle} />
      <ServiceHeading>{title}</ServiceHeading>
      <ServiceDescription>{desc}</ServiceDescription>
    </ServiceContainer>
  );
};

export default Service;
