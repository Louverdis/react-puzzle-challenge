
import { fromJS } from 'immutable';
import tramitesYserviciosReducer from '../reducer';

describe('tramitesYserviciosReducer', () => {
  it('returns the initial state', () => {
    expect(tramitesYserviciosReducer(undefined, {})).toEqual(fromJS({}));
  });
});
