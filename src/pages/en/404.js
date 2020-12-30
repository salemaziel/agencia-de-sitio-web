import React from "react";

import LayoutEN from "../../components/layoutEN";
import OldSEO from "../../components/old-seo";

class NotFoundPageEN extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return(
  <LayoutEN location={this.props.location} title={siteTitle}>
    <OldSEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutEN>
);
    }
  }

export default NotFoundPageEN;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`