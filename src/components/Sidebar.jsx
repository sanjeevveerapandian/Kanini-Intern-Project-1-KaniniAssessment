import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="image" src="/download.png" alt="kanini" />
      <span className="h1 name">Kanini</span>
      <br />
      <span className="px-5 ms-5">Assessment</span>

      <ul className="list-group list-group-flush">
        <li className="list-group-item list-group-item-action my-2">
          <i className="bi bi-intersect fs-5 me-2"></i>
          <Link to="/" className="text-decoration-none text-dark">Dashboard</Link>
        </li>
        <li className="list-group-item list-group-item-action my-2 py-2">
          <i className="bi bi-journal fs-4 me-2"></i>
          <span>Questions</span>
        </li>
        <li className="list-group-item list-group-item-action my-2">
          <i className="bi bi-bag fs-4 me-2"></i>
          <span>Jobseeker</span>
        </li>
        <li className="list-group-item list-group-item-action my-2">
          <i className="bi bi-person-vcard-fill me-3"></i>
          <span>Employee</span>
        </li>
        <li className="list-group-item list-group-item-action my-2">
          <i className="bi bi-gear fs-4 me-2"></i>
          <Link to="/Settings" className="text-decoration-none text-dark">Settings</Link>
        </li>
        
          <li className="list-group-item logout" src="/Mask.png" alt="kanini
          ">
             </li>
            <img className='image1' src="/Mask.png" alt="kanini" />
            <li className='nav-item button py-3 px-3 my-4 list-group-item'>
            <i class="bi bi-box-arrow-right"></i>
              <span className="log">Logout</span>
            </li>

        
      </ul>
    </div>
  );
}

export default Sidebar;
