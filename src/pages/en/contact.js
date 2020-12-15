import React from "react";
//import Homepage from '../components/PageComponents/Home/HomePage
import { Button, Jumbotron } from "react-bootstrap";
import LayoutEN from "../../components/layoutEN";
import SEO from "../../components/seo";
import { Link } from "gatsby";

import ContactPageEN from '../../components/PageComponents/en/Contact/ContactPage'

const Contact = () => (
  <LayoutEN>
    <SEO title="Contact Via Del Web US_En" />
    <ContactPageEN />

  </LayoutEN>
);

export default Contact;
