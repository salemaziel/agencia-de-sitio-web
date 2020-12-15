import React from "react";
//import Homepage from '../components/PageComponents/Home/HomePage
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Link } from "gatsby";

import HomePage from '../../components/PageComponents/Home/HomePage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />

  </Layout>
);

export default IndexPage;
