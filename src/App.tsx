import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Categories from "./pages/Categories";
import HomePage from "./pages/HomePage";
import ImageList from "./pages/ImageList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/categories/:categoryName+" component={ImageList}></Route>
        <Route path="/categories" component={Categories}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
