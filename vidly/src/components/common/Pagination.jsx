
import React from 'react';
import _ from 'lodash';

const Pagination = props => {
  const { itemsCount, pageSize } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  // const onPageChange = () => {

  // };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} sclassName="page-item">
            <a className="page-link" href>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
