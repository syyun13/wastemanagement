import React from 'react';
import Topbar from './components/Topbar'
import Content from './components/Content'
import Result from './components/Result'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Topbar />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;