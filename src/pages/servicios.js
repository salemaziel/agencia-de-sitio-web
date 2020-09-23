import React from "react";
//import Homepage from '../components/PageComponents/Home/HomePage
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import ServicesPage from '../components/PageComponents/Servicios/ServicesPage'

const Servicios = () => (
  <Layout>
    <SEO title="Services" />
    <ServicesPage />

  </Layout>
);

export default Servicios;
