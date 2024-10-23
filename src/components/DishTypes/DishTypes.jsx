import "./DishTypes.scss";

function DishTypes() {
  return (
    <div className="dish">
      <div>
        <p>Dish Types</p>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            id="alcohol-cocktail"
            name="dishType"
            value="alcohol cocktail"
          />
          <label htmlFor="alcohol-cocktail">Alcohol Cocktail</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="biscuits-and-cookies"
            name="dishType"
            value="biscuits and cookies"
          />
          <label htmlFor="biscuits-and-cookies">Biscuits and cookies</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="bread"
            name="dishType"
            value="bread"
          />
          <label htmlFor="bread">Bread</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="cereals"
            name="dishType"
            value="cereals"
          />
          <label htmlFor="cereals">Cereals</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="condiments-and-sauces"
            name="dishType"
            value="condiments and sauces"
          />
          <label htmlFor="condiments-and-sauces">Condiments and sauces</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="desserts"
            name="dishType"
            value="desserts"
          />
          <label htmlFor="desserts">Desserts</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="drinks"
            name="dishType"
            value="drinks"
          />
          <label htmlFor="drinks">Drinks</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="egg"
            name="dishType"
            value="egg"
          />
          <label htmlFor="egg">Egg</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="ice-cream-and-custard"
            name="dishType"
            value="ice cream and custard"
          />
          <label htmlFor="ice-cream-and-custard">Ice cream and custard</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="main-course"
            name="dishType"
            value="main course"
          />
          <label htmlFor="main-course">Main course</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="pies-and-tarts"
            name="dishType"
            value="pies and tarts"
          />
          <label htmlFor="pies-and-tarts">Pies and tarts</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="pizza"
            name="dishType"
            value="pizza"
          />
          <label htmlFor="pizza">Pizza</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="preps"
            name="dishType"
            value="preps"
          />
          <label htmlFor="preps">Preps</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="salad"
            name="dishType"
            value="salad"
          />
          <label htmlFor="salad">Salad</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="seafood"
            name="dishType"
            value="seafood"
          />
          <label htmlFor="seafood">Seafood</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="soup"
            name="dishType"
            value="soup"
          />
          <label htmlFor="soup">Soup</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="starter"
            name="dishType"
            value="starter"
          />
          <label htmlFor="starter">Starter</label>
        </div>
      </div>
    </div>
  );
}

export default DishTypes;
