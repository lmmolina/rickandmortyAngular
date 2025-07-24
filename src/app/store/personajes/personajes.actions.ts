import { createAction, props } from '@ngrx/store';
import { Personaje } from '../../modelos/personaje';

export const listarPersonajes = createAction('[Personajes] listar');
export const setPersonajes = createAction(
  '[Personajes] set',
  props<{ data: Personaje[] }>()
);
export const filtrarPersonajesLugar = createAction(
  '[Personajes] filtrarLugar',
  props<{ lugar: string }>()
);
export const filtrarPersonajesEpisodio = createAction(
  '[Personajes] filtrarEpisodio',
  props<{ idepisodio: number }>()
);
export const obtenerPersonaje = createAction(
  '[Personajes] obtener',
  props<{ idpersonaje: number }>()
);
