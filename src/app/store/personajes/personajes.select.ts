import { createFeatureSelector } from "@ngrx/store";
import { Personaje } from "../../modelos/personaje";

export const selectPersonajes = createFeatureSelector<Personaje[]>('personajes'); 
export const selectPersonaje = createFeatureSelector<Personaje>('personaje'); 