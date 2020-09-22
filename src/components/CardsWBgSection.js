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
              headerImage: "https://source.unsplash.com/pe_R74hldW4/1080x360",
              avatarImage: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "Salem Aziel",
              role: "Web & App Development",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
            },
            {
              headerImage: "https://source.unsplash.com/uwPBAlQyIag/1080x360",
              avatarImage: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "DaeHyun Yoo",
              role: "Designer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
            },
            {
              headerImage: "https://source.unsplash.com/pJ_DCj9KswI/1080x360",
              avatarImage: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "Christian Tuna",
              role: "Sales",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default CardsWBgSection;
