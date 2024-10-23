import React from "react";

function Allergies() {
  return (
    <div>
      <div>
        <p className="recipes__category">Allergies</p>
      </div>
      <div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="celery-free"
            name="alergies"
            value="celery-free"
          />
          <label htmlFor="celery-free">Celery-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="crustacean-free"
            name="alergies"
            value="crustacean-free"
          />
          <label htmlFor="crustacean-free">Crustacean-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="dairy-free"
            name="alergies"
            value="dairy-free"
          />
          <label htmlFor="dairy-free">Dairy-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="egg-free"
            name="alergies"
            value="egg-free"
          />
          <label htmlFor="egg-free">Egg-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="fish-free"
            name="alergies"
            value="fish-free"
          />
          <label htmlFor="fish-free">Fish-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="gluten-free"
            name="alergies"
            value="gluten-free"
          />
          <label htmlFor="gluten-free">Gluten-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="lupine-free"
            name="alergies"
            value="lupine-free"
          />
          <label htmlFor="lupine-free">Lupine-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="mustard-free"
            name="alergies"
            value="mustard-free"
          />
          <label htmlFor="mustard-free">Mustard-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="peanut-free"
            name="alergies"
            value="peanut-free"
          />
          <label htmlFor="peanut-free">Peanut-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="sesame-free"
            name="alergies"
            value="sesame-free"
          />
          <label htmlFor="sesame-free">Sesame-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="shellfish-free"
            name="alergies"
            value="shellfish-free"
          />
          <label htmlFor="shellfish-free">Shellfish-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="soy-free"
            name="alergies"
            value="soy-free"
          />
          <label htmlFor="soy-free">Soy-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="tree-nut-free"
            name="alergies"
            value="tree-nut-free"
          />
          <label htmlFor="tree-nut-free">Tree-Nut-free</label>
        </div>
        <div>
          <input
            className="recipes__form"
            type="checkbox"
            id="wheat-free"
            name="alergies"
            value="wheat-free"
          />
          <label htmlFor="wheat-free">Wheat-free</label>
        </div>
      </div>
    </div>
  );
}

export default Allergies;
