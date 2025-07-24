import { createFeatureSelector } from '@ngrx/store';

export const selectParametros = createFeatureSelector<string[]>('parametros');
