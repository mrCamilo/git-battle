import React from 'react';
//import ReactRouter from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from '../Battle/Battle';
import Scoreboard from '../Scoreboard/Scoreboard';
import Results from '../Battle/Results';
import Search from '../Search/Search';
import Contact from '../Contact/Contact';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route exact path="/scoreboard" component={Scoreboard} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/battle/results" component={Results} />
            <Route path="/search" component={Search} />
            <Route
              render={function() {
                return <p>Page Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
