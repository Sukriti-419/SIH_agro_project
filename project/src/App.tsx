import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { DataExplorer } from './pages/DataExplorer';
import { Datasets } from './pages/Datasets';
import { Walkthrough } from './pages/Walkthrough';
import { About } from './pages/About';
import { Settings } from './pages/Settings';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explorer" element={<DataExplorer />} />
          <Route path="/datasets" element={<Datasets />} />
          <Route path="/walkthrough" element={<Walkthrough />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;