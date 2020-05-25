import React from 'react';
import './App.css';
import Header from './components/header';
import './styles/main.scss';
import LandingPage from './pages/landing'

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
