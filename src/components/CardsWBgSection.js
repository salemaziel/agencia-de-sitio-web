import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TeamBios2 from "./TeamBios2";

function CardsWBgSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <TeamBios2
          items={[
            {
              headerImage: "https://res.cloudinary.com/dexdumfqy/image/upload/v1599804800/salemaziel.com/me/terminal-2-640x287_kncwse.jpg",
              avatarImage: "https://res.cloudinary.com/dexdumfqy/image/upload/v1600838928/rbl-art-designs/salem-crop_mjbf56.png",
              name: "Salem Aziel",
              role: "Web & App Development, Digital Consultant, Project Management",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
            },
            {
              headerImage: "https://res.cloudinary.com/dexdumfqy/image/upload/v1600836482/rbl-art-designs/camera-2598507_1920_bbrgjn.jpg",
              avatarImage: "https://res.cloudinary.com/dexdumfqy/image/upload/v1600838742/rbl-art-designs/dae-square_mnfqeg.jpg",
              name: "DaeHyun Yoo",
              role: "Graphic Design, Photography, Videography",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
            },
            {
              headerImage: "https://res.cloudinary.com/dexdumfqy/image/upload/v1600836618/rbl-art-designs/digital-marketing-1433427_1920_ikotj9.jpg",
              avatarImage: "https://rosieshouse.org/wp-content/uploads/2016/06/avatar-large-square-300x300.jpg",
              name: "Uriel Aguilar",
              role: "Sales, Marketing, Project Management",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default CardsWBgSection;
