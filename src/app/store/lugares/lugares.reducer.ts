import { createReducer, on } from '@ngrx/store';
import { Lugar } from '../../modelos/lugar';
import {
  filtrarPersonajeLugar,
  listarLugares,
  obtenerLugar,
  setLugares,
} from './lugares.actions';

const lugares: Lugar[] = [];
const lugar: Lugar = {
  id: 0,
  name: '',
  type: '',
  dimension: '',
  residents: [],
  url: '',
  created: '',
};
export let cargandoLugares = false;

export const lugaresReducer = createReducer(
  lugares,
  on(listarLugares, (state) => {
    cargandoLugares = true;
    return state;
  }),
  on(setLugares, (state, { data }) => {
    cargandoLugares = false;
    return data;
  }),
  on(filtrarPersonajeLugar, (state, { idpersonaje }) =>
    state.filter((p) =>
      p.residents.some((ep) => ep.includes(`character/${idpersonaje}`))
    )
  )
);

export const lugarReducer = createReducer(
  lugar,
  on(
    obtenerLugar,
    (state, { idlugar }) => lugares.find((p) => p.id == idlugar) || state
  )
);
