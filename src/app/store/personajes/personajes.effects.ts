import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, expand, map, Observable, reduce, switchMap } from 'rxjs';
import { listarPersonajes, setPersonajes } from './personajes.actions';
import { Personaje } from '../../modelos/personaje';

@Injectable()
export class PersonajesEffects {
  http = inject(HttpClient);
  actions = inject(Actions);

  cargarPersonajesEffect = createEffect(() => {
    return this.actions.pipe(
      ofType(listarPersonajes),
      switchMap(() =>
        this.http
          .get<ApiResponse>('https://rickandmortyapi.com/api/character?page=1')
          .pipe(
            expand((response) =>
              response.info.next
                ? this.http.get<ApiResponse>(response.info.next)
                : EMPTY
            ),
            map((response) => response.results),
            reduce<Personaje[], Personaje[]>(
              (acc, results) => [...acc, ...results],
              []
            ),
            map((personajes: Personaje[]) =>
              setPersonajes({ data: personajes })
            )
          )
      )
    );
  });
}

interface ApiResponse {
  info: {
    next: string | null;
  };
  results: Personaje[];
}
