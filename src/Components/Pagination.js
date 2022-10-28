import React from "react";
import "./Pagination.css"
 


const Pagination = ({
    totalPages,
    handlePrev,
    handleClick,
    handleNext,
    disabledPrev,
    disabledNext,
  }) => {
    const pages = [...Array(totalPages).keys()].map((num) => num + 1);
    // const [page, setPage] = useState(1);
  
    return (
      <div className="pagination">
        <button
          disabled={disabledPrev}
          aria-disabled={disabledPrev}
          onClick={() => handlePrev()}
        className="btn-main">
          Prev
        </button>
  
        {pages.map((num) => (
          <button key={num} onClick={() => handleClick(num)} className="btn-main">
            {num}
          </button>
        ))}
  
        <button
          disabled={disabledNext}
          aria-disabled={disabledNext}
          onClick={() => handleNext()}
        className="btn-main">
          Next
        </button>
      </div>
    );
  };
  export default Pagination;