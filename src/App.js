import React, { useEffect, useState } from 'react';
import './App.css';
import BasicTable from './component/table';

function App() {
  const [list, setList] = useState([]);
  return (

    <div className="App">
      <BasicTable/>
    </div>
  );
}

export default App;
