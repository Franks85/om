import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import Link from "../../UI/link/link";
import { FaPhone, FaEnvelope} from "react-icons/fa";
import { media } from "../../styledComponents/mediaQueryHelper";

const InfoLink = styled.div`
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
  font-weight: bolder;
  color: #fff;
  padding: 1rem 0;
  span {
    margin-left: 0.5rem;
  }
`;

const InfoBox = styled.div`
 p {
   font-size: 1.8rem;
   color: #fff;
   margin-top: .8rem;
 }
  text-align: left;
  ${media.lessThan("tabPort")`
    text-align: center;
  `};
`;

const info = () => {
  return (
    <Row className="mt-3">
      <Col md={6}>
        <InfoBox>
          <InfoLink>
            <FaPhone size={14} color="#fff" />
            <span>071/793.82.39</span>
          </InfoLink>
          <InfoLink>
            <FaEnvelope size={14} color="#fff" />
            <span>
              <Link
                href="mailto:orizzontemar@gmail.com"
                color="#fff"
                hoverColor="rgb(146, 177, 216)"
              >
              orizzontemar@gmail.com
              </Link>
            </span>
          </InfoLink>
        </InfoBox>
      </Col>
      <Col md={6}>
        <InfoBox>
          <p>Strada del Camposanto Vecchio, 14 Senigallia (AN)</p>
        </InfoBox>
      </Col>
    </Row>
  );
};

export default info;
