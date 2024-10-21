// import React from "react";
import { useState, useEffect } from "react";
import "./RecipeDetailsPage.scss";

function RecipeDetailsPage() {
  return ( 
    <>
    <section className="recipe">
    <div className="recipe__details-1">
  <h2 lassName="recipe__ingridients-title">INGRIDIENTS</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis provident harum deleniti accusamus cumque perferendis impedit sapiente, tempore illo sit natus dolores quam unde mollitia hic earum! Aperiam, possimus doloremque.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem aspernatur consequuntur, accusamus quam, neque sit nesciunt, nobis ab odit distinctio unde quod! Dolor distinctio vero illo tempore vitae soluta!
  </p>
    <h2>NUTRITION</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis provident harum deleniti accusamus cumque perferendis impedit sapiente, tempore illo sit natus dolores quam unde mollitia hic earum! Aperiam, possimus doloremque.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem aspernatur consequuntur, accusamus quam, neque sit nesciunt, nobis ab odit distinctio unde quod! Dolor distinctio vero illo tempore vitae soluta!
  </p>
    </div>
    <div className="recipe__details-2">
    <img className="recipe__image" src="../../src/assets/images/il_fullxfull.3891403144_e1ib.avif" alt="" />
    <h1>Title</h1>
    <div className="recipe__info">
    <p>calories</p>
    <p>daily value</p>
    <p>servings</p>
    </div>
    <p>alergies</p>
    <p>diets</p>
    <p>Preparation</p>
    </div>
    </section>

  </>
  );
}


export default RecipeDetailsPage;

