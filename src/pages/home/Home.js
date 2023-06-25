import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/card/Card";

import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Link
        to="todos/list"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <Card className="home-card">
          <p>
            Welcome to my Todo List project challenge! A project built with a
            backend using ASP.NET Core Web API and SQL Database. Complemented by
            a simple frontend web app built with React. Clik on this card to go
            to your Todo List.
          </p>
        </Card>
      </Link>
    </React.Fragment>
  );
};

export default Home;
