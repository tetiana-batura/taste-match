import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Allergies from "../../components/Allergies/Allergies";
import Diets from "../../components/Diets/Diets";
import MealTypes from "../../components/MealTypes/MealTypes";
import DishTypes from "../../components/DishTypes/DishTypes";
import CuisineTypes from "../../components/CuisineTypes/CuisineTypes";
import "./HomePage.scss";

// import React from 'react'

function HomePage() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const apiURL = `${import.meta.env.VITE_BACKEND_URL}/recipes`;

  console.log(searchParams);

  function handleSubmit() {}

  // if no params, default recipes
  // if params come from form submit, use them on a backend

  return (
    <>
      <Header />
      <section className="recipes">
        <div className="recipes__form-wrapper">
          <form className="recipes__form" onSubmit={handleSubmit}>
            <div className="recipes__content-wrapper">
              <div className="recipes__category">
                <div>
                  <p className="recipes__keywords">Searching by keyword</p>
                </div>
                <div>
                  <input
                    className="recipes__search"
                    type="text"
                    name="keywords"
                    placeholder="Type one or more keywords"
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
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;
