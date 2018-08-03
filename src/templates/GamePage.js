import React from 'react';
import GamesList from '../functions/GameList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGames, deleteGame } from '../functions/actions';

class GamesPage extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    return (
      <div>
        <h1>Games List</h1>

        <GamesList games={this.props.games} deleteGame={this.props.deleteGame}/>
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage);