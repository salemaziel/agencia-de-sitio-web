import React from "react";

import tileStyles from "./home.module.css";

import "./tiles.scss";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Tiles = (props) => {
  return (
    <>
      <Fade top cascade>
        <section /*className={tileStyles.tiles}*/ className="tiles">
          <Row className="justify-content-center">
          {props.items.map((item, index) => (
            <Col xs={12} md={6} lg={3} className="py-3" key={index}>
            <article
              className={item.style ? `style${item.style}` : ""}
              /*key={index}*/
            >
              <span /*className={tileStyles.image}*/ className="image">
                <img
                  /*src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"*/
                  src={item.imgSrc}
                  alt={item.imgAlt}
                />
              </span>
              <Link to={item.link}>
                <h2>{item.title}</h2>
                <div className="content">
                  {/*<p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>*/}
                  <p>{item.description}</p>
                </div>
              </Link>
            </article>
            </Col>
          ))}
          </Row>
        </section>
      </Fade>
    </>
  );
};

export default Tiles;
