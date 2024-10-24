import "./MealTypes.scss";

function MealTypes() {
  return (
    <div className="meal">
      <div>
        <h3 className="meal__title">Meal Type</h3>
      </div>
      <div className="meal__container" >
        <div className="meal__wrapper">
        <div className="meal__item">
            <input
              className="meal__checkbox"
              type="checkbox"
              id="breakfast"
              name="mealType"
              value="breakfast"
            />
            <label className="meal__label" htmlFor="breakfast">
              Breakfast
            </label>
          </div>
          <div className="meal__item">
            <input
              className="meal__checkbox"
              type="checkbox"
              id="brunch"
              name="mealType"
              value="brunch"
            />
            <label className="meal__label" htmlFor="brunch">
              Brunch
            </label>
          </div>
        </div>
        <div className="meal__wrapper meal__wrapper--special">
        <div className="meal__item">
            <input
              className="meal__checkbox"
              type="checkbox"
              id="lunch/dinner"
              name="mealType"
              value="lunch/dinner"
            />
            <label className="meal__label" htmlFor="lunch/dinner">
              Lunch/Dinner
            </label>
          </div>
          <div className="meal__item">
            <input
              className="meal__checkbox"
              type="checkbox"
              id="snack"
              name="mealType"
              value="snack"
            />
            <label className="meal__label" htmlFor="snack">
              Snack
            </label>
          </div>
        </div>
        <div className="meal__wrapper">
        <div className="meal__item">
            <input
              className="meal__checkbox"
              type="checkbox"
              id="teatime"
              name="mealType"
              value="teatime"
            />
            <label className="meal__label" htmlFor="teatime">
              Teatime
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealTypes;
