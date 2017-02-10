/*
 *
 * Tarjetas actions
 *
 */

 import {
   SELECCION_TRAMITE,
 } from './constants';

 export function seleccionTramite(tramite) {
   return {
     type: SELECCION_TRAMITE,
     tramite,
   };
 }
