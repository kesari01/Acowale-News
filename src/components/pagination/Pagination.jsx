import React from "react";
import Pagination from "react-bootstrap/Pagination";

export function PaginationComponent({
  totalPages,
  pageLimit,
  currentPage,
  onPageChange,
}) {
  // Helper to create the pagination numbers
  const getPaginationItems = () => {
    let items = [];
    const startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
    const endPage = Math.min(totalPages, startPage + pageLimit - 1);

    // First page and previous button
    if (currentPage > 1) {
      items.push(
        <Pagination.First key="first" onClick={() => onPageChange(1)} />
      );
      items.push(
        <Pagination.Prev
          key="prev"
          onClick={() => onPageChange(currentPage - 1)}
        />
      );
    }

    // Page numbers within the range
    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    // Next button and last page
    if (currentPage < totalPages) {
      items.push(
        <Pagination.Next
          key="next"
          onClick={() => onPageChange(currentPage + 1)}
        />
      );
      items.push(
        <Pagination.Last key="last" onClick={() => onPageChange(totalPages)} />
      );
    }

    return items;
  };

  return (
    <div>
      <Pagination>{getPaginationItems()}</Pagination>
      <br />
    </div>
  );
}
