import React from "react";

import SectionHero from "./section1Hero";
import SectionTiles from "./section2Tiles";
import SectionThree from "./sectionThree";
import FeaturesSectionZigzag from "../../../FeaturesSectionZigzag";
import FeaturesSectionPic3List from "../../../FeaturesSectionPic3List.js";
import CtaSectionBgImage from "../../../CtaSectionBgImage";

import PricingCardsSection from "../../../PricingCardsSection";
import CardsHomeSection from "../../../CardsHomeSection";
import HeroSectionTxtBtnRight from "../../../HeroSectionTxtBtnRight";
import { Helmet } from "react-helmet";

import Fade from "react-reveal/Fade";
import { navigateTo } from "gatsby";
import SectionWavesEN from "../../../SectionWavesEN";

const HomepageEN = (props) => {
  return (
    <>
      <SectionWavesEN
        headline="Welcome"
        subtitle="How Can We Help You Today?"
      />
      {/*<SectionHero
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600594974/rbl-art-designs/sunset-1509132_pajczh.jpg"
        headline="Bienvenidos"
        subtitle="¿Cómo podemos ayudar te hoy?"
      />*/}
      <SectionTiles
        title1="Automation, Apps, and WebApps are Here."
        title2="Is Your Business Using Them To Your Advantage?"
        subdescription="Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod
      sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus
      quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam.
      Lorem ipsum dolor sit amet nullam dolore."
      />
      <Fade top>
        <CardsHomeSection
          bg=""
          textColor="dark"
          size="sm"
          bgImage=""
          bgImageOpacity={1}
          title=""
          subtitle=""
        />
      </Fade>

      <FeaturesSectionZigzag
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Funcionalidades"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
      <Fade top>
        <HeroSectionTxtBtnRight
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={0.8}
          title="Get Online"
          subtitle="Our digital marketing agency can assist you with all your marketing needs. All the way from search engine optimization campaigns, to customized PPC campaigns and even website design solutions."
          description1=""
          description2=""
          description3=""
          description4=""
          description5=""
          description6=""
          description7=""
          buttonText="Get Started"
          buttonColor="primary"
          image="https://res.cloudinary.com/dexdumfqy/image/upload/v1600836618/rbl-art-designs/digital-marketing-1433427_1920_ikotj9.jpg"
          link="/en/contact"
          /*buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/");
        }}*/
        />
      </Fade>
      <FeaturesSectionPic3List
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="https://uploads.divjoy.com/undraw-chatting_2yvo.svg"
      />
      {/*<PricingCardsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Pricing"
        subtitle="Choose the plan that makes sense for you. All plans include a 14-day free trial."
      />*/}
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
export default HomepageEN;
