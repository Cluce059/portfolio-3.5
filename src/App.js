import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
//import Navbar2 from './components/Navbar2';
import Footer from './components/Footer/Footer';
import NoMatch from './pages/NoMatch';
import MyWork from'./pages/MyWork';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/mywork' component={MyWork}/>
          <Route exact path='/Contact' component={ContactPage}/>
          <Route component={NoMatch} />
          </Switch>
        </Router>
     <Footer />
    </>
  )
};

export default App;