import { createReducer, on } from '@ngrx/store';
import { setParametros } from './buscador.actions';

const parametros: string[] = [];

export const buscarReducer = createReducer(
  parametros,
  on(setParametros, (state, { personajes, lugares, episodios }) =>
    Array.from(new Set([...personajes??[], ...lugares??[], ...episodios??[]]))
  )
);
