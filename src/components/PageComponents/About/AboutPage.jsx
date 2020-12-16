import React from "react";
import Banner from "../../banner";
import FaqSimpleSection from "../../FaqSimpleSection";
import SectionIntro from './Section1Intro'
import CardsWBgSection from "../../CardsWBgSection";

const AboutPage = (props) => {
  return (
    <>
      <Banner bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600594974/rbl-art-designs/sunset-1509132_pajczh.jpg" />
      <SectionIntro
        bg=""
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={0.8}
        title="Quienes Somos"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo."
      />
      <div style={{backgroundImage: 'url(https://res.cloudinary.com/dexdumfqy/image/upload/v1600848134/rbl-art-designs/circle-dots-background_npogwh.svg)'}} >
      <CardsWBgSection
        bg=""
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      </div>

      <FaqSimpleSection
        bg=""
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Preguntas Frecuentes"
        subtitle=""
      />
    </>
  );
};

export default AboutPage;
