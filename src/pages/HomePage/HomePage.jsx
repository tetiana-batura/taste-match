import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Allergies from "../../components/Allergies/Allergies";
import Diets from "../../components/Diets/Diets";
import MealTypes from "../../components/MealTypes/MealTypes";
import DishTypes from "../../components/DishTypes/DishTypes";
import CuisineTypes from "../../components/CuisineTypes/CuisineTypes";
import RecipesList from "../../components/RecipesList/RecipesList";
import Footer from "../../components/Footer/Footer";
import "./HomePage.scss";

function HomePage() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [recipesData, setRecipesData] = useState(null);
  const apiURL = `${import.meta.env.VITE_BACKEND_URL}/recipes`;

  useEffect(() => {
    async function getDefaultRecipes() {
      try {
        const recipesResponse = await axios.get(apiURL);
        setRecipesData(recipesResponse.data);
        console.log(recipesResponse.data);
      } catch (err) {}
    }

    getDefaultRecipes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const searchData = new FormData(e.target);

    const refinedSearchData = {
      q: searchData.getAll("q"),
      health: searchData.getAll("health"),
      diet: searchData.getAll("diet"),
      mealType: searchData.getAll("mealType"),
      dishType: searchData.getAll("dishType"),
      cuisineType: searchData.getAll("cuisineType"),
    };

    axios
      .post(apiURL, refinedSearchData)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <Header />
      <section className="recipes">
        <div className="recipes__form-wrapper">
          <form className="recipes__form" onSubmit={handleSubmit}>
            <div className="recipes__content-wrapper">
              <h3 className="recipes__hint">
                Type ingridient(s) to search for recipes, then narrow your
                results with filters.
              </h3>
              <h3 className="recipes__hint recipes__hint--special">
                {" "}
                Your perfect dish is just a filter away!
              </h3>
              <div className="recipes__category">
                <div>
                  <h3 className="recipes__keywords">Searching by keyword</h3>
                </div>
                <div className="recipes__search-container">
                  <input
                    className="recipes__search"
                    type="text"
                    name="q"
                    placeholder="Type one or more keywords"
                    required
                  />
                </div>
              </div>
              <Allergies />
              <Diets />
              <MealTypes />
              <DishTypes />
              <CuisineTypes />
            </div>
            <div className="recipes__finder">
              <button className="recipes__search-button" type="submit">
                <img
                  className="recipes__logo"
                  src="../../src/assets/images/glass.png"
                  alt=""
                />
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </section>
      <RecipesList data={recipesData} />
      <Footer />
    </>
  );
}

export default HomePage;
