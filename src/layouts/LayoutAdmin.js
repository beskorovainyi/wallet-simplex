import React from "react";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";

// dynamically create auth routes
import routes from "../routes/routesAdmin";

import {ThemeProvider} from "react-bootstrap";
import {Redirect, Route, Switch} from "react-router-dom";

const LayoutAdmin = () => {
  
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            key={key}
            component={prop.component}
          />
        )
    })
  }
  
  return (
    <>
      <ThemeProvider>
        <NavbarComponent/>
        <Switch>
          {getRoutes(routes)}
          <Redirect from="/" to="/buy-online" />
        </Switch >
      </ThemeProvider>
    </>
  )
}

export default LayoutAdmin