import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<RestaurantList />} />
      <Route path="/menu/:restaurantId" element={<Menu />} />
    </Routes>
  </Router>
);

export default App;
