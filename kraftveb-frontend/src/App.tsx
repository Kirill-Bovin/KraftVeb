import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';


const App: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Layout>
);

export default App;