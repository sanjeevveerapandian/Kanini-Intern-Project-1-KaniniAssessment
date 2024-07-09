import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar1 from './components/Navbar1';
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 ">
            <Sidebar />
          </div>
          <div className="col-10">
          <Navbar1/>
          <Dashboard/>
            {/* <Navbar />
            <Content/> */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
