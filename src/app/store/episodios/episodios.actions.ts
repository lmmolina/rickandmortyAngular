import { createAction, props } from '@ngrx/store';
import { Episodio } from '../../modelos/episodio';

export const listarEpisodios = createAction('[Episodios] listar');
export const setEpisodios = createAction(
  '[Episodios] set',
  props<{ data: Episodio[] }>()
);
export const filtrarPersonajeEpisodio = createAction(
  '[Episodios] filtrarPersonaje',
  props<{ idpersonaje: number }>()
);
export const obtenerEpisodio = createAction(
  '[Episodios] obtener',
  props<{ idepisodio: number }>()
);
