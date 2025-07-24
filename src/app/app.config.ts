import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {
  personajeReducer,
  personajesReducer,
} from './store/personajes/personajes.reducer';
import { provideEffects } from '@ngrx/effects';
import { PersonajesEffects } from './store/personajes/personajes.effects';
import { provideHttpClient } from '@angular/common/http';
import {
  episodioReducer,
  episodiosReducer,
} from './store/episodios/episodios.reducer';
import { EpisodiosEffects } from './store/episodios/episodios.effects';
import { lugaresReducer, lugarReducer } from './store/lugares/lugares.reducer';
import { LugaresEffects } from './store/lugares/lugares.effects';
import { buscarReducer } from './store/buscador/buscador.reducer';
import { BuscarEffects } from './store/buscador/buscador.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      personaje: personajeReducer,
      personajes: personajesReducer,
      episodio: episodioReducer,
      episodios: episodiosReducer,
      lugar: lugarReducer,
      lugares: lugaresReducer,
      parametros: buscarReducer,
    }),
    provideEffects([
      PersonajesEffects,
      EpisodiosEffects,
      LugaresEffects,
      BuscarEffects,
    ]),
    provideHttpClient(),
  ],
};
