import React from "react";

//import SectionOne from "./sectionOne";
//import SectionTwo from "./sectionTwo";
//import SectionThree from "./sectionThree";

import Banner from "../../banner";
import SectionTiles from '../Home/section2Tiles'
import CtaSectionBgImage from '../../../CtaSectionBgImage'
import {navigateTo} from 'gatsby'


import Rgallery from "../../Rgallery";

const ServicesPage = (props) => {
  return (
    <>
      <Banner bgImage="" />
      <SectionTiles
        title1="El Futuro Es Ahora."
        title2="¿Están Listos Usted y Su Empresa?"
        subdescription=""
      />

      <Rgallery />

<CtaSectionBgImage
bg="dark"
textColor="white"
size="sm"
bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600837824/rbl-art-designs/smartphone-1894723_1920_yti9if.jpg"
bgImageOpacity={0.8}
title="Schedule A Consultation"
subtitle=""
buttonText="Get Started"
buttonColor="primary"
buttonOnClick={() => {
// Navigate to pricing page
navigateTo("/about");
}}
/>
    </>
  );
};

export default ServicesPage;
