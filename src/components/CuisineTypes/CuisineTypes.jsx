import { useState } from "react";
import "./CuisineTypes.scss";

function CuisineTypes() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prev) => !prev);
  }
  return (
    <div className="cuisine">
      <div className="cuisine__title-wrapper">
        <h3 onClick={handleClick} className="cuisine__title">
          Cuisine Types
        </h3>
      </div>
      {isActive && (
        <div className="cuisine__container">
          <div className="cuisine__wrapper">
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="american"
                name="cuisineType"
                value="american"
              />
              <label className="cuisine__label" htmlFor="american">
                American
              </label>
            </div>
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="asian"
                name="cuisineType"
                value="asian"
              />
              <label className="cuisine__label" htmlFor="asian">
                Asian
              </label>
            </div>
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="caribbean"
                name="cuisineType"
                value="caribbean"
              />
              <label className="cuisine__label" htmlFor="caribbean">
                Caribbean
              </label>
            </div>
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="chinese"
                name="cuisineType"
                value="chinese"
              />
              <label className="cuisine__label" htmlFor="chinese">
                Chinese
              </label>
            </div>
          </div>
          <div className="cuisine__wrapper">
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="french"
                name="cuisineType"
                value="french"
              />
              <label className="cuisine__label" htmlFor="french">
                French
              </label>
            </div>
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="indian"
                name="cuisineType"
                value="indian"
              />
              <label className="cuisine__label" htmlFor="indian">
                Indian
              </label>
            </div>
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="italian"
                name="cuisineType"
                value="italian"
              />
              <label className="cuisine__label" htmlFor="italian">
                Italian
              </label>
            </div>
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="kosher"
                name="cuisineType"
                value="kosher"
              />
              <label className="cuisine__label" htmlFor="kosher">
                Kosher
              </label>
            </div>
          </div>
          <div className="cuisine__wrapper">
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="mediterranean"
                name="cuisineType"
                value="mediterranean"
              />
              <label className="cuisine__label" htmlFor="mediterranean">
                Mediterranean
              </label>
            </div>
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="mexican"
                name="cuisineType"
                value="mexican"
              />
              <label className="cuisine__label" htmlFor="mexican">
                Mexican
              </label>
            </div>
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="middle-eastern"
                name="cuisineType"
                value="middle eastern"
              />
              <label className="cuisine__label" htmlFor="middle-eastern">
                Middle Eastern
              </label>
            </div>
            <div className="cuisine__item">
              <input
                className="cuisine__checkbox"
                type="checkbox"
                id="south-american"
                name="cuisineType"
                value="south american"
              />
              <label className="cuisine__label" htmlFor="south-american">
                South American
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CuisineTypes;
