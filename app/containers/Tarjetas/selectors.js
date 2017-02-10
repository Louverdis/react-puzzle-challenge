import { createSelector } from 'reselect';

/**
 * Direct selector to the tarjetas state domain
 */
const selectTarjetasDomain = () => (state) => state.get('tarjetas');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tarjetas
 */

const makeSelectTarjetas = () => createSelector(
  selectTarjetasDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTarjetas;
export {
  selectTarjetasDomain,
};
