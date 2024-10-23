import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Allergies from "../../components/Allergies/Allergies";
import Diets from "../../components/Diets/Diets";
import MealTypes from "../../components/MealTypes/MealTypes";
import DishTypes from "../../components/DishTypes/DishTypes";
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
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <div>
                  <p className="recipes__category">Searching by keyword</p>
                </div>
                <div>
                  <input
                    className="recipes__form"
                    type="text"
                    name="keywords"
                    placeholder="Type one or more keywords"
                  />
                  <button className="recipes__form-button" type="submit">
                    <img
                      className="recipes__logo"
                      src="../../src/assets/images/glass.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <Allergies />
              <Diets />
              <MealTypes />
              <DishTypes />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;
