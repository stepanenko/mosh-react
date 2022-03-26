
import { useEffect, useState } from "react";

const URL = 'https://restcountries.com/v3.1/lang/';


const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const promise = await fetch(URL + 'french');
        const resCountries = await promise.json();
        console.log('RES:', resCountries);
        setCountries(resCountries);
      } catch (err) {
        console.log('Error while fetching', err);
      }
    }

    fetchCountries();
  }, []);

  return (
    <>
      <h2>Countries</h2>
      <label htmlFor='language'>Language</label>
      <input type="text" name='language' className="form-control" />
      <h2>French speaking countries:</h2>
      <ul>
        {countries.map(c => <li key={c.name.common}>{c.name.common} {c.flag} Ppl: {c.population}</li>)}
      </ul>
      <pre></pre>
    </>
  );
}

export default Countries;
