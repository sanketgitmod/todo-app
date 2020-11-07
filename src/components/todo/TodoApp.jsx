import React from "react";
import Login from "./Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./Welcome";
import Error from "./Error";
import ListTodo from "./ListTodo";
import Header from "./Header";
import Footer from "./Footer";
import Logout from "./Logout";
import Todo from "./Todo";

function TodoApp(props) {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/welcome/:name" component={Welcome}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/todo/:id" component={Todo}></Route>
        <Route path="/todo" component={ListTodo}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Redirect from="/" to="/login"></Redirect>
        <Redirect from="/logout" to="/login"></Redirect>
        <Route component={Error}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default TodoApp;
