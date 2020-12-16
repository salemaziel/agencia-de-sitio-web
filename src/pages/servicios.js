import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ServicesPage from '../components/PageComponents/Servicios/ServicesPage'

const Servicios = () => (
  <Layout>
    <SEO title="Services" />
    <ServicesPage />

  </Layout>
);

export default Servicios;
