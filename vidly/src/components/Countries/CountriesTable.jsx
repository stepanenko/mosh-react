
import { useState } from "react";

import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";


function CountriesTable({ countries }) {
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });
  const columns = [
    { label: 'Flag', path: 'flag' },
    { label: 'Title', path: 'name.common' },
    { label: 'Region', path: 'region' },
    { label: 'Population', path: 'population' },
  ];

  const handleSort = (sortColumn) => {
    console.log('SORT', sortColumn);
    setSortColumn({ ...sortColumn });
  };

  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={handleSort}
      />
      <TableBody
        data={countries}
        columns={columns}
      />
    </table>
  );
}

export default CountriesTable;
