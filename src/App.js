import React from 'react';
import { HashRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import './styles/main.scss';
import LandingPage from './pages/landing';
import BookInfo from './pages/bookInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/:id" component={BookInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
