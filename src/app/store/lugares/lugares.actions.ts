import { createAction, props } from '@ngrx/store';
import { Lugar } from '../../modelos/lugar';

export const listarLugares = createAction('[Lugars] listar');
export const setLugares = createAction(
  '[Lugares] set',
  props<{ data: Lugar[] }>()
);
export const filtrarPersonajeLugar = createAction(
  '[Lugares] filtrarPersonaje',
  props<{ idpersonaje: number }>()
);
export const obtenerLugar = createAction(
  '[Lugares] obtener',
  props<{ idlugar: number }>()
);
