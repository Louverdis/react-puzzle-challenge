
import { fromJS } from 'immutable';
import boardReducer from '../reducer';

describe('boardReducer', () => {
  it('returns the initial state', () => {
    expect(boardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
