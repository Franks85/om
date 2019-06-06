import React, { Component } from "react";
import styled from "styled-components";
import { menuData } from "./navigationConfig";
import { TimelineLite, CSSPlugin, Power0 } from "gsap";
import {media} from '../../styledComponents/mediaQueryHelper'
// cambiare ref elememt

// eslint-disable-next-line
const plugins = [CSSPlugin];

const MenuButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 5rem;
  border: 0;
  background-color: transparent;
  padding: 15px;
  border-radius: 50%;
  margin: 10px;
  width: 70px;
  height: 65px;
  z-index: 999999;
  outline: none;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: #e6fafc;
    ${media.lessThan("tabPort")`
    background-color: transparent;
  `};
  }
  ${media.lessThan("tabPort")`
      top: 0;
      left: .5rem;
  `};
`;

const MenuBar = styled.div`
  width: 40px;
  height: 4px;
  background-color: #286d75;
  position: relative;
  margin: 5px 0;
  z-index: 30;
`;

const NavBar = styled.nav`
  width: 0;
  height: 0;
  position: absolute;
  background-color: #ccffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 40;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 40px 0;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: .15rem;
  overflow: hidden;
  li {
    a {
      text-decoration: none;
      text-transform: uppercase;
      color: #60bcd5;
      padding: 10px;
      display: block;
      opacity: 0;
      &:hover {
        background-color: #fff;
      }
    }
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.menuOpen = new TimelineLite({ paused: true, reversed: true });
    this.state = {
      open: false
    };
  }

  onMenuClick = () => {
    const bar1 = document.getElementsByClassName("menu-bar-1");
    const bar2 = document.getElementsByClassName("menu-bar-2");
    const bar3 = document.getElementsByClassName("menu-bar-3");
    const menu = document.getElementById("menu");
    const links = document.getElementsByClassName("menu-link");
    const menuOpen = this.menuOpen
      .addLabel('bars')
      .to(bar1, .15, {top: '7px', rotation: 135}, 'bars' )
      .to(bar2, .15, {opacity: 0}, 'bars')
      .to(bar3, .15, {top: '-11px', rotation: -135}, 'bars' )
      .to(menu, .4, {width: '100%', height: '100%', ease: Power0.easeIn }, '-=.3')
      .staggerTo(links, .3, {opacity: 1}, .15)

    const { open } = this.state;
    if(!open) {
      menuOpen.timeScale(1);
      menuOpen.play();
    } else {
      menuOpen.timeScale(1.5);
      menuOpen.reverse();
    }
    this.setState({open: !open})
    
  };
  render() {
    const navlist = menuData.map(i => (
      <li key={i.label}>
        <a href={i.url} className="menu-link">
          {i.label}
        </a>
      </li>
    ));
    return (
      <div>
        <MenuButton onClick={this.onMenuClick} className="menu-button">
          <MenuBar className="menu-bar-1" />
          <MenuBar className="menu-bar-2" />
          <MenuBar className="menu-bar-3" />
        </MenuButton>
        <NavBar id="menu">
          <NavList>{navlist}</NavList>
        </NavBar>
      </div>
    );
  }
}

export default Navigation;
