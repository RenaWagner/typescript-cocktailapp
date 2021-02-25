import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Cocktail = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

type Params = {
  categoryName: string;
};

export default function ImageList() {
  const [cocktailData, setCocktailData] = useState<Cocktail[]>([]);

  const route_parameter = useParams<Params>();
  //   console.log(route_parameter);
  const rowCategory = route_parameter.categoryName;
  const categoryNoSpace = rowCategory.replace(/ /g, "_");
  const category = encodeURIComponent(categoryNoSpace);
  //   console.log(category);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setCocktailData(res.data.drinks);
    };
    fetchData();
  }, [category]);

  //   console.log(cocktailData);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cocktailData.map((cocktail) => {
        return (
          <div key={cocktail.idDrink} className="mr-3 ml-3">
            <div>
              <p>{cocktail.strDrink}</p>
              <img
                src={cocktail.strDrinkThumb}
                style={{ width: 200 }}
                alt={`${cocktail.strDrink} example`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
