// Funcionalidad
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";
// Estilos
import "./module.css";
// Componentes

export default () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  //const [error, setError] = useState(null); // agregamos un estado para el mensaje de error
  const handleChange = (e) => {
    setName(e.target.value);
    dispatch(searchByName(name));
  };

  return (
    <div className="group">
      <i className="fa fa-search" />
      <input
        placeholder="Search"
        type="search"
        className="input"
        onChange={handleChange}
      />
    </div>
  );
};
