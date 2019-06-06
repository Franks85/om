import React from "react";
import styled from "styled-components";
import { Col } from "reactstrap";
import Link from "../../UI/link/link";
import { navConfig } from "./navConfig";
import { media } from "../../styledComponents/mediaQueryHelper";

const NavItem = styled.div`
  font-size: 1.8rem;
  letter-spacing: 0.25rem;
  margin: 0.5rem 0;
  font-weight: bolder;
  width: 100%;

  a {
    display: inline-block;
    padding: 0.5rem;
    border-radius: 3px;
    &:hover {
      border-color: transparent;
    }
  }
`;

const NavBox = styled.div`
  ${media.lessThan("phone")`
    display: none;
  `};
`;

const navigation = () => {
  const navList = navConfig.map(i => (
    <NavItem key={i.text}>
      <Link href={i.href} color="#fff" hoverColor="rgb(146, 177, 216)">
        {i.text}
      </Link>
    </NavItem>
  ));
  return (
    <Col md={4} className="text-center">
      <NavBox>
      {navList}
      </NavBox>
    </Col>
  );
};

export default navigation;
