import React from "react";
import ContactSection from "../Landing/contactSection/contactSection";
import Navigation from "../../components/Navigation/mobileNavigation";
import { NavBar, NavBarHeading } from "../../styledComponents/styledComponents";

const Contatcts = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Navigation />
      <NavBar>
        <NavBarHeading>Contatti</NavBarHeading>
      </NavBar>
      <ContactSection />
    </div>
  );
};

export default Contatcts;
