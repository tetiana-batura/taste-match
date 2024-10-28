import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RecipesList.scss";

function RecipesList({ data, showData }) {
  const items = data?.hits;

  async function handleClick() {
    try {
      const recipesResponse = await axios.get(data["_links"].next.href);
      const copyData = {
        ...recipesResponse.data,
        hits: [...data.hits],
      };
      copyData.hits = copyData.hits.concat(recipesResponse.data.hits);
      showData(copyData);
    } catch (err) {}
  }
  return (
    <section className="list">
      <div className="list__wrapper">
        {items?.map((item) => {
          return (
            <div className="list__card">
              <Link
                className="list__link"
                to={item.recipe.uri.split("recipe_")[1]}
              >
                <div className="list__link-container">
                  <div>
                    <img className="list__image" src={item.recipe.images.SMALL.url} />
                  </div>
                  <h3 className="list__title">{item.recipe.label}</h3>
                  <p className="list__detail-wrapper">
                    {Math.round(item.recipe.calories)} Calories
                    <span className="list__detail">
                      {item.recipe.ingredients.length} Ingredients
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="list__button-wrapper">
        <button
          className="list__load-button"
          type="button"
          onClick={handleClick}
        >
          LOAD MORE
        </button>
      </div>
    </section>
  );
}

export default RecipesList;
