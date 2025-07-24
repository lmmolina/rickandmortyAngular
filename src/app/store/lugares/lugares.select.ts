import { createFeatureSelector } from '@ngrx/store';
import { Lugar } from '../../modelos/lugar';

export const selectLugares = createFeatureSelector<Lugar[]>('lugares');
export const selectLugar = createFeatureSelector<Lugar>('lugar');
