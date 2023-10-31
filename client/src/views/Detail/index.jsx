// Funcionalidad
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../redux/actions.js";
// Estilos
import "./module.css";
// Componentes
import { NavBar } from "../../components/index.js";

export default () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const countryId = useSelector((state) => state.countryId);
  console.log(countryId);
  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]);

  return (
    <div className="detailContainer">
      <NavBar />
      <div className="detailCard">
        <div className="detailData">
          <h2 className="dataName">{countryId.name?.toUpperCase()}</h2>
          <h3>ID: {countryId.id}</h3>
          <h3>CONTINENTE: {countryId.continent}</h3>
          <h3>CAPITAL: {countryId.capital}</h3>
          <h3>SUBREGION: {countryId?.subregion}</h3>
          <h3>ÁREA: {`${countryId?.area} KM²`}</h3>
          <h3>POBLACIÓN: {countryId.population}</h3>
          <h3>
            ACTIVIDADES:
            {`  ${
              countryId?.Activities?.length > 0
                ? countryId?.Activities.length
                : ""
            }`}
            {countryId?.Activities?.length > 0
              ? countryId.Activities.flatMap((a) => <p>&bull; {a.name}</p>)
              : "No posee actividades"}
          </h3>
        </div>
        <div className="dataImage">
          <img
            src={countryId.flagImage}
            alter={`Bandera de ${countryId.name}`}
          />
        </div>
      </div>
    </div>
  );
};
