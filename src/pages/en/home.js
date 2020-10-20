import React from "react";
//import Homepage from '../components/PageComponents/Home/HomePage
import { Button, Jumbotron } from "react-bootstrap";
import LayoutEN from "../../components/layoutEN";
import SEO from "../../components/seo";
import { Link } from "gatsby";

import HomePageEN from '../../components/PageComponents/en/Home/HomePageEN'

const IndexPage = () => (
  <LayoutEN>
    <SEO title="Home US_En" />
    <HomePageEN />

  </LayoutEN>
);

export default IndexPage;
