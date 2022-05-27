import React from "react";
import LayoutAdmin from "./layouts/LayoutAdmin";

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

const App = () => {
  
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <LayoutAdmin />}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App