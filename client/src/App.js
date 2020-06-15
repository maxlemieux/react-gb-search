import React from "react";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { 
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
      <Nav />  
     <div>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route> 
          <Route exact path="/books">
            <Search />
          </Route>
          <Route path="/books/:id" children={<Detail />} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
