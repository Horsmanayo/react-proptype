import React from "react";
import PropTypes from "prop-types";

const Header = ({ header, headerColor }) => (
  <h1 style={{ color: headerColor }}>{header}</h1>
);

Header.propTypes = {
  header: PropTypes.string,
  headerColor: PropTypes.string,
};

export default Header;
