import ReactRailsUJS from 'react_ujs';

const componentRequireContext = require.context('public', true);
ReactRailsUJS.useContext(componentRequireContext);
