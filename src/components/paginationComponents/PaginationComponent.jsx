import React from "react";
import "./PaginationComponent.css";

export default function PaginationComponent({
  questions,
  itemsPerPage,
  setCurrentPage,
  currentPage,
  pageNumberLimit,
  setPageNumberLimit,
  maxPageNumberLimit,
  setMaxPageNumberLimit,
  minPageNumberLimit,
  setMinPageNumberLimit,
}) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(questions.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : ""}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handlePrevioBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handleSiguienteBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageDecrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageDecrementBtn = <li onClick={handlePrevioBtn}> &hellip; </li>;
  }

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleSiguienteBtn}> &hellip; </li>;
  }

  return (
    <ul className="pageNumbers">
      <li>
        <button
          onClick={handlePrevioBtn}
          disabled={currentPage === pages[0] ? true : false}
        >
          {`< Previo`}
        </button>
      </li>
      {pageDecrementBtn}
      {renderPageNumbers}
      {pageIncrementBtn}
      <li>
        <button
          onClick={handleSiguienteBtn}
          disabled={currentPage === pages[pages.length - 1] ? true : false}
        >
          {`Siguiente >`}
        </button>
      </li>
    </ul>
  );
}
