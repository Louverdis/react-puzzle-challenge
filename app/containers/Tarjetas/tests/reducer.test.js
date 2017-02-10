
import { fromJS } from 'immutable';
import tarjetasReducer from '../reducer';

describe('tarjetasReducer', () => {
  it('returns the initial state', () => {
    expect(tarjetasReducer(undefined, {})).toEqual(fromJS({}));
  });
});
