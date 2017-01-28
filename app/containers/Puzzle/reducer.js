/*
 *
 * Board reducer
 *
 */

import { fromJS } from 'immutable';
import { isNull } from 'lodash/lang';
import {
  SELECT_TILE,
  MOVE_TILE,
} from './constants';

const initialState = fromJS({
  board: [1, 2, 3, 4, 5, 6, 7, 8, 0],
  selectedPosition: null,
});

function puzzleReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_TILE:
      return state
        .set('selectedPosition', action.position);

    case MOVE_TILE: // eslint-disable-line
      const position = state.get('selectedPosition');

      // Checks if a tile is currently selected.
      if (isNull(position)) {
        return state;
      }

      let newPosition = 0;
      switch (action.direction) {
        case 'UP': newPosition = position - 3; break;
        case 'DOWN': newPosition = position + 3; break;
        case 'LEFT': newPosition = position - 1; break;
        case 'RIGHT': newPosition = position + 1; break;
        default: break;
      }

      const newPositionValue = state.get('board').get(newPosition, null);
      const selectedPositionValue = state.get('board').get(position);

      // Checks for Index out of bounds or if the desired position is free
      if (isNull(newPositionValue) || newPositionValue !== 0) {
        return state;
      }

      // update board
      const board = state.get('board');
      return state
        .set('board',
          board
            .set(position, 0)
            .set(newPosition, selectedPositionValue))
        .set('selectedPosition', newPosition);
    default:
      return state;
  }
}

export default puzzleReducer;
