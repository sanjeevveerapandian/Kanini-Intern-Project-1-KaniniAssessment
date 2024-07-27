import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "./Slice";
import "../App.css";

const Settings = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
//   console.log(formState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert the state to a plain object for logging
    const plainState = JSON.parse(JSON.stringify(formState));
    console.log(plainState);
    
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-start">
        <div className="col-5 ms-1 mx-5">
          <h2 className="card-title">Personal</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col card-title2">
                <label htmlFor="inputFirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                />
              </div>
              <div className="col card-title2">
                <label htmlFor="inputLastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mb-3 card-title2">
              <label htmlFor="inputDepartment">Department</label>
              <select
                className="form-select"
                id="inputDepartment"
                name="department"
                value={formState.department}
                onChange={handleChange}
              >
                <option>Human Resource</option>
             
              </select>
            </div>

            <div className="row mb-3 card-title2">
              <div className="col">
                <label htmlFor="inputDOB">Date Of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputDOB"
                  name="dob"
                  value={formState.dob}
                  onChange={handleChange}
                  placeholder="11-Aug-1993"
                />
              </div>
              <div className="col card-title2">
                <label htmlFor="inputGender">Gender</label>
                <select
                  id="inputGender"
                  className="form-control"
                  name="gender"
                  value={formState.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  
                </select>
              </div>
            </div>

            <div className="mb-3 card-title2">
              <label htmlFor="inputEducation">Education Level</label>
              <select
                className="form-select"
                id="inputEducation"
                name="education"
                value={formState.education}
                onChange={handleChange}
              >
                <option>Computer Science</option>
                <option>IT</option>
               
              </select>
            </div>

            <div className="d-flex">
              <button type="submit" className="btn btn-info me-2">
                Save Changes
              </button>
              <button type="button" className="btn card-title2">
                Change Password
              </button>
            </div>
          </form>
        </div>

        <div className="col-5 mx-3">
          <h2 className="card-title">Contact Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col card-title2">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="subramaniyam@kanini.com"
                />
              </div>
              <div className="col card-title2">
                <label htmlFor="inputPhoneNumber">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPhoneNumber"
                  name="phoneNumber"
                  value={formState.phoneNumber}
                  onChange={handleChange}
                  placeholder="+91 698 752 3687"
                />
              </div>
            </div>

            <div className="mb-3 card-title2">
              <label htmlFor="inputLocation">Location</label>
              <select
                id="inputLocation"
                className="form-control"
                name="location"
                value={formState.location}
                onChange={handleChange}
              >
                <option value="Chennai">Chennai</option>
                <option value="Chennai">Mumbai</option>
            
              </select>
            </div>
            <div className="card-title2">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="address"
                value={formState.address}
                onChange={handleChange}
                placeholder="Plot No 451 Light House Part Shivaji Nagar Check Naka Thane Chennai,400604,India"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
