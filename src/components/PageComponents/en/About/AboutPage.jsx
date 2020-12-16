import React from "react";

import Banner from "../../../banner";
import FaqSimpleSection from "../../../FaqSimpleSection";
import SectionIntro from './Section1Intro'
import CardsWBgSection from "../../../CardsWBgSection";
import CtaSectionBgImage from '../../../CtaSectionBgImage'
import {navigateTo, Link} from 'gatsby'
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutPageEN = (props) => {
  return (
    <>
      <Banner bgImage="" />
      <SectionIntro
        bg=""
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={0.8}
        title="About Via Del Web"
        subtitle=""
        description1="Starting with only one customer, we have blossomed into a full-service digital marketing agency. Although we have grown exponentially and expanded significantly over the last several years, we're stuck to the same core values that helped us cater to our customers' needs from day one."
        description2="We strive to provide effective marketing strategies to companies that range in a variety of size and industry. Regardless of your business, there's always room for marketing services. Allow us to surge the presence of your brand through web design, SEO, and ad campaigns. We offer proven digital marketing solutions, and we'll continue to do so, so get started today!"
      />
      <Container>
        <Row className="justify-content-center mt-3 mb-5">
        <Col xs={10} lg={4}>
            <Button as={Link} to="/en/contact" className="d-block py-2 px-4">Schedule A Call</Button>
          </Col>
        </Row>
      </Container>
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
            <CtaSectionBgImage
        bg="dark"
        textColor="white"
        size="sm"
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600837824/rbl-art-designs/smartphone-1894723_1920_yti9if.jpg"
        bgImageOpacity={0.8}
        title="Schedule A Call"
        subtitle=""
        buttonText="Get Started"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/contact");
        }}
      />
    </>
  );
};

export default AboutPageEN;
