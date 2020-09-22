import React from "react";
import LazyHero from "react-lazy-hero";

import heroStyles from "./home.module.css";
import Typist from "react-typist";

import "react-typist/dist/Typist.css";

const SectionHero = (props) => {
  //function SectionHero(props) {
  return (
    <section style={{}}>
      <LazyHero
        /*imageSrc="https://res.cloudinary.com/dexdumfqy/image/upload/v1600594974/rbl-art-designs/sunset-1509132_pajczh.jpg"*/
        imageSrc={props.bgImage}
        isCentered={true}
        isFixed={true}
        minHeight="100vh"
        opacity={0.1}
      >
        <Typist startDelay={200}>
          <h1 style={{ color: "white", textShadow: "2px 2px 4px black" }}>
            {props.headline}
          </h1>
          <Typist.Delay ms={1000} />
          <h3
            style={{
              color: "white",
              letterSpacing: "normal",
              textShadow: "2px 2px 4px black",
            }}
          >
            {props.subtitle}
          </h3>
        </Typist>
      </LazyHero>
    </section>
  );
};

export default SectionHero;
