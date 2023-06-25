import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./pages/home/Home";
import TodoListPage from "./pages/todoListPage/TodoListPage";
import DeletedTodosPage from "./pages/deletedTodosPage/deletedTodosPage";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos/list" exact>
              <TodoListPage />
            </Route>
            <Route path="/todos/deleted" exact>
              <DeletedTodosPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
