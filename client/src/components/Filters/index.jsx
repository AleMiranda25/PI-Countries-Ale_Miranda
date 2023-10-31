//Funcionalidad
import { useSelector, useDispatch } from "react-redux";
import {
  setContinentFilter,
  setActivityFilter,
  setAlphabeticalOrder,
  setPopulationOrder,
} from "../../redux/actions";
// Estilos
import "./module.css";
//Componentes

export default () => {
  const dispatch = useDispatch();
  // Obtengo los paises y las actividades y creo arreglos para las opciones seleccionable
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  // A partir de los estados obtengo un arreglo de continentes y una lista de actividades
  const continents = [...new Set(countries.flatMap((c) => c.continent))];
  const activityList = activities.flatMap((c) => c.name);

  // Estados locales para los filtros y ordenamientos
  const continentFilter = useSelector((state) => state.continentFilter);
  const activityFilter = useSelector((state) => state.activityFilter);
  const alphabeticalOrder = useSelector((state) => state.alphabeticalOrder);
  const populationOrder = useSelector((state) => state.populationOrder);
  console.log({
    continentFilter,
    activityFilter,
    alphabeticalOrder,
    populationOrder,
  });

  const handleContinentChange = (e) => {
    console.log(e.target.value);
    dispatch(setContinentFilter(e.target.value));
  };

  const handleActivityChange = (e) => {
    dispatch(setActivityFilter(e.target.value));
  };

  const handleAlphabeticalOrder = (e) => {
    dispatch(setAlphabeticalOrder(e.target.value));
  };

  const handlePopulationOrder = (e) => {
    dispatch(setPopulationOrder(e.target.value));
  };

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="filtersContainer">
      <div className="orderContainer">
        <select
          id="orderAlph"
          onChange={handleAlphabeticalOrder}
          // value={alphabeticalOrder || ""}
          defaultValue=""
        >
          <option value="" disabled>
            Orden Alfabético
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div className="orderContainer">
        <select
          id="orderPopulation"
          onChange={handlePopulationOrder}
          value={populationOrder || ""}
        >
          <option value="" disabled>
            Orden Población
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
      <div className="filterContainer">
        <select
          id="filterContinent"
          onChange={handleContinentChange}
          value={continentFilter || ""}
        >
          <option value="" disabled>
            Continentes
          </option>
          {continents.map((c) => {
            return (
              <option key={c} value={c}>
                {c}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filterContainer">
        <select
          id="filterActivity"
          onChange={handleActivityChange}
          value={activityFilter || ""}
        >
          <option value="" disabled>
            Actividades
          </option>
          {activityList.map((a) => {
            return (
              <option key={a} value={a}>
                {a}
              </option>
            );
          })}
        </select>
      </div>
      <div className="clearFilters">
        <button onClick={() => handleClick()}>
          <i className="fa fa-refresh" />
        </button>
      </div>
    </div>
  );
};
