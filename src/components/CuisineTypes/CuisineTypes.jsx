import "./CuisineTypes.scss";


function CuisineTypes() {
  return (
    <div className="cusine">
      <div>
        <p>Cuisine Types</p>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            id="american"
            name="cuisineType"
            value="american"
          />
          <label htmlFor="american">American</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="asian"
            name="cuisineType"
            value="asian"
          />
          <label htmlFor="asian">Asian</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="caribbean"
            name="cuisineType"
            value="caribbean"
          />
          <label htmlFor="caribbean">Caribbean</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="chinese"
            name="cuisineType"
            value="chinese"
          />
          <label htmlFor="chinese">Chinese</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="french"
            name="cuisineType"
            value="french"
          />
          <label htmlFor="french">French</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="indian"
            name="cuisineType"
            value="indian"
          />
          <label htmlFor="indian">Indian</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="italian"
            name="cuisineType"
            value="italian"
          />
          <label htmlFor="italian">Italian</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="kosher"
            name="cuisineType"
            value="kosher"
          />
          <label htmlFor="kosher">Kosher</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="mediterranean"
            name="cuisineType"
            value="mediterranean"
          />
          <label htmlFor="mediterranean">Mediterranean</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="mexican"
            name="cuisineType"
            value="mexican"
          />
          <label htmlFor="mexican">Mexican</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="middle-eastern"
            name="cuisineType"
            value="middle eastern"
          />
          <label htmlFor="middle-eastern">Middle Eastern</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="south-american"
            name="cuisineType"
            value="south american"
          />
          <label htmlFor="south-american">South American</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="world"
            name="cuisineType"
            value="world"
          />
          <label htmlFor="world">World</label>
        </div>
      </div>
    </div>
  );
}

export default CuisineTypes;
