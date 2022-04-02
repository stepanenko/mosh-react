
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";


function CountriesTable({ countries, sortColumn, onSort }) {
  const columns = [
    { label: 'Flag', path: 'flag' },
    { label: 'Title', path: 'name.common' },
    { label: 'Region', path: 'region' },
    { label: 'Population', path: 'population' },
  ];

  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody
        data={countries}
        columns={columns}
      />
    </table>
  );
}

export default CountriesTable;
