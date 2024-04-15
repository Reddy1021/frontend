import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useState } from 'react';
import MyForm from './components/Form';
import MyTable from './components/Table';
function App() {


  return (
    <div className="App">
       <MyForm/>
     </div>
    
  );
}

export default App;
