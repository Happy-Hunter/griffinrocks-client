import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { useState } from "react";
import '../css/App.css';
import logo from '../logo/griffin-rocks-photography-logo.png'

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="logo">
      <img src={ logo } width="300"  alt="GriffinRocks Photography logo"/>
      </a>

    <p>An archive of music photography by Melbourne photographer Kate Griffin</p>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li className="navLinks">
          <Link to="/">Home</Link>
          </li>
          <li className="navLinks">
          <Link to="/live-music">Live Music</Link>
          </li>
          <li className="navLinks">
          <Link to="/band-photos">Band Photos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}