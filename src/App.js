import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/Navbar';
//import Navbar2 from './components/Navbar2';
import Footer from './components/Footer/Footer';
import NoMatch from './pages/NoMatch';
import AboutPage from'./pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/About" component={AboutPage}/>
          <Route exact path="/Contact" component={ContactPage}/>
          <Route component={NoMatch} />
          </Switch>
          </div>
        </Router>
     <Footer />
    </>
  )
};

export default App;
