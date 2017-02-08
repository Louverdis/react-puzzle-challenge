import { createSelector } from 'reselect';

/**
 * Direct selector to the tramitesYservicios state domain
 */
const selectTramitesYserviciosDomain = () => (state) => state.get('tramitesYservicios');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TramitesYservicios
 */

const makeSelectTramitesYservicios = () => createSelector(
  selectTramitesYserviciosDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTramitesYservicios;
export {
  selectTramitesYserviciosDomain,
};
