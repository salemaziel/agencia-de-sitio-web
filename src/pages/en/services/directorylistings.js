import React from "react";

import LayoutEN from "../../../components/layoutEN";
import SEO from "../../../components/seo";
import DirectoryListingsPage from '../../../components/PageComponents/en/Services/DirectoryListing/DirectoryListingsPage'


const DirectoryListings = () => (
  <LayoutEN>
    <SEO title="Directory Listings" />
    <DirectoryListingsPage />

  </LayoutEN>
);

export default DirectoryListings;
