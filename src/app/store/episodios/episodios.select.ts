import { createFeatureSelector } from '@ngrx/store';
import { Episodio } from '../../modelos/episodio';

export const selectEpisodios = createFeatureSelector<Episodio[]>('episodios');
export const selectEpisodio = createFeatureSelector<Episodio>('episodio');
