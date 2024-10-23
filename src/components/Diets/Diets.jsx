
import "./Diets.scss";

function Diets() {
  return (
    <div className="diets">
      <div>
        <p>Diets</p>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            id="alcohol-free"
            name="Health"
            value="alcohol-free"
          />
          <label htmlFor="alcohol-free">Alcohol-free</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="balanced"
            name="Diet"
            value="balanced"
          />
          <label htmlFor="balanced">Balanced</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="high-fiber"
            name="Diet"
            value="high-fiber"
          />
          <label htmlFor="high-fiber">High-Fiber</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="high-protein"
            name="Diet"
            value="high-protein"
          />
          <label htmlFor="high-protein">High-Protein</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="keto"
            name="Health"
            value="keto-friendly"
          />
          <label htmlFor="keto">Keto</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="kidney-friendly"
            name="Health"
            value="kidney-friendly"
          />
          <label htmlFor="kidney-friendly">Kidney friendly</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="kosher"
            name="Health"
            value="kosher"
          />
          <label htmlFor="kosher">Kosher</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="low-carb"
            name="Diet"
            value="low-carb"
          />
          <label htmlFor="low-carb">Low-Carb</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="low-fat"
            name="Diet"
            value="low-fat"
          />
          <label htmlFor="low-fat">Low-Fat</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="low-potassium"
            name="Health"
            value="low-potassium"
          />
          <label htmlFor="low-potassium">Low Potassium</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="low-sodium"
            name="Diet"
            value="low-sodium"
          />
          <label htmlFor="low-sodium">Low-Sodium</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="no-oil-added"
            name="Health"
            value="No-oil-added"
          />
          <label htmlFor="no-oil-added">No oil added</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="no-sugar"
            name="Health"
            value="low-sugar"
          />
          <label htmlFor="no-sugar">Low-Sugar</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="paleo"
            name="Health"
            value="paleo"
          />
          <label htmlFor="paleo">Paleo</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="pork-free"
            name="Health"
            value="pork-free"
          />
          <label htmlFor="pork-free">Pork-free</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="red-meat-free"
            name="Health"
            value="red-meat-free"
          />
          <label htmlFor="red-meat-free">Red meat-free</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="sugar-conscious"
            name="Health"
            value="sugar-conscious"
          />
          <label htmlFor="sugar-conscious">Sugar-conscious</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="vegan"
            name="Health"
            value="vegan"
          />
          <label htmlFor="vegan">Vegan</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="vegetarian"
            name="Health"
            value="vegetarian"
          />
          <label htmlFor="vegetarian">Vegetarian</label>
        </div>
      </div>
    </div>
  );
}

export default Diets;
