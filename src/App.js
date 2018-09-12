import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SomePage from './pages/SomePage';
import { Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/somepage">Roster</Link>
                </li>
              </ul>
            </nav>
          </header>
          <div>
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/somepage" component={SomePage} />
              </Switch>
            </main>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
