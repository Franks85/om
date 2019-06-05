import React from "react";
import styled from "styled-components";
import logo from './img/logob.png';
import { media } from '../../styledComponents/mediaQueryHelper';

const Wrapper = styled.footer`
  background-color: #333;
  font-size: 1.4rem;
  padding: 4rem 12rem;
  ${media.lessThan('tabPort')`
   padding: 4rem 8rem;
  `}
`;

const LogoBox = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
`;

const Logo = styled.div`
  width: 12rem;
  height: 12rem;
  margin: auto;
  background-size: cover;
  border-radius: 50%;
  background-image: url('${logo}');
`;

const FooterInfoBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 10rem;
  ${media.lessThan('phone')`
   flex-direction: column;
  `}
`;

const FooterNavigationBox = styled.div`
  flex: 2;
  ${media.lessThan('phone')`
    flex: 100%;
    text-align: center;
    margin-bottom: 2.5rem;
  `}
`;

const FooterNavigationList = styled.ul`
  list-style: none;
  border-top: 2px solid #777;
  padding-top: 2rem;
  display: inline-block;
  
`;

const FooterNavigationItem = styled.li`
  display: inline-block;
  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

const FooterNavigationLink = styled.a`
  &:link, :visited {
    text-decoration: none;
    display: inline-block;
    color: #777;
    text-transform: uppercase;
    letter-spacing: .2rem;
    transition: all .2s;
  }

  &:hover, :active {
    color: #4286f4;
    text-shadow: 0 1rem 2rem rgba(0,0,0,.4);
    transform: rotate(5deg) scale(1.2);
  }
`;

const FooterCopyright = styled.div`
  flex: 1;
  ${media.lessThan('phone')`
    flex: 100%;
    text-align: center;
    margin-bottom: 2rem;
  `}
`;

const FooterCopyrightText = styled.div`
  border-top: 2px solid #777;
  padding-top: 2rem;
  display: inline-block;
  ${media.lessThan('phone')`
    border-top: 0;
  `}
`;

const footer = () => {
  return (
    <Wrapper>
      <LogoBox>
        <Logo />
      </LogoBox>
      <FooterInfoBox>
        <FooterNavigationBox>
          <FooterNavigationList>
            <FooterNavigationItem>
              <FooterNavigationLink href='#'>link</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href='#'>link</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href='#'>link</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href='#'>link</FooterNavigationLink>
            </FooterNavigationItem>
          </FooterNavigationList>
        </FooterNavigationBox>
        <FooterCopyright>
          <FooterCopyrightText>Copyright &copy; </FooterCopyrightText>
        </FooterCopyright>
      </FooterInfoBox>
    </Wrapper>
  );
};

export default footer;
