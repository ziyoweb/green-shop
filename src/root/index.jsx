import React from "react";
import Navbar from "../components/Navbar";
import { Home, PlantCare, Shop, Blogs } from "../pages/index";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  console.log(location);
  const quary = new URLSearchParams(location.search);
  console.log(quary.get("name"));
  return (
    <div>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/home"} />
        </Route>
        <Route path={"/home"} component={Navbar} />
        <Route path={"/shop"} component={Navbar} />
        <Route path={"/plantCare"} component={Navbar} />
        <Route path="/blogs" component={Navbar} />
      </Switch>
      <p>You are here {location.pathname}</p>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/home"} component={Home} />
        <Route path={"/shop"} component={Shop} />
        <Route path={"/plantCare"} component={PlantCare} />
        <Route path={"/blogs"} component={Blogs} />
        <Route path={"*"}>
          <h1>404 Not found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Root;
