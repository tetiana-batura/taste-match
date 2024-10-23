import "./DishTypes.scss";

function DishTypes() {
  return (
    <div className="dish">
      <div>
        <h3 className="dish__title">Dish Types</h3>
      </div>
      <div>
      <div className="dish__wrapper">
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="alcohol-cocktail"
            name="dishType"
            value="alcohol cocktail"
          />
          <label className="dish__label" htmlFor="alcohol-cocktail">Alcohol cocktail</label>
        </div>
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="biscuits-and-cookies"
            name="dishType"
            value="biscuits and cookies"
          />
          <label className="dish__label" htmlFor="biscuits-and-cookies">Biscuits and cookies</label>
        </div>
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="bread"
            name="dishType"
            value="bread"
          />
          <label className="dish__label" htmlFor="bread">Bread</label>
        </div>
        </div>
        <div className="dish__wrapper">
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="cereals"
            name="dishType"
            value="cereals"
          />
          <label className="dish__label" htmlFor="cereals">Cereals</label>
        </div>
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="condiments-and-sauces"
            name="dishType"
            value="condiments and sauces"
          />
          <label className="dish__label" htmlFor="condiments-and-sauces">Condiments and sauces</label>
        </div>
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="desserts"
            name="dishType"
            value="desserts"
          />
          <label className="dish__label" htmlFor="desserts">Desserts</label>
        </div>
        </div>
        <div className="dish__wrapper">
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="drinks"
            name="dishType"
            value="drinks"
          />
          <label className="dish__label" htmlFor="drinks">Drinks</label>
        </div>
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="egg"
            name="dishType"
            value="egg"
          />
          <label className="dish__label" htmlFor="egg">Egg</label>
        </div>
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="ice-cream-and-custard"
            name="dishType"
            value="ice cream and custard"
          />
          <label className="dish__label" htmlFor="ice-cream-and-custard">Ice cream and custard</label>
        </div>
        </div>
        <div className="dish__wrapper">
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="main-course"
            name="dishType"
            value="main course"
          />
          <label className="dish__label" htmlFor="main-course">Main course</label>
        </div>
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="pies-and-tarts"
            name="dishType"
            value="pies and tarts"
          />
          <label className="dish__label" htmlFor="pies-and-tarts">Pies and tarts</label>
        </div>
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="pizza"
            name="dishType"
            value="pizza"
          />
          <label className="dish__label" htmlFor="pizza">Pizza</label>
        </div>
        </div>
        <div className="dish__wrapper">
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="preps"
            name="dishType"
            value="preps"
          />
          <label className="dish__label" htmlFor="preps">Preps</label>
        </div>
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="salad"
            name="dishType"
            value="salad"
          />
          <label className="dish__label" htmlFor="salad">Salad</label>
        </div>
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="seafood"
            name="dishType"
            value="seafood"
          />
          <label className="dish__label" htmlFor="seafood">Seafood</label>
        </div>
        </div>
        <div className="dish__wrapper dish__wrapper--special">
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="soup"
            name="dishType"
            value="soup"
          />
          <label className="dish__label" htmlFor="soup">Soup</label>
        </div>
        <div>
          <input className="dish__checkbox"
            type="checkbox"
            id="starter"
            name="dishType"
            value="starter"
          />
          <label className="dish__label" htmlFor="starter">Starter</label>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DishTypes;
