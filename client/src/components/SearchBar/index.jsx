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
    e.preventDefault();
    setName(e.target.value);
    // console.log(name);
    // // validamos el valor del campo de búsqueda
    // const regex = /^[a-zA-Z0-9]+$/; // expresión regular que solo permite letras y números
    // if (!regex.test(name)) {
    //   alert(
    //     "El campo de búsqueda no puede contener caracteres especiales o estar vacio"
    //   );
    //   return;
    // }

    // // si la validación es correcta, enviamos la búsqueda
    // setError(null); // reseteamos el mensaje de error
    dispatch(searchByName(name));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
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
