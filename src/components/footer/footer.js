import React from "react";
import { Row, Col, Container } from "reactstrap";
import styled from "styled-components";
import Navigation from "./navigation";
import Social from './social'
import Info from './info'

const Footer = styled.footer`
  padding: 3rem 0;
  background-color: #333;
`;

const Divider = styled.div`
  position:absolute;
    left:50%;
    top:10%;
    bottom:10%;
    border-left: 2px solid white;
`;

const footer = () => {
  return (
    <Footer>
      <Container fluid>
        <Row>
          <Navigation />
         <Col md={1}>
         <Divider />
         </Col>
          <Col lg={{size:6, offset: 1}} md={7}>
            <Social />
            <Info />
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default footer;

