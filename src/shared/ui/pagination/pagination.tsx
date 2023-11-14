//в рамках задания реализован самый простой вариант пагинации, без скрытия страниц и т.п.

import { Dispatch, SetStateAction } from "react";
import { StyledPaginationItem, StyledPaginationList } from "./pagination.styled";

type PaginationProps = {
  total: number;
  perPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

function Pagination({ total, perPage, currentPage, setCurrentPage }: PaginationProps) {
  const pageCount = Math.ceil(total / perPage);
  const pageArray = [...Array(pageCount + 1).keys()].slice(1);

  return (
    <StyledPaginationList>
      {pageArray.map((number) => (
        <StyledPaginationItem
          key={number}
          onClick={() => { setCurrentPage(number) }}
          className={currentPage === number? 'active' : 'not_active'}
        >
          {number}
        </StyledPaginationItem>
        ))}
    </StyledPaginationList>
  )
}

export default Pagination;