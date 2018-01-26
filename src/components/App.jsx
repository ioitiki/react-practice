import React from 'react';
import Error404 from './Error404';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
