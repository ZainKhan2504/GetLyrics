import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
// Components
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import Landing from "./components/layout/Landing";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/index" component={Index} />
              <Route exact path="/index/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
