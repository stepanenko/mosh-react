
import { useEffect, useState } from "react";

import Select from "./common/select";

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
      <ul>
        {countries.map(c =>
          <li key={c.name.common}>{c.name.common} ({c.region}) {c.flag} Ppl: {c.population}</li>
        )}
      </ul>
    </>
  );
}

export default Countries;