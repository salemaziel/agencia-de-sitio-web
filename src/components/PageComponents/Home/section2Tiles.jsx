import React from "react";

import sectiontileStyles from "./sectionTiles.module.css";

import Tiles from "./tiles";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";

const SectionTiles = (props) => {
  return (
    <>
      <section className={sectiontileStyles.sectionTiles}>
        <Container fluid>
          <div className="inner">
            <Fade top cascade>
              <header>
                <h1>{props.title1}</h1>
                <h1> {props.title2}</h1>
                <p>{props.subdescription}</p>
              </header>
            </Fade>
            <Tiles
              items={[
                {
                  imgSrc:
                    "https://res.cloudinary.com/dexdumfqy/image/upload/v1600837299/rbl-art-designs/create-a-website_npy4v8.png",
                  imgAlt: "image",
                  link: "/#",
                  title: "Crear Una Página Web",
                  description:
                    "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                  style: "1",
                },
                {
                  imgSrc:
                    "https://res.cloudinary.com/dexdumfqy/image/upload/v1600836930/rbl-art-designs/app-store-1174440_1920-square_kywhnk.jpg",
                  imgAlt: "image",
                  link: "/#",
                  title: "Crear Una App",
                  description:
                    "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                  style: "2",
                },
                {
                  imgSrc:
                    "https://res.cloudinary.com/dexdumfqy/image/upload/v1600837492/rbl-art-designs/laptop-3174729_1200-square_luhksj.jpg",
                  imgAlt: "image",
                  link: "/#",
                  title: "Otras Soluciones Tecnológicas",
                  description:
                    "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                  style: "3",
                },
                {
                  imgSrc:
                    "https://res.cloudinary.com/dexdumfqy/image/upload/v1600849775/rbl-art-designs/consultation-1281-square_rh27uu.jpg",
                  imgAlt: "image",
                  link: "/#",
                  title: "Servicios De Asesoramiento",
                  description:
                    "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                  style: "4",
                },
              ]}
            />

            {/*<section className={sectiontileStyles.tiles}>
            <article className={sectiontileStyles.style1}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Magna</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className={sectiontileStyles.style2}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Lorem</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className={sectiontileStyles.style3}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Feugiat</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
            </article>
            {/*<article className={sectiontileStyles.style4}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Tempus</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className={sectiontileStyles.style5}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Aliquam</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className={sectiontileStyles.style6}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Veroeros</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className={sectiontileStyles.style2}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Ipsum</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className={sectiontileStyles.style3}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Dolor</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className={sectiontileStyles.style1}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Nullam</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className={sectiontileStyles.style5}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Ultricies</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className={sectiontileStyles.style6}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Dictum</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
            </article>
            <article className={sectiontileStyles.style4}>
              <span className={sectiontileStyles.image}>
                <img
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg"
                  alt
                />
              </span>
              <a href="generic.html">
                <h2>Pretium</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </a>
  </article>* /}
          </section>*/}
          </div>
        </Container>
      </section>
    </>
  );
};

export default SectionTiles;
