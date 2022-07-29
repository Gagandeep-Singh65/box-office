import React from 'react';
/*eslint-disable*/
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    // this switch can be assumed to be similar to JS switch
    // as when the route path is exact it is rendered otherwise
    // the default route is rendered
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>
      <Route exact path="/starred">
        This is starred
      </Route>
      <Route>This is 404 page</Route>
    </Switch>
  );
}

export default App;
