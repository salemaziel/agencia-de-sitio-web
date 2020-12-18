import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
import "./Cards.scss";
import {Link} from 'gatsby'

function Cards(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col
          xs={12}
          md={6}
          lg={4}
          className="py-3 d-flex align-items-stretch"
          key={index}
        >
         
          <Card style={{borderColor: '#217ebd'}} >
            <AspectRatio ratio={3 / 1}>
              <Image src={item.headerImage} fluid={true} />
            </AspectRatio>
            <Card.Body className="d-flex flex-column text-center align-items-center p-4">
            <div className="Cards__avatar-wrapper">
                <Image src={item.iconImage} alt={item.stepTitle} height="128px" />
              </div>
              <h6 className="font-weight-bold mb-2 mt-3">{item.stepNumber}</h6>
              <p style={{fontSize: '1.5rem', color: '#217ebd'}} className="font-weight-bold">{item.stepTitle}</p>
              <Card.Text className="mt-2">{item.stepDescription}</Card.Text>
              <Card.Text className="" >
              <Link to={item.link} rel="preload" style={{color: '#217ebd', fontWeight: 'bolder'}}>{item.linkText} → </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
