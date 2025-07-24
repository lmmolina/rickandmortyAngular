import { createReducer, on } from '@ngrx/store';
import { Personaje } from '../../modelos/personaje';
import {
  filtrarPersonajesEpisodio,
  filtrarPersonajesLugar,
  listarPersonajes,
  obtenerPersonaje,
  setPersonajes,
} from './personajes.actions';

const personajes: Personaje[] = [];
const personaje: Personaje = {
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [],
  url: '',
  created: '',
};
export let cargandoPersonajes = false;

export const personajesReducer = createReducer(
  personajes,
  on(listarPersonajes, (state) => {
    cargandoPersonajes = true;
    return state;
  }),
  on(setPersonajes, (state, { data }) => {
    cargandoPersonajes = false;

    return data;
  }),
  on(filtrarPersonajesEpisodio, (state, { idepisodio }) =>
    state.filter((p) =>
      p.episode.some((ep) => ep.includes(`episode/${idepisodio}`))
    )
  ),
  on(filtrarPersonajesLugar, (state, { lugar }) =>
    state.filter((p) => p.location.name.toLowerCase() == lugar.toLowerCase())
  )
);

export const personajeReducer = createReducer(
  personaje,
  on(
    obtenerPersonaje,
    (state, { idpersonaje }) =>
      personajes.find((p) => p.id == idpersonaje) || state
  )
);
