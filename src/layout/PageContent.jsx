import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePages from "../pages/HomePages";

export default function PageContent() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePages />
        </Route>
      </Switch>
    </div>
  );
}
