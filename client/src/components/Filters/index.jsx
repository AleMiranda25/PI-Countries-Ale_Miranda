//Funcionalidad

// Estilos
import "./module.css";
//Componentes

export default () => {
  return (
    <div className="filtersContainer">
      <div className="orderContainer">
        <select id="orderAlph">
          <option value="" disabled selected>
            Orden Alfabético
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div className="orderContainer">
        <select id="orderPopulation" value="">
          <option value="" disabled selected>
            Orden Población
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
      <div className="filterContainer">
        <select id="filterContinent" value="">
          <option value="" disabled selected>
            Continente
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div className="filterContainer">
        <select id="filterActivity" value="">
          <option value="" disabled selected>
            Actividad
          </option>
          <option value="Ascendente">A-Z</option>
          <option value="Descendente">Z-A</option>
        </select>
      </div>
      <div className="clearFilters">
        <button>
          <i className="fa fa-refresh" />
        </button>
      </div>
    </div>
  );
};
