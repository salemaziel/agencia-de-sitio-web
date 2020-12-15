import React from "react";
//import Homepage from '../components/PageComponents/Home/HomePage
import { Button, Jumbotron } from "react-bootstrap";
import LayoutEN from "../../../components/layoutEN";
import SEO from "../../../components/seo";
import { Link } from "gatsby";

import WebsiteDesignPage from '../../../components/PageComponents/en/Services/WebsiteDesign/WebsiteDesignPage.jsx'



const WebsiteDesign = () => (
  <LayoutEN>
    <SEO title="Website Design" />
    <WebsiteDesignPage />

  </LayoutEN>
);

export default WebsiteDesign;
