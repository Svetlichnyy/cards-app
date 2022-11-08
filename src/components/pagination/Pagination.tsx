import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

import "./Pagination.scss";

type Pagination = {
  page: number;
  setPage: (arg: number) => void;
  pagesAmount: number;
};

export default function Pagination({ page, setPage, pagesAmount }: Pagination) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [formValue, setFormValue] = useState({
    name: searchParams.get("name") || "",
    status: searchParams.get("status") || "",
    gender: searchParams.get("gender") || "",
    page: searchParams.get("gender") || "1",
  });

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
      onPageChange={(data) => {
        const page = data.selected + 1;
        setPage(page);
        setSearchParams({
          name: formValue.name,
          status: formValue.status,
          gender: formValue.gender,
          page: page.toString(),
        });
      }}
    />
  );
}
