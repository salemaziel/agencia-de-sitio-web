import React from "react";
//import Homepage from '../components/PageComponents/Home/HomePage
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import FAQPage from '../components/PageComponents/FAQ/FAQPage'

const IndexPage = () => (
  <Layout>
    <SEO title="FAQ" />
    <FAQPage />

  </Layout>
);

export default IndexPage;
