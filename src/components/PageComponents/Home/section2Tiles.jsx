import React from "react";

import sectiontileStyles from "./home.module.css";

import Tiles from './tiles'

const SectionTiles = (props) => {
  return (
    <>
      <section className={sectiontileStyles.sectionTiles}>
        <div className="inner">
          <header>
            <h1>
              Erat ut Sapien, mus curae, morbi dictum duis
              <br />
              aenean auctor at Dictum.
            </h1>
            <p>
              Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod
              sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus
              quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam.
              Lorem ipsum dolor sit amet nullam dolore.
            </p>
          </header>
          <Tiles
            items={[
              {
                imgSrc:
                  "https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg",
                imgAlt: "image",
                link: "/",
                title: "Magna",
                description:
                  "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                style: "1",
              },
              {
                imgSrc:
                  "https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg",
                imgAlt: "image",
                link: "/",
                title: "Magna",
                description:
                  "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                style: "2",
              },
              {
                imgSrc:
                  "https://res.cloudinary.com/dexdumfqy/image/upload/v1600734136/rbl-art-designs/pic01_ofmcp4.jpg",
                imgAlt: "image",
                link: "/",
                title: "Magna",
                description:
                  "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                style: "3",
              },
            ]}
          />

          <section className={sectiontileStyles.tiles}>
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
  </article>*/}
          </section>
        </div>
      </section>
    </>
  );
};

export default SectionTiles;