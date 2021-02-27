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
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
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
              src={cocktailData[0].strDrinkThumb}
              alt={`${cocktailData[0].strDrink}'s example`}
            />
            <div className="description" style={{ textAlign: "left" }}>
              <p className="font-weight-bold ">Category:</p>
              <p>{cocktailData[0].strCategory}</p>
              {cocktailData[0].strIngredient1 !== null ? (
                <>
                  <p className="font-weight-bold category">Ingredients: </p>
                  <p>
                    {cocktailData[0].strIngredient1}:{" "}
                    {cocktailData[0].strMeasure1}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient2 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient2}:{" "}
                    {cocktailData[0].strMeasure2}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient3 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient3}:{" "}
                    {cocktailData[0].strMeasure3}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient4 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient4}:{" "}
                    {cocktailData[0].strMeasure4}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient5 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient5}:{" "}
                    {cocktailData[0].strMeasure5}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient6 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient6}:{" "}
                    {cocktailData[0].strMeasure6}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient7 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient7}:{" "}
                    {cocktailData[0].strMeasure7}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient8 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient8}:{" "}
                    {cocktailData[0].strMeasure8}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient9 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient9}:{" "}
                    {cocktailData[0].strMeasure9}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient10 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient10}:{" "}
                    {cocktailData[0].strMeasure10}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient11 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient11}:{" "}
                    {cocktailData[0].strMeasure11}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient12 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient12}:{" "}
                    {cocktailData[0].strMeasure12}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient13 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient13}:{" "}
                    {cocktailData[0].strMeasure13}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient14 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient14}:{" "}
                    {cocktailData[0].strMeasure14}
                  </p>
                </>
              ) : (
                <p></p>
              )}
              {cocktailData[0].strIngredient15 !== null ? (
                <>
                  <p>
                    {cocktailData[0].strIngredient15}:{" "}
                    {cocktailData[0].strMeasure15}
                  </p>
                </>
              ) : (
                <p></p>
              )}
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
