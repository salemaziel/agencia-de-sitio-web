import React from "react";
//import Homepage from '../components/PageComponents/Home/HomePage
import { Button, Jumbotron } from "react-bootstrap";
import LayoutEN from "../../../components/layoutEN";
import SEO from "../../../components/seo";
import { Link } from "gatsby";
import ContentMarketingPage from '../../../components/PageComponents/en/Services/ContentMarketing/ContentMarketingPage'


const ContentMarketing = () => (
  <LayoutEN>
    <SEO title="Content Marketing" />
    <ContentMarketingPage />

  </LayoutEN>
);

export default ContentMarketing;


