import React from "react";

import tileStyles from "./home.module.css";

import './tiles.scss'
import { Link } from "gatsby";

const Tiles = (props) => {
  return (
    <>
      <section /*className={tileStyles.tiles}*/ className="tiles">
        {props.items.map((item, index) => (
          <article
            className={item.style ? `style${item.style}` : ""}
            key={index}
          >
            <span /*className={tileStyles.image}*/ className="image" >
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
        ))}
      </section>
    </>
  );
};

export default Tiles;
