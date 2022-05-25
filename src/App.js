import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BuyOnlinePage from "./views/BuyOnlinePage"
import HomePage from "./views/HomePage";

const App = () => {
  
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <HomePage />}/>
        <Route path="/buy-online"  component={() => <BuyOnlinePage />}/>
      </Switch>
    
    </BrowserRouter>
  )
}

export default App