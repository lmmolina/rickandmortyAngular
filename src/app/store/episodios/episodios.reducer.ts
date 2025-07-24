import { createReducer, on } from '@ngrx/store';
import { Episodio } from '../../modelos/episodio';
import {
  filtrarPersonajeEpisodio,
  listarEpisodios,
  obtenerEpisodio,
  setEpisodios,
} from './episodios.actions';

const episodios: Episodio[] = [];
const episodio: Episodio = {
  id: 0,
  name: '',
  air_date: '',
  episode: '',
  characters: [],
  url: '',
  created: '',
};
export let cargandoEpisodios = false;

export const episodiosReducer = createReducer(
  episodios,
  on(listarEpisodios, (state) => {
    cargandoEpisodios = true;
    return state;
  }),
  on(setEpisodios, (state, { data }) => {
    cargandoEpisodios = false;
    return data;
  }),
  on(filtrarPersonajeEpisodio, (state, { idpersonaje }) =>
    state.filter((p) =>
      p.characters.some((ep) => ep.includes(`character/${idpersonaje}`))
    )
  )
);

export const episodioReducer = createReducer(
  episodio,
  on(
    obtenerEpisodio,
    (state, { idepisodio }) =>
      episodios.find((p) => p.id == idepisodio) || state
  )
);
