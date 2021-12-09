import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './Components/Users/Users';
import Home from './Components/Home/Home';
import PageHeader from './Components/Header/Header';
import './App.scss';

const App = () => {
  return (
    <Router>
      <PageHeader />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;
