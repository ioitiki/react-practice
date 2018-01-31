import React from 'react';
import Error404 from './Error404';
import Home from './Home';
import About from './About';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route component={Error404} />
      </Switch>
    </div>
  );

}

export default App;
