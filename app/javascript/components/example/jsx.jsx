import React from 'react';
import PropTypes from 'prop-types';

import './example.module.scss';

const Hello = ({
  name,
}) => (
  <h1 styleName="example">
    Hello from { name }!
  </h1>
);

Hello.defaultProps = {
  name: 'JSX',
};

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;
