import React from "react";

import SectionHero from "./section1Hero";
import SectionTiles from "./section2Tiles";
import SectionThree from "./sectionThree";
import FeaturesSectionZigzag from "../../FeaturesSectionZigzag";
import FeaturesSectionPic3List from "../../FeaturesSectionPic3List.js";
import CtaSectionBgImage from "../../CtaSectionBgImage";


import Fade from "react-reveal/Fade";
import { navigateTo } from "gatsby";

const Homepage = (props) => {
  return (
    <>
      <SectionHero
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600594974/rbl-art-designs/sunset-1509132_pajczh.jpg"
        headline="Bienvenidos"
        subtitle="¿Cómo podemos ayudar te hoy?"
      />
      <SectionTiles
        title1="Erat ut Sapien, mus curae, morbi dictum duis"
        title2="aenean auctor at Dictum."
        subdescription="Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod
      sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus
      quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam.
      Lorem ipsum dolor sit amet nullam dolore."
      />

      <FeaturesSectionZigzag
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
      <FeaturesSectionPic3List
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="https://uploads.divjoy.com/undraw-chatting_2yvo.svg"
      />
            <CtaSectionBgImage
        bg="dark"
        textColor="light"
        size="sm"
        bgImage="https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg"
        bgImageOpacity={0.8}
        title="Check out our products"
        subtitle=""
        buttonText="Explore"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/about");
        }}
      />
    </>
  );
};
export default Homepage;
