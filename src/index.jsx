import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Home } from "./components/Home";
import { post } from "./components/post";
import { profile } from "./components/profile";
import { Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Link to="/">Home</Link>
    <Link to="/post">Post</Link>
    <Link to="/profile">Profile</Link>
    <Route exact path="/" component={Home} />
    <Route path="/post" component={post} />
    <Route path="/profile" component={profile} />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
