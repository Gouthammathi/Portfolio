import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;