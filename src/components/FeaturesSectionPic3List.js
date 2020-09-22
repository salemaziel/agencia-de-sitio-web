import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Features4 from "./Features4";
import "./FeaturesSectionPic3List.scss";

import {
  MdChat,
  MdGamepad,
  MdMonetizationOn
} from 'react-icons/md'


//function FeaturesSectionPic3List(props) {
  const FeaturesSectionPic3List = (props) => {
return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-left">
            <figure className="FeaturesSectionPic3List__image-container mx-auto">
              <Image src={props.image} fluid={true} />
            </figure>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            <Features4
              items={[
                {
                  title: "Chat",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  listIcon: "",
                  iconColor: "primary",
                },
                {
                  title: "Play",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  listIcon: "",
                  iconColor: "danger",
                },
                {
                  title: "Hustle",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  listIcon:"",
                  iconColor: "dark",
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default FeaturesSectionPic3List;
