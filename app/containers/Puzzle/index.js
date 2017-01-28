/*
 *
 * Puzzle
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BoardTile from 'components/BoardTile';

import Board from './Board';
import FreeTile from './FreeTile';
import { moveTile, selectTile } from './actions';
import makeSelectPuzzle from './selectors';

export class Puzzle extends React.Component {
  componentDidMount() {
    document.addEventListener('keyup', (event) => {
      const keyName = event.key;

      if (keyName === 'ArrowDown') {
        this.props.dispatch(moveTile('DOWN'));
      }
      if (keyName === 'ArrowUp') {
        this.props.dispatch(moveTile('UP'));
      }
      if (keyName === 'ArrowLeft') {
        this.props.dispatch(moveTile('LEFT'));
      }
      if (keyName === 'ArrowRight') {
        this.props.dispatch(moveTile('RIGHT'));
      }
    }, false);
  }

  render() {
    const { board, selectedPosition } = this.props.Puzzle;
    return (
      <Board>
        {board.map((value, index) => value === 0 ?
          <FreeTile key={`tile-${index}`} /> :
          <BoardTile
            key={`tile-${index}`}
            label={value}
            position={index}
            selected={index === selectedPosition}
            onTileClick={this.props.onTileClick}
          />
        )}
      </Board>
    );
  }
}

Puzzle.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onTileClick: PropTypes.func,
  Puzzle: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  Puzzle: makeSelectPuzzle(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onTileClick: (position) => dispatch(selectTile(position)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle);
