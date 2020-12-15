import React from "react";
//import Homepage from '../components/PageComponents/Home/HomePage
import { Button, Jumbotron } from "react-bootstrap";
import LayoutEN from "../../components/layoutEN";
import SEO from "../../components/seo";
import { Link } from "gatsby";

import AboutPageEN from '../../components/PageComponents/en/About/AboutPage'

const AboutPage = () => (
  <LayoutEN>
    <SEO title="About Via Del Web US_En" />
    <AboutPageEN />

  </LayoutEN>
);

export default AboutPage;
