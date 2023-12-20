// In App.js in a new project

import * as React from 'react';
import Wrapper from './src/Wrapper';
import Routes from './src/Routes';
function App() {
  return (
    <React.StrictMode>
      <Wrapper>
        <Routes />
      </Wrapper>

    </React.StrictMode>
  );
}

export default App;