import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex flex-column">
          <h1 className="card-title1">Welcome Admin!</h1>
          <p className="card-text card-title2">
            View complete details of all location and its corresponding details.
          </p>
        </div>

        <form>
          <div className="row mb-3 search-icon">
            <input
              type="text"
              className="form-control mr-sm-4  "
              id="inputFirstName"
              placeholder="search"
            />
          </div>
        </form>
        <div className="notification-bell">
          <i className="fas fa-bell"></i>
        </div>
        <div className="pic2">
          <img className="pic" src="/pic.png" alt="" />
          HR Admin
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
