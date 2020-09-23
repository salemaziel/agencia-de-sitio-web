import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import Fade from 'react-reveal/Fade'


function CtaSectionBgImage(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center mb-5 mt-5">
        <Row className="justify-content-center align-items-center">
          <Fade top cascade>
          <Col xs={12} md="auto" className="py-3 px-4">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={false}
            />
          </Col>
          <Col xs={12} md="auto" className="py-3 px-4">
            <Button
              variant={props.buttonColor}
              size="lg"
              onClick={props.buttonOnClick}
              style={{
                background: 'rgba(37, 121, 188)',
                backgroundColor: 'rgba(37, 121, 188)'
              }}
            >
              {props.buttonText}
            </Button>
          </Col>
          </Fade>
        </Row>
      </Container>
    </Section>
  );
}

export default CtaSectionBgImage;
