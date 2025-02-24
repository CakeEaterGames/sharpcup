import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  axios.get('http://185.179.190.134:3000/').then(resp=>{
    console.log('resp')
    console.log(resp.data)
    setData(resp.data); // Update state with the fetched data
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Штука крутится
        </p>
        <p>
          {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
