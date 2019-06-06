import React, { Component } from "react";
import styled from "styled-components";
import Service from "../../components/Rooms/service";
import { media } from "../../styledComponents/mediaQueryHelper";
import { NavBar, NavBarHeading } from "../../styledComponents/styledComponents";
import { imgData } from "./imagesData";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ic_account_balance } from "react-icons-kit/md/ic_account_balance";
import { ic_cached } from "react-icons-kit/md/ic_cached";
import { ic_local_parking } from "react-icons-kit/md/ic_local_parking";
import { ic_free_breakfast } from "react-icons-kit/md/ic_free_breakfast";
import { bath } from "react-icons-kit/fa/bath";
import { magic } from "react-icons-kit/fa/magic";
import Navigation from "../../components/Navigation/mobileNavigation";

const Wrapper = styled.div``;

const ContentBox = styled.div`
  margin: 5rem;
  ${media.lessThan("phone")`
    margin: 3rem;
  `};
`;

const ServiceBox = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-items: center;
  align-content: start;
  grid-gap: 6rem;
  background-color: #e7fffd;
  padding: 5rem;
  ${media.lessThan("phone")`
    margin-top: 2rem;
  `};
`;

class Rooms extends Component {
  render() {
    return (
      <Wrapper>
        <Navigation />
        <NavBar>
          <NavBarHeading>Camere</NavBarHeading>
        </NavBar>
        <ContentBox>
          <div className="image-gallery">
            <ImageGallery items={imgData} />
          </div>
          <ServiceBox>
            <Service
              icon={ic_free_breakfast}
              title="Breakfast"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
            />
            <Service
              icon={magic}
              title="Room Cleaning"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
            />
            <Service
              icon={ic_cached}
              title="Linen Change"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
            />
            <Service
              icon={bath}
              title="Private Bathroom"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
            />
            <Service
              icon={ic_local_parking}
              title="Parking"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
            />
            <Service
              icon={ic_account_balance}
              title="City Info"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
            />
          </ServiceBox>
        </ContentBox>
      </Wrapper>
    );
  }
}

export default Rooms;
