//Funcionalidad
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { combinedOrder } from "../../redux/actions";
// Estilos
import "./module.css";
//Componentes

export default () => {
  // Obtengo los paises y las actividades y creo arreglos para las opciones seleccionable
  const countries = useSelector((state) => state.filteredCountries);
  const activities = useSelector((state) => state.activities);
  const continents = [...new Set(countries.flatMap((c) => c.continent))];
  const actList = activities.flatMap((c) => c.name);

  // const dispatch = useDispatch();

  // const [selectReload, setselectReload] = useState({
  //   sort: "A-Z",
  // });

  // function onChange(e) {
  //   let sort = e.target.value;
  //   if (sort === "A-Z" || sort === "Z-A") dispatch(orderAlph(sort));
  //   if (sort === "Ascendente" || sort === "Descendente")
  //     dispatch(orderPopulation(sort));
  //   if (sort === "ascendent" || sort === "descendent")
  //     dispatch(sortWeight(sort));
  //   setselectReload(sort);
  // }
  //onChange={onChange} value={selectReload.sort} */

  const dispatch = useDispatch();
  const [nameOrder, setNameOrder] = useState("A-Z");
  const [populationOrder, setPopulationOrder] = useState("Ascendente");

  // Esta función se ejecutará cada vez que cambie una opción en los selectores
  const applyFilters = () => {
    console.log([nameOrder, populationOrder]);
    dispatch(combinedOrder([nameOrder, populationOrder]));
  };

  // Esta función se ejecutará cuando cambie el selector de orden por nombre
  const handleNameOrderChange = (e) => {
    setNameOrder(e.target.value);
    if (nameOrder !== "") applyFilters(); // Aplica los filtros cuando cambia la opción
  };

  // Esta función se ejecutará cuando cambie el selector de orden por población
  const handlePopulationOrderChange = (e) => {
    setPopulationOrder(e.target.value);
    if (populationOrder !== "") applyFilters(); // Aplica los filtros cuando cambia la opción
  };

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="filtersContainer">
      <div className="orderContainer">
        <select
          id="orderAlph"
          value={nameOrder}
          onChange={handleNameOrderChange}
        >
          <option value="" disabled selected>
            Orden Alfabético
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div className="orderContainer">
        <select
          id="orderPopulation"
          value={populationOrder}
          onChange={handlePopulationOrderChange}
        >
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
        <select id="filterActivity" value="">
          <option value="" disabled selected>
            Actividad
          </option>
          {actList.map((a) => {
            return (
              <option key={a} value={a}>
                {a}
              </option>
            );
          })}
        </select>
      </div>
      <div className="clearFilters">
        <button onClick={(event) => handleClick(event)}>
          <i className="fa fa-refresh" />
        </button>
      </div>
    </div>
  );
};
