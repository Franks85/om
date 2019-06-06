import React from "react";
import styled from "styled-components";
import { Row } from "reactstrap";
import { FaFacebookF } from "react-icons/fa";
import Link from "../../UI/link/link";

const SociaLink = styled.div`
  width: 100%;
  span {
    font-size: 2.2rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
      color: rgb(146, 177, 216);
    }
  }
  a {
    display: inline-block;
    padding: 0.5rem;
    border-radius: 3px;
    &:hover {
      border-color: transparent;
      
    }
  }
`;

const social = () => {
  return (
    <Row className='text-center'>
      <SociaLink>
        <Link href="/" color="#fff" hoverColor="rgb(146, 177, 216)">
        <span>Orizzonte Marino <FaFacebookF size={24} color='rgb(146, 177, 216)' /></span>
        </Link>
      </SociaLink>
    </Row>
  );
};

export default social;
