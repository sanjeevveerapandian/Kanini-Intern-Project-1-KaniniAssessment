import React from 'react';
import '../App.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex flex-column">
          <h1 className="card-title">Settings</h1>
          <p className="card-text card-title2">View complete details of all location and its corresponding details.</p>
        </div>
        {/* <form className="d-flex ms-auto" action="">
          <button className='card-title3'>
          <input type="search" className="btn btn-outline-button form-control me-2" placeholder="Search"></input>
          <i className="fas fa-search search-icon"></i>
          </button>
         
        </form> */}
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
          <div className='pic2'>
          
          <img className='pic' src="/pic.png" alt="" />
          Subramaniyam
            </div>
              
      </div>
    </nav>
  );
};

const Banner = () => {
  return (
    <div className="banner-container">
      <img src="banner.png" alt="Banner" className="banner-image" />
      <button className="btn edit-button">
        <i className="fas fa-edit"></i> Edit
      </button>
    </div>
  );
};
const Profile = () => {
  return (
    <div className="profile-container">
      <img src="profilepics.png" alt="Profile" className="profile-picture" />
      <div className="profile-details">
        <h2>2358-Subramaniyam</h2>
        <p>Senior Associate - IT Application Development </p>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Profile />
    </div>
  );
};

export default App;
