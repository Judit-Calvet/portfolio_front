import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import Navigation from './components/Navigation'
import Home from './components/Home'
import Work from './components/Work'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <Router>
      <Navigation/>  
      <Route path="/" component={Home}/>
      <Route path="/about/" component={About}/> 
      <Route path="/contact/" component={Contact}/> 
      <Route path="/work/" component={Work}/> 
    </Router>
  );
}  
export default App;
