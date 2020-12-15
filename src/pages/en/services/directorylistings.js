import React from "react";
//import Homepage from '../components/PageComponents/Home/HomePage
import { Button, Jumbotron } from "react-bootstrap";
import LayoutEN from "../../../components/layoutEN";
import SEO from "../../../components/seo";
import { Link } from "gatsby";
import DirectoryListingsPage from '../../../components/PageComponents/en/Services/DirectoryListing/DirectoryListingsPage'


const DirectoryListings = () => (
  <LayoutEN>
    <SEO title="Directory Listings" />
    <DirectoryListingsPage />

  </LayoutEN>
);

export default DirectoryListings;
