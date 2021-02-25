import axios from "axios";
import React, { useState } from "react";
import { Cocktail } from "./CocktailInfo";
import { Link } from "react-router-dom";
import "./SearchPage.scss";

export default function SearchPage() {
  const [searchText, setSearchText] = useState("");
  const [searchedData, setSearchedData] = useState<Cocktail[]>([]);

  const onSubmitSearch = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const fetchData = async () => {
      console.log("fetching");
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
      );
      setSearchedData(res.data.drinks);
    };
    fetchData();
  };

  console.log(searchedData);

  return (
    <div>
      <form onSubmit={onSubmitSearch}>
        <label className="mr-2">Put your search keywords here: </label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="d-flex flex-wrap justify-content-center">
        {searchedData.map((item) => {
          return (
            <div className="mr-3">
              <Link to={`/cocktail-info/${item.idDrink}`}>
                <p>{item.strDrink}</p>
              </Link>
              <img
                style={{ width: 200 }}
                src={item.strDrinkThumb}
                alt={`${item.strDrink}'s example`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
