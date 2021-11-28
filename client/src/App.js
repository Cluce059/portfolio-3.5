import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import NoMatch from './pages/NoMatch';
import Projects from'./pages/Projects';

function App() {
  return (
    <>
      <Navbar />
        <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Projects' component={Projects}/>
          <Route component={NoMatch} />
          </Switch>
        </Router>
     <Footer />
    </>
  )
};

export default App;
