import React from "react";

import LayoutEN from "../components/layoutEN";
import SEO from "../components/seo";

import HomePage from '../components/PageComponents/en/Home/HomePageEN'

const IndexPage = () => (
  <LayoutEN>
    <SEO title="Home" />
    <HomePage />

  </LayoutEN>
);

export default IndexPage;
