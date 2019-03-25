import * as React from 'react';

import './example.module.scss';

interface HelloProps {
  name: string;
}

const Hello = ({
  name,
}: HelloProps): JSX.Element => (
  <h1 styleName="example">
    Hello from { name }!
  </h1>
);

Hello.defaultProps = {
  name: 'TSX',
};

export default Hello;
