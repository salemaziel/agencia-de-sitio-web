import React from "react";

//import SectionOne from "./sectionOne";
//import SectionTwo from "./sectionTwo";
//import SectionThree from "./sectionThree";

import Banner from "../../banner";
import SectionTiles from '../Home/section2Tiles'

import Rgallery from "../../Rgallery";

const ServicesPage = (props) => {
  return (
    <>
      <Banner bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600594974/rbl-art-designs/sunset-1509132_pajczh.jpg" />
      <SectionTiles
        title1="El Futuro Es Ahora."
        title2="¿Están Listos Usted y Su Empresa?"
        subdescription=""
      />

      <Rgallery />
    </>
  );
};

export default ServicesPage;
