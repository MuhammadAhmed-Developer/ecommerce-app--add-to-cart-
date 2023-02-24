import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <Link to='/' class="navbar-brand"><i className="bi bi-egg-fried fs-2 text-warning"></i> Items</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/cart' className="nav-link  btn rounded-5 border border-1 hover  me-5" aria-current="page" ><i class="bi bi-bag-check-fill"></i> My Cart</Link>
        </li>
        <li className="nav-item">
          <Link to='/signIN' className="nav-link btn btn-light rounded-5 me-2 text-dark">Sign in</Link>
        </li>
        <li className="nav-item">
          <Link to='/signUp' className="nav-link btn rounded-5 border border-1 hover" href="#">Sign up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
