import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Navbar1 from './components/Navbar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Settings from './components/Settings';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
              <Routes>
                <Route
                  path="/Settings"
                  element={
                    <>
                      <Navbar />
                      <Settings/>
                    </>
                  }
                />
                <Route
                  path="/"
                  element={
                    <>
                      <Navbar1 />
                      <Dashboard />
                      
                    </>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;