import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Skill Swap</h1>
      <button className="hamburger" onClick={() => setOpen(o => !o)}>
        ☰
      </button>
      <div className={`nav-links ${open ? 'active' : ''}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/requests" onClick={() => setOpen(false)}>Requests</NavLink>
        <NavLink to="/login" onClick={() => setOpen(false)}>Login</NavLink>
        <NavLink to="/send-request" onClick={() => setOpen(false)}>Send Request</NavLink>
      </div>
      <NavLink to="/" end className="nav-link">Browse Skills</NavLink>
<NavLink to="/profile" className="nav-link">My Profile</NavLink>
<NavLink to="/swap-requests" className="nav-link">Swap Requests</NavLink>
<NavLink to="/feedback" className="nav-link">Feedback</NavLink>
<NavLink to="/admin" className="nav-link">Admin</NavLink>
    </nav>
  );
}
