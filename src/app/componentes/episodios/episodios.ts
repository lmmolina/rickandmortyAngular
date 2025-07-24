import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { selectEpisodios } from '../../store/episodios/episodios.select';
import { listarEpisodios } from '../../store/episodios/episodios.actions';

@Component({
  selector: 'app-episodios',
  imports: [MatCardModule, CommonModule],
  templateUrl: './episodios.html',
  styleUrl: './episodios.scss',
})
export class Episodios {
  store = inject(Store);
  items = this.store.select(selectEpisodios);

  ngOnInit() {
    this.store.dispatch(listarEpisodios());
  }
}
