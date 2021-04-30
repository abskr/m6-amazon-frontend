import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from "./components/ui/NavBar.jsx";
import HomePage from "pages/HomePage";
import ProductPage from "./pages/ProductPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";

function App() {
  return (
    <Router>
      <NavBar className="mb-5"/>
      <Switch>
        <Route exact path="/" render={(routerProps) => <HomePage {...routerProps}/>}/>
        <Route exact path="/account" render={(routerProps) => <AccountPage {...routerProps}/>}/>
        <Route exact path="/:productId" render={(routerProps) => <ProductPage {...routerProps}/>}/>
      </Switch>
    </Router>
  );
}

export default App;