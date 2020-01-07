import React from 'react';
import CustomNavBar from './components/CustomNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Kanto from './components/Kanto';
import { PokeProvider } from './context/PokeContext';
import PokeCard from './components/PokeCard';
import NotFound from './components/NotFound'
import Footer from './components/Footer';

function App() {
  return (
    <PokeProvider>
      <Router>
        <div className="App">
          <CustomNavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pokedex' component={Kanto} />
            <Route exact path='/pokecard/:name' component={PokeCard} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </PokeProvider>
  );
}

export default App;
