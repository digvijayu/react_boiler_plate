import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SomePage from './pages/SomePage';
import { HashRouter } from 'react-router-dom';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header>
            <Navigation />
          </header>
          <div className="mt-5">
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
