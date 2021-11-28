import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Home from './pages/Home';
import Project from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Projects' component={Projects}/>
          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
    <Footer />
    </ApolloProvider>
  )
};

export default App;
