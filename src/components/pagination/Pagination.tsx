import ReactPaginate from "react-paginate";

import "./Pagination.scss";

type Pagination = {
  pagesAmount: number;
  page: number;
  setPage: (arg: number) => void;
};

export default function Pagination({ pagesAmount, page, setPage }: Pagination) {
  return (
    <ReactPaginate
      pageCount={pagesAmount}
      forcePage={page === 2 ? 1 : page - 1}
      containerClassName="pagination"
      previousLabel="Prev"
      nextClassName="next"
      previousClassName="prev"
      pageClassName="btn-floating waves-effect page waves-light indigo lighten-2 "
      activeClassName="curPage"
      disabledClassName="disabled"
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      onPageChange={(data) => setPage(data.selected + 1)}
    />
  );
}
