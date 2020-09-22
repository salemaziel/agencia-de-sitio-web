import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import "./Features4.scss";
import Fade from 'react-reveal/Fade'




function Features4(props) {
  return (
    <>
                <Fade top cascade>
      {props.items.map((item, index) => (
        <Row className="py-4 align-items-center" key={index}>
          <Col xs="auto">
            <div
              className={`Features4__icon text-${item.iconColor} d-inline-flex justify-content-center`}
            >
              {/*(<i className={`${item.iconClass}`} />*/}
              {item.listIcon}
            </div>
          </Col>
          <Col sx="auto" className="pl-4">
            <SectionHeader
              title={item.title}
              subtitle={item.description}
              size={5}
              spaced={false}
              className="mb-0"
            />
          </Col>
        </Row>
      ))}
      </Fade>
    </>
  );
}

export default Features4;
