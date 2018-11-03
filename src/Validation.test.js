// Description	
// Email validation based on Rob Eberhardt's (Thanks, Rob!) email expression, but allows single letter subdomains...
// Matches	
// bob@smith.com | bob@j.smith.museum | bob.smith@a-1.smith.com
// Non-Matches	
// bob@.com | bob@-a.smith.com


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
