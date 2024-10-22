
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "./HomePage.scss";

// import React from 'react'

function HomePage() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const apiURL = `${import.meta.env.VITE_BACKEND_URL}/recipes`;

  console.log(searchParams);

  // if no params, default recipes
  // if params come from form submit, use them on a backend

  return (
  
    <>
     <Header />
        <section className="recipes">
            <div className="recipes__keywords"> 
            <div className="recipes__keywords-wrapper">
            <p className="recipes__category">Searching by keyword</p>
            </div>
            <div className="recipes__form-wrapper">
            <form id="myForm" action="/submit"></form>
            <input className="recipes__form" type="text" name="keywords" form="myForm" placeholder="Type one or more keywords"></input>
            <button  className="recipes__form-button" type="submit" form="myForm">
                <img className="recipes__logo"src="../../src/assets/images/glass.png" alt="" />
            </button>
            </div>
            </div>
            <p className="recipes__category">Allergies</p>
            <p className="recipes__category">Diets</p>
            <p className="recipes__category">Calories</p>
            <p className="recipes__category">Nutrients</p>
        </section>
    </>
  );
}

export default HomePage;
