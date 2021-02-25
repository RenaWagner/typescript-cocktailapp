import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CocktailInfo.scss";

type Params = {
  idDrink: string;
};

export type Cocktail = {
  dateModified: string;
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strDrink: string;
  strDrinkThumb: string;
  strGlass: string;
  strInstructions: string;
};

export default function CocktailInfo() {
  const router_params = useParams<Params>();
  const id = router_params.idDrink;

  const [cocktailData, setCocktailData] = useState<Cocktail[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      //   console.log(res.data.drinks);
      setCocktailData(res.data.drinks);
    };
    fetchData();
  }, [id]);

  console.log(cocktailData);

  return (
    <div>
      {cocktailData ? (
        <div className="mt-5">
          <h3 className="mb-4">{cocktailData[0].strDrink}</h3>
          <div>
            <img
              className="ml-5 mr-3"
              src={cocktailData[0].strDrinkThumb}
              alt={`${cocktailData[0].strDrink}'s example`}
              style={{ width: 200, float: "left" }}
            />
            <div className="mr-5" style={{ textAlign: "left" }}>
              <p className="font-weight-bold">Category:</p>
              <p>{cocktailData[0].strCategory}</p>
              <p className="font-weight-bold">Instruction:</p>
              <p>{cocktailData[0].strInstructions}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
