import React from "react";

import SectionHero from "./section1Hero";
import SectionTiles from "./section2Tiles";
import SectionThree from "./sectionThree";
import FeaturesSectionZigzag from "../../FeaturesSectionZigzag";
import FeaturesSectionPic3List from "../../FeaturesSectionPic3List.js";
import CtaSectionBgImage from "../../CtaSectionBgImage";

import PricingCardsSection from '../../PricingCardsSection'

import { Helmet } from "react-helmet";

import Fade from "react-reveal/Fade";
import { navigateTo } from "gatsby";
import SectionWaves from "../../SectionWaves";

const Homepage = (props) => {
  return (
    <>
      <Helmet>
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
      </Helmet>
      <SectionWaves headline="Bienvenidos" subtitle="¿Cómo podemos ayudar te hoy?" />
      {/*<SectionHero
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600594974/rbl-art-designs/sunset-1509132_pajczh.jpg"
        headline="Bienvenidos"
        subtitle="¿Cómo podemos ayudar te hoy?"
      />*/}
      <SectionTiles
        title1="El Futuro Es Ahora."
        title2="¿Están Listos Usted y Su Empresa?"
        subdescription="Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod
      sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus
      quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam.
      Lorem ipsum dolor sit amet nullam dolore."
      />

      <FeaturesSectionZigzag
        bg=""
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
      <FeaturesSectionPic3List
        bg=""
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="https://uploads.divjoy.com/undraw-chatting_2yvo.svg"
      />
            <PricingCardsSection
        bg=""
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Pricing"
        subtitle="Choose the plan that makes sense for you. All plans include a 14-day free trial."
      />
      <CtaSectionBgImage
        bg="dark"
        textColor="white"
        size="sm"
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600837824/rbl-art-designs/smartphone-1894723_1920_yti9if.jpg"
        bgImageOpacity={0.8}
        title="Check out our products"
        subtitle=""
        buttonText="Explore"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/about");
        }}
      />
    </>
  );
};
export default Homepage;
