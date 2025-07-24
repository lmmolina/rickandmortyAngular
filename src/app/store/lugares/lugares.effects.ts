import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, expand, map, reduce, switchMap } from 'rxjs';
import { listarLugares, setLugares } from './lugares.actions';
import { Lugar } from '../../modelos/lugar';


@Injectable()
export class LugaresEffects {
  http = inject(HttpClient);
  actions = inject(Actions);

  cargarLugaresEffect = createEffect(() => {
    return this.actions.pipe(
      ofType(listarLugares),
      switchMap(() =>
        this.http
          .get<ApiResponse>('https://rickandmortyapi.com/api/location?page=1')
          .pipe(
            expand((response) =>
              response.info.next
                ? this.http.get<ApiResponse>(response.info.next)
                : EMPTY
            ),
            map((response) => response.results),
            reduce<Lugar[], Lugar[]>(
              (acc, results) => [...acc, ...results],
              []
            ),
            map((personajes: Lugar[]) =>
              setLugares({ data: personajes })
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
  results: Lugar[];
}

