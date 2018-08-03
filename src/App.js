import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom';
import GamesPage from './templates/GamePage';
import GameFormPage from './templates/GameFormPage';
import Home from './templates/Home';

class App extends Component {
  render() {
    return (

     <div className="ui container"> 
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Home</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/games">Games</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/games/new">Add New Game</NavLink>
        </div>
        
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/games" component={GamesPage} />
        <Route path="/games/new" component={GameFormPage} />
        <Route path="/game/:_id" component={GameFormPage} /> 
        </div>
    );
  }
}

export default App;