import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = () => {
  return (
    <header className="pageHeader">
      <h1>AMDOCS</h1>
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/users">
          <span>Users</span>
        </Link>
      </nav>
    </header>
  );
};
export default PageHeader;
