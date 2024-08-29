

import React from 'react';
// import logo from  "./logo.jpeg";
import logo from "./assests/logo.jpeg"
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
        <div className="container-fluid flex-column mt-5">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="150" height="86" className="d-inline-block align-text-top"/>
            
          </a>

          <div className="d-flex flex-column">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav flex-column mt-5">
                <li className="nav-item text-center">
                <i class="fa-solid fa-user-group text-white fs-1  pt-1 "></i>
                  <a className="nav-link text-white " aria-current="page" href="#">Student Management</a>
                </li>
                <li className="nav-item text-center mt-4">
                <i class="fa-solid fa-bars-progress text-white fs-1 pt-1 "></i>
                  <a className="nav-link text-white" href="#">Financial Management </a>
                </li>
                <li className="nav-item text-center mt-4">
                <i class="fa-solid fa-certificate text-white fs-1  pt-1 "></i>
                  <a className="nav-link text-white" href="#">Quality Control</a>
                </li>
                <li className="nav-item text-center mt-4">
                <i class="fa-solid fa-table text-white fs-1  pt-1"></i>
                  <a className="nav-link text-white" href="#">Report Delivery</a>
                </li>
                <li className="nav-item text-center mt-4">
                <i class="fa-solid fa-file text-white fs-1 pt-1"></i>
                  <a className="nav-link text-white" href="#">Attendance</a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
        
          width: 250px;
        }
        .navbar-nav .nav-link {
          padding: 0.5rem 1rem;
        }
      `}</style>
    </div>
  );
}

