import React from 'react';
import { useState, useEffect } from 'react';
import Main from "./pages/main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <Router>
        <Main />
      </Router>
      <h1>Data from the Backend:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
