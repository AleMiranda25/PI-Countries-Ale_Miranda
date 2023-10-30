//Funcionalidad
import { useNavigate } from "react-router";
// Estilos
import "./module.css";
//Componentes

export default ({ id, name, flagImage, continent, capital }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card" onClick={() => navigate(`/detail/${id}`)}>
        <div className="content">
          <div className="back">
            <div className="back-content">
              <img src={flagImage} />
              <strong>{name}</strong>
            </div>
          </div>
          <div className="front">
            <img src={flagImage} alt={`Bandera de ${name}`} />

            <div className="front-content">
              <small className="badge">{id}</small>
              <small className="badge">Continente: {continent}</small>
              <small className="badge">Capital: {capital}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
