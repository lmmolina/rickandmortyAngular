import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { combineLatest, filter, map, of, switchMap } from 'rxjs';
import { setLugares } from '../lugares/lugares.actions';
import { setPersonajes } from '../personajes/personajes.actions';
import { setEpisodios } from '../episodios/episodios.actions';
import { setParametros } from './buscador.actions';
import { Store } from '@ngrx/store';
import { selectEpisodios } from '../episodios/episodios.select';
import { selectPersonajes } from '../personajes/personajes.select';
import { selectLugares } from '../lugares/lugares.select';

@Injectable()
export class BuscarEffects {
  actions = inject(Actions);
  store = inject(Store);
  episodios = this.store.select(selectEpisodios);
  personajes = this.store.select(selectPersonajes);
  lugares = this.store.select(selectLugares);

  parametrosEffect = createEffect(() => {
    return this.actions.pipe(
      ofType(setEpisodios, setLugares, setPersonajes),
      switchMap(() => {
        return combineLatest([
          this.episodios,
          this.personajes,
          this.lugares,
        ]).pipe(
          filter(
            ([episodios, personajes, lugares]) =>
              !!episodios && !!personajes && !!lugares
          ),
          map(([episodios, personajes, lugares]) => {

            return setParametros({
              episodios: episodios.map((e) => e.name),
              personajes: personajes.map((p) => p.name),
              lugares: lugares.map((l) => l.name),
            });
          })
        );
      })
    );
  });
}
