import * as React from 'react';

interface HelloProps {
  name: string;
}

const Hello = ({ name }: HelloProps): JSX.Element => (
  <h1>Hello from { name }!</h1>
);

export default Hello;
