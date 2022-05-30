import React from "react";
import ReactPaginate from "react-paginate";
import "./PaginationComponent.css";

export default function PaginationComponent({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="< Previous"
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageLinkClassName="page-num"
      previousLinkClassName="page-num"
      nextLinkClassName="page-num"
      activeLinkClassName="active"
      forcePage={pageCount}
    />
  );
}
