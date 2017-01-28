/*
 *
 * Board actions
 *
 */

import {
  SELECT_TILE,
  MOVE_TILE,
} from './constants';

export function selectTile(position) {
  return {
    type: SELECT_TILE,
    position,
  };
}

export function moveTile(direction) {
  return {
    type: MOVE_TILE,
    direction,
  };
}
