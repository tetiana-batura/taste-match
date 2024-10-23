
import "./Allergies.scss";


function Allergies() {
  return (
    <div className="allergies">
      <div className="allergies__title-wrapper">
        <h3 className="allergies__title">Allergies</h3>
      </div>
      <div>
      <div className="allergies__wrapper">
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="celery-free"
            name="Health"
            value="celery-free"
          />
          <label className="allergies__label" htmlFor="celery-free">Celery-free</label>
        </div>
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="crustacean-free"
            name="Health"
            value="crustacean-free"
          />
          <label className="allergies__label" htmlFor="crustacean-free">Crustacean-free</label>
        </div>
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="dairy-free"
            name="Health"
            value="dairy-free"
          />
          <label className="allergies__label" htmlFor="dairy-free">Dairy-free</label>
        </div>
        </div>
        <div className="allergies__wrapper">
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="egg-free"
            name="Health"
            value="egg-free"
          />
          <label className="allergies__label" htmlFor="egg-free">Egg-free</label>
        </div>
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="fish-free"
            name="Health"
            value="fish-free"
          />
          <label className="allergies__label" htmlFor="fish-free">Fish-free</label>
        </div>
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="gluten-free"
            name="Health"
            value="gluten-free"
          />
          <label className="allergies__label" htmlFor="gluten-free">Gluten-free</label>
        </div>
        </div>
        <div className="allergies__wrapper">
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="lupine-free"
            name="Health"
            value="lupine-free"
          />
          <label className="allergies__label" htmlFor="lupine-free">Lupine-free</label>
        </div>
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="mustard-free"
            name="Health"
            value="mustard-free"
          />
          <label className="allergies__label" htmlFor="mustard-free">Mustard-free</label>
        </div>
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="peanut-free"
            name="Health"
            value="peanut-free"
          />
          <label className="allergies__label" htmlFor="peanut-free">Peanut-free</label>
        </div>
        </div>
        <div className="allergies__wrapper">
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="sesame-free"
            name="Health"
            value="sesame-free"
          />
          <label className="allergies__label" htmlFor="sesame-free">Sesame-free</label>
        </div>
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="shellfish-free"
            name="Health"
            value="shellfish-free"
          />
          <label className="allergies__label" htmlFor="shellfish-free">Shellfish-free</label>
        </div>
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="soy-free"
            name="Health"
            value="soy-free"
          />
          <label className="allergies__label" htmlFor="soy-free">Soy-free</label>
        </div>
        </div>
        <div className="allergies__wrapper allergies__wrapper--special">
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="tree-nut-free"
            name="Health"
            value="tree-nut-free"
          />
          <label className="allergies__label" htmlFor="tree-nut-free">Tree-Nut-free</label>
        </div>
        <div>
          <input className="allergies__checkbox"
            type="checkbox"
            id="wheat-free"
            name="Health"
            value="wheat-free"
          />
          <label className="allergies__label" htmlFor="wheat-free">Wheat-free</label>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Allergies;
