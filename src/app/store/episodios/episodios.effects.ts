import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, expand, map, reduce, switchMap, tap } from 'rxjs';
import { listarEpisodios, setEpisodios } from './episodios.actions';
import { Episodio } from '../../modelos/episodio';

@Injectable()
export class EpisodiosEffects {
  http = inject(HttpClient);
  actions = inject(Actions);

  cargarEpisodiosEffect = createEffect(() => {
    return this.actions.pipe(
      ofType(listarEpisodios),
      switchMap(() =>
        this.http
          .get<ApiResponse>('https://rickandmortyapi.com/api/episode?page=1')
          .pipe(
            expand((response) =>
              response.info.next
                ? this.http.get<ApiResponse>(response.info.next)
                : EMPTY
            ),
            map((response) => response.results),
            reduce<Episodio[], Episodio[]>(
              (acc, results) => [...acc, ...results],
              []
            ),
            map((personajes: Episodio[]) => {

              return setEpisodios({ data: personajes });
            })
          )
      )
    );
  });
}

interface ApiResponse {
  info: {
    next: string | null;
  };
  results: Episodio[];
}
