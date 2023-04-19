import React from 'react';
import Navbar from './navbar';

export default function Header() {
  return (
    <nav>
      <div className="header flex">
        <div className="header1 flex">
          <img src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png" alt="spacehub" className="headerimg" />
          <h2>Space Travelers&apos; Hub</h2>
        </div>
        <div className="flex">
          <Navbar />
        </div>
      </div>
      <hr className="hr" />
    </nav>
  );
}
