// In App.js in a new project

import * as React from 'react';
import Wrapper from './src/Wrapper';
import Routes from './src/Routes';
import { StatusBar } from 'react-native';
import Test from './src/Screen/Test';
function App() {
  return (
      <Wrapper>
        

        <Routes />
      </Wrapper>

  );
}

export default App;