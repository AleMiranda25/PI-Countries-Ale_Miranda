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

  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]);

  return (
    <div className="detailContainer">
      <NavBar />
      <div className="detailCard">
        <div className="detailData">
          <h2 className="dataName">{countryId.name.toUpperCase()}</h2>
          <h3>ID: {countryId.id}</h3>
          <h3>CONTINENTE: {countryId.continent}</h3>
          <h3>CAPITAL: {countryId.capital}</h3>
          <h3>SUBREGION: {countryId?.subregion}</h3>
          <h3>ÁREA: {`${countryId?.area} KM²`}</h3>
          <h3>POBLACIÓN: {countryId.population}</h3>
        </div>
        <img src={countryId.flagImage} alter={`Bandera de ${countryId.name}`} />
      </div>
    </div>
  );
};
