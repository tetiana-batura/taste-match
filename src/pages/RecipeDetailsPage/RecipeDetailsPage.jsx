import { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./RecipeDetailsPage.scss";
import Footer from "../../components/Footer/Footer";

function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState(null);
  const [error, setError] = useState(null);
  const [servings, setServings] = useState(1);
  const apiURL = `${import.meta.env.VITE_BACKEND_URL}/recipes`;

  useEffect(() => {
    async function getRecipe() {
      try {
        const recipesResponse = await axios.get(`${apiURL}/${id}`);
        setRecipeData(recipesResponse.data);
      } catch (err) {
        setError("Failed to load recipe details. Please, try again later.");
      }
    }

    getRecipe();
  }, [id]);

  function handleChange(e) {
    const value = e.target.value;

    if (!isNaN(value) && value >= 0) {
      setServings(Number(value));
    }
  }

  return (
    <>
      <section className={`recipe ${error ? "recipe--error" : ""}`}>
        {error ? (
          <>
            <h3 className="recipe__error">{error}</h3>
            <Link to={"/"} className="recipe__error-link">
              <button className="recipe__instruction" type="submit">
                HOME PAGE
              </button>
            </Link>
          </>
        ) : (
          <div className="recipe__details-1">
            <div className="recipe__wrapper">
              <h3 className="recipe__category">INGRIDIENTS</h3>
              <div className="recipe__ingridients-wrapper">
                {recipeData?.recipe.ingredientLines.map((line, index) => {
                  return (
                    <p key={index} className="recipe__ingridients">
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="recipe__wrapper">
              <h3 className="recipe__category">NUTRITION</h3>
              <div className="recipe__info">
                <div className="recipe__output-wrapper">
                  <p className="recipe__calories">
                    {Math.round(recipeData?.recipe.calories || 0) * servings}
                  </p>
                  <p>Calories</p>
                </div>
                <div className="recipe__output-wrapper">
                  <input
                    type="text"
                    className="recipe__servings"
                    value={servings}
                    onChange={handleChange}
                  />
                  <p>Servings</p>
                </div>
              </div>
              {recipeData?.recipe.totalNutrients &&
                Object.values(recipeData.recipe.totalNutrients).map(
                  (nutrient, index) => (
                    <div className="recipe__nutrition-wrapper" key={index}>
                      <p className="recipe__nutrition">{nutrient.label}</p>
                      <p className="recipe__grams">
                        {Math.round(nutrient.quantity || 0) * servings}{" "}
                        {nutrient.unit || ""}
                      </p>
                    </div>
                  )
                )}
            </div>
          </div>
        )}
        {!error && (
          <div className="recipe__details-2">
            <img
              className="recipe__image"
              src={
                recipeData?.recipe.images.LARGE
                  ? recipeData?.recipe.images.LARGE?.url
                  : recipeData?.recipe.images.REGULAR?.url
              }
              alt="Recipe image"
            />
            <div className="recipe__container">
              <h2 className="recipe__title">{recipeData?.recipe.label}</h2>
              <div className="recipe__health-labels">
                <h3 className="recipe__type">Dish Type:</h3>
                <p className="recipe__type-output">
                  {recipeData?.recipe.dishType?.map((dish, index) => {
                    return (
                      <span key={index}>
                        {dish.toUpperCase()}
                        {index === recipeData?.recipe.dishType.length - 1
                          ? ""
                          : ", "}
                      </span>
                    );
                  })}
                </p>
                <h3 className="recipe__type">Meal Type:</h3>
                <p className="recipe__type-output">
                  {recipeData?.recipe.mealType?.map((meal, index) => {
                    return (
                      <span key={index}>
                        {meal.toUpperCase()}
                        {index === recipeData?.recipe.mealType.length - 1
                          ? ""
                          : ", "}
                      </span>
                    );
                  })}
                </p>
                <h3 className="recipe__type">Cuisine Type:</h3>
                <p className="recipe__type-output">
                  {recipeData?.recipe.cuisineType?.map((cuisine, index) => {
                    return (
                      <span key={index}>
                        {cuisine.toUpperCase()}
                        {index === recipeData?.recipe.cuisineType.length - 1
                          ? ""
                          : ", "}
                      </span>
                    );
                  })}
                </p>
                <h3 className="recipe__type">Health:</h3>
                <p className="recipe__label-wrapper">
                  {recipeData?.recipe.healthLabels?.map((label, index) => {
                    return (
                      <span key={index} className="recipe__label">
                        {label}
                      </span>
                    );
                  })}
                </p>
              </div>
              <div className="recipe__instruction-wrapper">
                <Link
                  to={recipeData?.recipe.url}
                  target="_blank"
                  className="recipe__instruction-link"
                >
                  <button className="recipe__instruction" type="submit">
                    INSTRUCTIONS
                  </button>
                </Link>
                <Link to={"/"} className="recipe__instruction-link">
                  <button className="recipe__instruction" type="submit">
                    HOME PAGE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default RecipeDetailsPage;
