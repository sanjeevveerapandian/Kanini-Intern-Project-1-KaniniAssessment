import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card job-seeker-card">
            <img
              src="women.jpg"
              className="card-img"
              alt="Job Seeker"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title3 job-seeker-card-title">Setup Job Seeker Assessment</h5>
              <p className="card-text job-seeker-card-text">Create assessments for Job Seekers/Freshers</p>
              <a href="#" className="btn btn-outline-success job-seeker-card-btn">Create Assessment</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card job-seeker-card">
            <img
              src="women.jpg"
              className="card-img"
              alt="Job Seeker"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title3 job-seeker-card-title">Setup Job Seeker Assessment</h5>
              <p className="card-text job-seeker-card-text">Create assessments for Job Seekers/Freshers</p>
              <a href="#" className="btn btn-outline-success job-seeker-card-btn">Create Assessment</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card info-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <i className="bi bi-lightbulb-fill button-icon"></i>
                <div className="ml-3">
                  <h5 className="card-title">Add Questions</h5>
                  <p className="card-text">Last created on 27 June 2022<br/>08:00am</p>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <i className="bi bi-arrow-right-circle-fill button-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card info-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <i className="bi bi-lightbulb-fill button-icon"></i>
                <div className="ml-3">
                  <h5 className="card-title">Questions Bank</h5>
                  <p className="card-text">Last created on 27 June 2022<br/>08:00am</p>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <i className="bi bi-arrow-right-circle-fill button-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card info-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <i className="bi bi-lightbulb-fill button-icon"></i>
                <div className="ml-3">
                  <h5 className="card-title">Jobseeker Assessments</h5>
                  <p className="card-text">Last created on 27 June 2022<br/>08:00am</p>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <i className="bi bi-arrow-right-circle-fill button-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card info-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <i className="bi bi-lightbulb-fill button-icon"></i>
                <div className="ml-3">
                  <h5 className="card-title">Employee Assessments</h5>
                  <p className="card-text">Last created on 27 June 2022<br/>08:00am</p>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <i className="bi bi-arrow-right-circle-fill button-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card info-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <i className="bi bi-lightbulb-fill button-icon"></i>
                <div className="ml-3">
                  <h5 className="card-title">Employee Management</h5>
                  <p className="card-text">Last created on 27 June 2022<br/>08:00am</p>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <i className="bi bi-arrow-right-circle-fill button-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card info-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <i className="bi bi-lightbulb-fill button-icon"></i>
                <div className="ml-3">
                  <h5 className="card-title">Request Received</h5>
                  <p className="card-text">Last created on 27 June 2022<br/>08:00am</p>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <i className="bi bi-arrow-right-circle-fill button-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
