import { useState } from "react";
import "./Diets.scss";

function Diets() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  return (
    <div className="diets">
      <div>
        <h3 onClick={handleClick} className="diets__title">
          Diets
        </h3>
      </div>
      {isActive && (
        <div className="diets__container">
          <div className="diets__wrapper">
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="alcohol-free"
                name="health"
                value="alcohol-free"
              />
              <label className="diets__label" htmlFor="alcohol-free">
                Alcohol-free
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="balanced"
                name="diet"
                value="balanced"
              />
              <label className="diets__label" htmlFor="balanced">
                Balanced
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="high-fiber"
                name="diet"
                value="high-fiber"
              />
              <label className="diets__label" htmlFor="high-fiber">
                High-Fiber
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="high-protein"
                name="diet"
                value="high-protein"
              />
              <label className="diets__label" htmlFor="high-protein">
                High-Protein
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="keto"
                name="health"
                value="keto-friendly"
              />
              <label className="diets__label" htmlFor="keto">
                Keto
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="kidney-friendly"
                name="health"
                value="kidney-friendly"
              />
              <label className="diets__label" htmlFor="kidney-friendly">
                Kidney friendly
              </label>
            </div>
          </div>
          <div className="diets__wrapper">
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="kosher"
                name="health"
                value="kosher"
              />
              <label className="diets__label" htmlFor="kosher">
                Kosher
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="low-carb"
                name="diet"
                value="low-carb"
              />
              <label className="diets__label" htmlFor="low-carb">
                Low-Carb
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="low-fat"
                name="diet"
                value="low-fat"
              />
              <label className="diets__label" htmlFor="low-fat">
                Low-Fat
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="low-potassium"
                name="health"
                value="low-potassium"
              />
              <label className="diets__label" htmlFor="low-potassium">
                Low-Potassium
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="low-sodium"
                name="diet"
                value="low-sodium"
              />
              <label className="diets__label" htmlFor="low-sodium">
                Low-Sodium
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="no-oil-added"
                name="health"
                value="No-oil-added"
              />
              <label className="diets__label" htmlFor="no-oil-added">
                No oil added
              </label>
            </div>
          </div>
          <div className="diets__wrapper">
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="no-sugar"
                name="health"
                value="low-sugar"
              />
              <label className="diets__label" htmlFor="no-sugar">
                Low-Sugar
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="pork-free"
                name="health"
                value="pork-free"
              />
              <label className="diets__label" htmlFor="pork-free">
                Pork-free
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="red-meat-free"
                name="health"
                value="red-meat-free"
              />
              <label className="diets__label" htmlFor="red-meat-free">
                Red meat-free
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="sugar-conscious"
                name="health"
                value="sugar-conscious"
              />
              <label className="diets__label" htmlFor="sugar-conscious">
                Sugar-light
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="vegan"
                name="health"
                value="vegan"
              />
              <label className="diets__label" htmlFor="vegan">
                Vegan
              </label>
            </div>
            <div className="diets__item">
              <input
                className="diets__checkbox"
                type="checkbox"
                id="vegetarian"
                name="health"
                value="vegetarian"
              />
              <label className="diets__label" htmlFor="vegetarian">
                Vegetarian
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Diets;
