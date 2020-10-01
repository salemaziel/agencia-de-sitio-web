import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import { LinkContainer } from "react-router-bootstrap";
import {
  FaCheck
} from 'react-icons/fa'
import {Link} from 'gatsby'
//import { useAuth } from "./../util/auth.js";
import "./Pricing.scss";

function Pricing(props) {
//  const auth = useAuth();

  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col
          md={12}
          lg={4}
          className="py-3 d-flex align-items-stretch"
          key={index}
        >
          <Card className="w-100">
            <Card.Body className="d-flex flex-column p-3">
              
              <h5 className="font-weight-bold mb-4">{item.name}</h5>
              <h1 className="font-weight-bold mb-3">
                ${item.price}
                <small className="Pricing__period">/mo</small>
              </h1>

              {item.descriptionTop && (
                <Card.Text className="mb-4">
                  
                  {item.descriptionTop}</Card.Text>
              )}

              {item.perks && (
                <Card.Text className="mt-2">
                  <ul className="list-unstyled">
                    {item.perks.map((perk, index) => (
                      <li className="py-1" key={index}>
                        <Row>
                        <Col xs={2}>
                        <FaCheck className="text-success mr-3" />
                        </Col>
                        <Col>
                        {perk}
                        </Col>
                        </Row>
                      </li>
                    ))}
                  </ul>
                  <Col>
                  {item.descriptionBottom}
                  </Col>
                </Card.Text>
              )}

              <Link
                to="/auth/signup?next=/purchase/${item.id}"
                
              >
                <Button
                  variant="primary"
                  size="lg"
                  block={true}
                  className="mt-auto"
                >
                  {props.buttonText}
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Pricing;
