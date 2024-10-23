import "./MealTypes.scss";

function MealTypes() {
  return (
    <div className="meal">
      <div>
        <p>Meal Type</p>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            id="breakfast"
            name="mealType"
            value="breakfast"
          />
          <label htmlFor="breakfast">Breakfast</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="brunch"
            name="mealType"
            value="brunch"
          />
          <label htmlFor="brunch">Brunch</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="lunch/dinner"
            name="mealType"
            value="lunch/dinner"
          />
          <label htmlFor="lunch/dinner">Lunch/dinner</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="snack"
            name="mealType"
            value="snack"
          />
          <label htmlFor="snack">Snack</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="teatime"
            name="mealType"
            value="teatime"
          />
          <label htmlFor="teatime">Teatime</label>
        </div>
      </div>
    </div>
  );
}

export default MealTypes;
