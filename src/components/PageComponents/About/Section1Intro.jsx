import React from "react";

import Section from "../../Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "../../SectionHeader";

const SectionIntro = (props) => {
  return (
    <>
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      >
        <Container className="text-center mb-2 mt-4">
          <Row className="justify-content-center align-items-center">
            <Col /*xs={12}* / md="auto" */ className="py-3 px-1">
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                size={1}
                spaced={false}
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default SectionIntro;
