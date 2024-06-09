import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
  const {film} = useContext(Context);
  const pageCount = Math.ceil(film.totalCount / film.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i+1)
  }

  return(
    <div className="d-flex justify-content-center">
    <Pagination className="mt-5">
      {pages.map(page => 
        <Pagination.Item active={film.page === page} onClick={() => film.setPage(page)}>{page}</Pagination.Item>
      )}
    </Pagination>
    </div>
  )
});

export default Pages;