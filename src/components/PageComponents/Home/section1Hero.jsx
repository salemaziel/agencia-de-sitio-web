import React from "react";
import LazyHero from "react-lazy-hero";

import heroStyles from "./home.module.css";
import Typist from "react-typist";

//import "react-typist/dist/Typist.css";

import ParticlesImage from '../../ParticlesImage'
import Row from "react-bootstrap/Row";

import PhoneSVG from '../../../images/iphone-160307.svg'

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
          {/*<ParticlesImage />*/}
          {/*<div
       className="someClassName"
       style={{ backgroundImage: `url(${PhoneSVG})`, backgroundOrigin: 'center center', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', minHeight: '650px' }}
          > */}
          {/*<img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600820219/rbl-art-designs/iphone-160307_fshiye.svg" alt='' />*/}
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
          {/*</div>*/}
      </LazyHero>
    </section>
  );
};

export default SectionHero;
