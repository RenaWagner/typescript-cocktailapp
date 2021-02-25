import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Categories from "./pages/Categories";
import HomePage from "./pages/HomePage";
import ImageList from "./pages/ImageList";
import CocktailInfo from "./pages/CocktailInfo";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/categories/:categoryName+" component={ImageList}></Route>
        <Route path="/categories" component={Categories}></Route>
        <Route path="/cocktail-info/:idDrink" component={CocktailInfo}></Route>
        <Route path="/search" component={SearchPage}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
