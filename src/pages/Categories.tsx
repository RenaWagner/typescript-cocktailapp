import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

type Drinks = {
  strCategory: string;
};

export default function Categories() {
  const [drinksData, setDrinksData] = useState<Drinks[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );
      //   console.log(res.data.drinks);
      setDrinksData(res.data.drinks);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="mb-3">Categories List</h2>
      <ul className="list-group list-group-flush">
        {drinksData.length ? (
          drinksData.map((drinks, index) => {
            return (
              <Link key={index} to={`/categories/${drinks.strCategory}`}>
                <li className="list-group-item">{drinks.strCategory}</li>
              </Link>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}
