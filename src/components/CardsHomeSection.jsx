import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Cards from "./Cards";

function CardsHomeSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container fluid>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Cards
          items={[
            {
              headerImage: "",
              iconImage: "https://lirp-cdn.multiscreensite.com/58f4193e/dms3rep/multi/opt/step1-1920w.png",
              stepNumber: "Step 1",
              stepTitle: "Schedule A Call",
              stepDescription:
                "Get in touch with us! You're only a phone call away from improving your company's exposure.",
              link: "/en/contact",
              linkText: "Schedule Your Call",
            },
            {
              headerImage: "",
              iconImage: "https://lirp-cdn.multiscreensite.com/58f4193e/dms3rep/multi/opt/step2-1920w.png",
              stepNumber: "Step 2",
              stepTitle: "Get Your Plan",
              stepDescription:
                "Browse through all the digital services we have to offer and choose the option that's right for you!",
                link: "/en/contact",
                linkText: "Get Your Plan",


            },
            {
              headerImage: "",
              iconImage: "https://lirp-cdn.multiscreensite.com/58f4193e/dms3rep/multi/opt/step3-1920w.png",
              stepNumber: "Step 3",
              stepTitle: "Win Online",
              stepDescription:
                "Take charge of all search engines and business listings with our all-in-one marketing solutions!",
                link: "/en/contact",
                linkText: "Start Winning Online",


            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default CardsHomeSection;
