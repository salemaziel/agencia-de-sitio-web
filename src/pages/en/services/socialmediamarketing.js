import React from "react";
//import Homepage from '../components/PageComponents/Home/HomePage
import { Button, Jumbotron } from "react-bootstrap";
import LayoutEN from "../../../components/layoutEN";
import SEO from "../../../components/seo";
import { Link } from "gatsby";
import SMMPage from "../../../components/PageComponents/en/Services/SocialMediaMarketing/SMMPage";


const SocialMediaMarketing = () => (
  <LayoutEN>
    <SEO title="Social Media Marketing" />
    <SMMPage />

  </LayoutEN>
);

export default SocialMediaMarketing;
