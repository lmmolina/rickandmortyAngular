import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { map, Observable, startWith, switchMap } from 'rxjs';
import { selectParametros } from '../../store/buscador/buscador.select';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  searchControl = new FormControl('');
  store = inject(Store);
  options = this.store.select(selectParametros);
  filteredOptions!: Observable<string[]>;
  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      switchMap((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): Observable<string[]> {
    const filterValue = value.toLowerCase();
    return this.options.pipe(
      map((options) =>
        options.filter((option) => option.toLowerCase().includes(filterValue))
      )
    );
  }
}
