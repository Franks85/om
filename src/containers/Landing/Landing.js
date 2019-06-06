import React, { Component } from "react";
import Header from '../../containers/Landing/Header/Header';
import HouseSection from './houseSection/houseSection';
import InterSection from './interSection/interSection';
import RoomsSection from './roomsSection/roomsSection';
import ContactSection from './contactSection/contactSection';
import MapPopup from './mapPopup/mapPopup';

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <HouseSection />
        <InterSection />
        <RoomsSection />
        <ContactSection />
        <MapPopup />
      </div>
    );
  }
}

export default Landing;


