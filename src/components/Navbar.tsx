import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper #9c27b0 purple px1">
      <a href="/" className="brand-logo">
        React Typescript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">Инфо</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
