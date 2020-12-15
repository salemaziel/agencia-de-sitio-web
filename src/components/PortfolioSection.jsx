import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Rgallery from './Rgallery'

const PortfolioSection = (props) => {
  return (
    <>
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      >
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Rgallery />


      </Section>
    </>
  );
};


export default PortfolioSection