import React from "react";
import { Link } from "react-router-dom";
import "./RecipesList.scss";


function RecipesList({ data }) {
  const items = data?.hits;
  console.log(items);
  return (
    <section className="list">
      <div className="list__wrapper">
        {items?.map((item) => {
          return (
            <div className="list__card">
              <Link className="list__link" to={item.recipe.uri.split("recipe_")[1]}>
                <div className="list__image">
                  <img src={item.recipe.image} />
                </div>
                <h3 className="list__title">{item.recipe.label}</h3>
                <span className="list__detail">
                  {Math.round(item.recipe.calories)} Calories
                </span>
                <span className="list__detail">
                  {item.recipe.ingredients.length} Ingredients
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RecipesList;
