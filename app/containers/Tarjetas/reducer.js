/*
 *
 * Tarjetas reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SELECCION_TRAMITE,
} from './constants';

const initialState = fromJS({
  tramiteSeleccionado: null,
});

function tarjetasReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SELECCION_TRAMITE:
      return state.set('tramiteSeleccionado', action.tramite);
    default:
      return state;
  }
}

export default tarjetasReducer;
