import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { selectPersonajes } from '../../store/personajes/personajes.select';
import { listarPersonajes } from '../../store/personajes/personajes.actions';
import {
  filtrarPersonajeEpisodio,
  listarEpisodios,
} from '../../store/episodios/episodios.actions';
import {
  filtrarPersonajeLugar,
  listarLugares,
} from '../../store/lugares/lugares.actions';
import { cargandoPersonajes } from '../../store/personajes/personajes.reducer';

@Component({
  selector: 'app-personajes',
  imports: [MatCardModule, CommonModule],
  templateUrl: './personajes.html',
  styleUrl: './personajes.scss',
})
export class Personajes implements OnInit {
  store = inject(Store);
  items = this.store.select(selectPersonajes);
  cargando = cargandoPersonajes;

  ngOnInit() {
    this.store.dispatch(listarPersonajes());
  }
  onSelect(id: number, event: MouseEvent) {
    this.reiniciarFiltros();
    this.store.dispatch(filtrarPersonajeEpisodio({ idpersonaje: id }));
    this.store.dispatch(filtrarPersonajeLugar({ idpersonaje: id }));
    const card = event.currentTarget as HTMLElement;
    card.classList.add('active');
  }

  private reiniciarFiltros() {
    const cards = document.querySelectorAll('.personajes .card');
    cards.forEach((el) => el.classList.remove('active'));
    this.store.dispatch(listarEpisodios());
    this.store.dispatch(listarLugares());
  }
}
