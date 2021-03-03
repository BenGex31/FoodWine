import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Footer from './Layout/Footer';
import Header from "./Layout/Header";
import Routing from './Navigation/Routing';

function App() {
  return (
    <Router>
      <Header />
        <Routing />
      <Footer />
    </Router>
  );
}

export default App;
