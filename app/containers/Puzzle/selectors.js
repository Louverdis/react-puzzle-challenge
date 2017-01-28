import { createSelector } from 'reselect';

/**
 * Direct selector to the board state domain
 */
const selectPuzzleDomain = () => (state) => state.get('puzzle');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Board
 */

const makeSelectPuzzle = () => createSelector(
  selectPuzzleDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPuzzle;
export {
  selectPuzzleDomain,
};
