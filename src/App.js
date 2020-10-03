import React from 'react';
import './App.css';
import Home from './views/Home';
import Header from "./views/Header"
import Footer from "./views/Footer"
import {Divider} from "@material-ui/core"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./components/SearchPage";


function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/search-results">
            <SearchPage />
          </Route>
        </Switch>

        <Divider/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
