import React from 'react';
import { NavLink } from 'react-router-dom';
import links from './link';

export default function Navbar() {
  return (
    <div>
      <ul className="links flex">
        {links.map((route) => (
          <li key={route.text}>
            <NavLink to={route.path}>{route.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
