//Funcionalidad

// Estilos
import "./module.css";
//Componentes

export default ({
  countriesPerPage,
  totalCountries,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length;

  const paginateAction = (num) => {
    paginate(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const onKeyDown = (event) => {
  //     if(event.keyCode === 13){
  //         if(event.target.value >= 1 && event.target.value <= pageNumbers.length && !isNaN(Number(event.target.value))){
  //             setPagina(Number(event.target.value))
  //         }
  //     }
  // }

  return (
    <div>
      <ul className="pagination">
        <a
          onClick={() => currentPage > 1 && paginateAction(1)}
          className="pageItem"
        >
          &laquo;
        </a>
        <a
          onClick={() => currentPage > 1 && paginateAction(currentPage - 1)}
          className="pageItem"
        >
          &lt;
        </a>
        <a className="currentPage">{`${currentPage} / ${totalPages}`}</a>
        <a
          onClick={() =>
            currentPage < totalPages && paginateAction(currentPage + 1)
          }
          className="pageItem"
        >
          &gt;
        </a>
        <a
          onClick={() => currentPage < totalPages && paginateAction(25)}
          className="pageItem"
        >
          &raquo;
        </a>
        {/* {pageNumbers.map((number) => (
          <li
            key={number}
            value={number}
            className={currentPage === number ? "currentPage" : "pageItem"}
            onClick={onClick}
          >
            {number}
          </li>
        ))} */}
      </ul>
    </div>
  );
};
