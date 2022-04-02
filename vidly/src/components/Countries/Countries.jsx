
import { useEffect, useState } from "react";
import _ from "lodash";

import Select from "../common/select";
import CountriesTable from "./CountriesTable";

const URL = 'https://restcountries.com/v3.1/lang/';
const options = [
  { _id: 'german', name: 'German' },
  { _id: 'french', name: 'French' },
  { _id: 'english', name: 'English' },
  { _id: 'portuguese', name: 'Portuguese' },
  { _id: 'italian', name: 'Italian' },
  { _id: 'spanish', name: 'Spanish' },
];

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [language, setLanguage] = useState('german');
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  useEffect(() => {
    async function fetchCountries() {
      try {
        const promise = await fetch(URL + language);
        const resCountries = await promise.json();
        console.log('Countries:', resCountries);
        setCountries(resCountries);
      } catch (err) {
        console.log('Error while fetching', err);
      }
    }

    fetchCountries();
  }, [language]);

  const handleChange = ({ currentTarget: input }) => {
    setLanguage(input.value);
  };

  const handleSort = (sortColumn) => {
    console.log('SORT', sortColumn);
    setSortColumn({ ...sortColumn });
  };

  const getSortedCountries = () => {
    return _.orderBy(countries, sortColumn.path, sortColumn.order);
  };

  return (
    <>
      <h2>Countries</h2>
      <Select
        name='language'
        label='Language'
        options={options}
        onChange={handleChange}
      />
      <h2>{language.toUpperCase()} speaking countries:</h2>
      <CountriesTable
        sortColumn={sortColumn}
        onSort={handleSort}
        countries={getSortedCountries()}
      />
    </>
  );
}

export default Countries;
