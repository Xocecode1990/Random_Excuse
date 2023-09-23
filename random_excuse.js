import './App.css';
import { useState, useEffect } from 'react';

//family , party ,office
//https://excuser-three.vercel.app/v1/excuse
/* {
  "id": 307,
  "excuse": "A big theft happened in my house. Gotta look after my stuff.",
  "category": "college"
}*/

function App() {
  const [listexcuse, Setlistexcuse] = useState([]);

  const PartyExcuse = (excuse) => {
    fetch('https://excuser-three.vercel.app/v1/excuse')
      .then((resp) => resp.json())
      .then((data) => {
        Setlistexcuse(data[0].excuse);
      });
  };

  return (
    <div className="App">
      <h1>Generate and Excuse</h1>
      <button onClick={() => PartyExcuse('Party')}>Party</button>
      <button onClick={() => PartyExcuse('Family')}>Family</button>
      <button onClick={() => PartyExcuse('Office')}>Office</button>
      <div style={{ paddingTop: 200 }}>{listexcuse}</div>
    </div>
  );
}

export default App;
