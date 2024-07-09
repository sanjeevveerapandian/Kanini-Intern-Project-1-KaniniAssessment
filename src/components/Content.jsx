import React from "react";
import "../App.css";

const Content = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-start">
        <div className="col-5 ms-1 mx-5">
          <h2 className="card-title">Personal</h2>
          <form>
            <div className="row mb-3">
              <div className="col card-title2">
                <label htmlFor="inputFirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  placeholder="First name"
                />
              </div>
              <div className="col card-title2">
                <label htmlFor="inputLastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mb-3 card-title2">
              <label htmlFor="inputDepartment">Department</label>
              <select className="form-select " id="inputDepartment">
                <option> Human Resource</option>
              </select>
            </div>

            <div className="row mb-3 card-title2">
              <div className="col">
                <label htmlFor="inputDOB">Date Of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputDOB"
                  placeholder="11-Aug-1993"
                />
              </div>
              <div className="col card-title2">
                <label htmlFor="inputGender">Gender</label>
                <select id="inputGender" className="form-control">
                  <option selected>Male</option>
                </select>
              </div>
            </div>

            <div className="mb-3 card-title2">
              <label htmlFor="inputEducation">Education Level</label>
              <select className="form-select " id="inputDepartment">
                <option selected>Computer Science</option>
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
          <form>
            <div className="row mb-3 ">
              <div className="col card-title2">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="subramaniyam@kanini.com"
                />
              </div>
              <div className="col card-title2">
                <label htmlFor="inputPhoneNumber">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPhoneNumber"
                  placeholder="+91 698 752 3687"
                />
              </div>
            </div>

            <div className="mb-3 card-title2">
              <label htmlFor="inputLocation">Location</label>
              <select id="inputLocation" className="form-control">
                <option selected>Chennai</option>
                <option>...</option>
              </select>
            </div>
            <div className="card-title2">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Plot No 451 Light House Part Shivaji Nagar Check Naka Thane Chennai,400604,India"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Content;
