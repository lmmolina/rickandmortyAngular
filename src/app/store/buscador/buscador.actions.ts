import { createAction, props } from '@ngrx/store';

export const setParametros = createAction(
  '[Buscar] setParametros',
  props<{ personajes: string[]; lugares: string[]; episodios: string[] }>()
);
