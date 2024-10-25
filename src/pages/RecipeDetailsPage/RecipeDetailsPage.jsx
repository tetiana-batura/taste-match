// import React from "react";
import { useState, useEffect } from "react";
import "./RecipeDetailsPage.scss";

function RecipeDetailsPage() {
  return (
    <>
      <section className="recipe">
        <div className="recipe__details-1">
          <div className="recipe__wrapper">
            <h3 className="recipe__category">INGRIDIENTS</h3>
            <p className="recipe__ingridients recipe__ingridients--special">
              {" "}
              100 ml milk{" "}
            </p>
            <p className="recipe__ingridients"> 50 g butter </p>
            <p className="recipe__ingridients"> 3 eggs </p>
            <p className="recipe__ingridients"> 1 tbs cocoa </p>
          </div>
          <div className="recipe__wrapper">
            <h3 className="recipe__category">NUTRITION</h3>
            <div className="recipe__info">
              <div className="recipe__logo-wrapper">
                <div className="recipe__input-wrapper">
                  <p className="recipe__output">1,1424</p>
                </div>
                <p className="recipe__input">Calories</p>
              </div>
              <div className="recipe__logo-wrapper">
                <div className="recipe__input-wrapper">
                  <p className="recipe__output">57%</p>
                </div>
                <p className="recipe__input">Daily value</p>
              </div>
              <div className="recipe__logo-wrapper">
                <div className="recipe__input-wrapper">
                  <p className="recipe__output">1</p>
                </div>
                <p className="recipe__input">Servings</p>
              </div>
            </div>
            <div className="recipe__nutrition-wrapper">
              <p className="recipe__nutrition"> Fat </p>
              <p className="recipe__grams"> 50g </p>
              <p className="recipe__percentages"> 77% </p>
            </div>
            <p className="recipe__nutrition"> Carbs </p>
            <p className="recipe__nutrition"> Protein </p>
            <p className="recipe__nutrition"> Zink </p>
          </div>
        </div>
        <div className="recipe__details-2">
          <img
            className="recipe__image"
            src="../../src/assets/images/il_fullxfull.3891403144_e1ib.avif"
            alt=""
          />
          <div className="recipe__container">
            <h2 className="recipe__title">Healthy spring bowl</h2>
            <div className="recipe__health-labels">
              <p>health labels</p>
              <p>cusine type</p>
              <p>meal type</p>
            </div>
            <p className="recipe__preparation">PREPARATION</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecipeDetailsPage;
