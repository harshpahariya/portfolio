import React from 'react';
import MyLayout from './components/Layout';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <MyLayout />
      </Router>
  );
}

export default App;
