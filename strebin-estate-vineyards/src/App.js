import React from 'react';
import logo from './logo.svg';
import {FaXbox} from "react-icons/fa";
import Navigation from './components/Navigation';
import Breadcrumbs from './components/Breadcrumbs';
import './App.css';

function App() {

  const username = 'collinlidstrom';

  return (
    <div className="App">
      <Navigation username={username}/>
      <Breadcrumbs/>
      <header className="App-header">
        <FaXbox className="App-logo" size='200px'/>
        <p>
          &nbsp; &nbsp;
        </p>
        <footer>
          <code>developed by collinlidstrom</code>
        </footer>
      </header>
    </div>
  );
}

export default App;
