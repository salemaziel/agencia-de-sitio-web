import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import NavbarCustomEN from "./NavbarCustomEN";

import headerStyles from "./header.module.css";

const HeaderEN = ({ siteTitle }) => (
  <>
  <div style={{
    position: 'fixed',
    width: '100%',
    height: 'auto',
    zIndex: '99'
  }}>
      <NavbarCustomEN />
      </div>
  </>
);

HeaderEN.propTypes = {
  siteTitle: PropTypes.string,
};

HeaderEN.defaultProps = {
  siteTitle: ``,
};

export default HeaderEN;
