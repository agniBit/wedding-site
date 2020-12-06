import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        {/* <img className='bdr' src='./images/index_v.png' /> */}
          <Route path='/' exact component={Home} />
      </Router>
    </>
  );
}

export default App;