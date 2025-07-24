import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { selectLugares } from '../../store/lugares/lugares.select';
import { listarLugares } from '../../store/lugares/lugares.actions';

@Component({
  selector: 'app-lugares',
  imports: [MatCardModule, CommonModule],
  templateUrl: './lugares.html',
  styleUrl: './lugares.scss',
})
export class Lugares {
  store = inject(Store);
  items = this.store.select(selectLugares);

  ngOnInit() {
    this.store.dispatch(listarLugares());
  }
}
