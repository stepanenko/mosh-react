
import { useEffect, useState } from "react";

const URL = 'https://api.countrylayer.com/v2/';
const ACCESS_KEY = '08f66956ae63a3ef63272e3b37977e6ee0';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [myCountries, setMyCountries] = useState([
    { id: '1', name: 'Ukraine' },
    { id: '2', name: 'Germany' },
    { id: '3', name: 'France' },
  ]);

  useEffect(() => {
    async function fetchCountries() {

      console.log('Fetched');
    }

    fetchCountries();
  });

  return (
    <>
      <h2>Countries</h2>
      <ul>
        {myCountries.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
      <pre></pre>
    </>
  );
}

export default Countries;
